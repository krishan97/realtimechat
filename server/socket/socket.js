 module.exports=function(io,rooms,users,userName){

	  io.on('connection',function(socket){
	 
	 socket.emit('roomUpdate',JSON.stringify(rooms));
	socket.on('newroom',function(data){
		rooms.push(data);
	 	socket.broadcast.emit('roomUpdate',JSON.stringify(rooms));
		socket.emit('roomUpdate',JSON.stringify(rooms));
	});	
	 socket.on('nickName',function(data,callback){
		// if(nicknames.indexOf(data) != '-1'){
    if(data in users){
	 callback(false);
	}else{ callback(true);
		socket.nickname=data;
		users[socket.nickname]=socket;	
		upDateName();
	}
  });
	function upDateName(){
		io.emit('usernames',Object.keys(users));	
	}
       
	socket.on('sendphoto',function(data){ 
		  io.emit('whisperimg',{msg: data, UserName: socket.nickname});
	});
	socket.on('send-message',function(data,callback){ 
	// io.sockets.emit('new message',data);
	var msgg=data.trim();
	if(msgg.substring(0,2)===':)'){
		msgg=msgg.substring(2);
		var spaceeee=msgg.indexOf(' ');
		if(spaceeee != -1){
		var name=msgg.substring(0, spaceeee);
		 var msgg=msgg.substring(spaceeee + 1)
			 io.emit('smile',{msg: msgg, UserName: socket.nickname});
		  }else{
		callback('Error : please add message for whisper');
		}
	}else if(msgg.substring(0,6)==='/happy'){
		msgg=msgg.substring(6);
		var spaceeee=msgg.indexOf(' ');
		if(spaceeee != -1){
		var name=msgg.substring(0, spaceeee);
		 var msgg=msgg.substring(spaceeee + 1)
			 io.emit('happy',{msg: msgg, UserName: socket.nickname});
		  }else{
		callback('Error : please add message for whisper');
		}
	} else if(msgg.substring(0,6)==='/user '){
		msgg=msgg.substring(6);
		var spaceeee=msgg.indexOf(' ');
		if(spaceeee != -1){
		var name=msgg.substring(0, spaceeee);
		 var msgg=msgg.substring(spaceeee + 1)
			if(name in users){
			users[name].emit('whisper',{msg: msgg, UserName: socket.nickname});
		 	}else{
			 	callback('Error : Enter name valid user');
				}
		}else{
		callback('Error : please add message for whisper');
		}
	}else{
	io.emit('new message',{msg: msgg, UserName: socket.nickname});
	}
	 });
	 
	socket.on('disconnect',function(data){
		 if(!socket.nickname) return;
		delete users[socket.nickname];
		 	upDateName();	
	 	});		
 	socket.on('disconnect',function(data){
  if(!socket.usernAme) return;
		delete userName[socket.usernAme];
		 upDateuserName(); });
		 
	 socket.on('joinRoom',function(data,callback){
		// if(nicknames.indexOf(data) != '-1'){
    if(data in userName){
	 callback(false);
	}else{ callback(true);
		socket.usernAme=data.username;
		 userName[socket.usernAme]=socket;	
		 socket.join(data.roomid);
		 upDateuserName();
	}
  });
	function upDateuserName(){
		io.emit('usernamee',Object.keys(userName));	
	}
	socket.on('sendMessage',function(data,callback){ 
	 var msgg=data.trim();
	 	io.sockets.emit('newMessage',{msg: msgg, UserName: socket.usernAme});
	 
	 });
	
	
		 });
 

 }
