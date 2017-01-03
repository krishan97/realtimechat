  jQuery(function ($){
	var height = 0;
	var socket = io.connect();
 	var $nicNameForm=$('#setNickk');
	var $nicNameError=$('#nicNameError');
	var $nicNameBox=$('#nickName');
	var $messageForm =$('#send-message');
	var $messageBox=$('#message');
	var $chat= $('#chat');
	var $users=$('.users');
	var $createROoMForm=$('#createROoM');
	var $newRoomNameText=$('.newRoomName');
	var $userName=$nicNameBox.val();
	var $textAreaFileContents=$('#textAreaFileContents');
	var $inputFileToLoad=$('#inputFileToLoad');
	var $sendphotoFrom=$('#sendphoto');
	var messageTimeSent = $(".timesent");
	$createROoMForm.submit(function(e){
	e.preventDefault();	
		var room_name=$newRoomNameText.val();
		if(room_name!=''){
			var room_number=parseInt(Math.random() * 10000);
			socket.emit('newroom',{room_name:room_name,room_number:room_number});
			$newRoomNameText.val('');
		}
	});
	$nicNameForm.submit(function(e){
		e.preventDefault();
		var $NameLe=$nicNameBox.val();
		if($NameLe!=''){
		socket.emit('nickName',$nicNameBox.val(),function(data){
			if(data){
				console.log("success");
				$('#nickwrap').hide();
			   	$('#contentWrap').show();
				$('#displayUser').show();
		     	        $('#sendphoto').show();
		 	}else{
				$nicNameError.html('This username is already taken! Try again later');
			}	
		});
		}else{
				$nicNameError.html('This username is required');
			}
	             $nicNameBox.val('');
	 });	
		socket.on('usernames',function(data){
			var $html="";
			for(i=0; i<data.length;i++){
				$html+= '<li>' + data[i] +'</li>';				
			}
			$users.html($html);		
		});
           $messageForm.submit(function(e){
		e.preventDefault();
		if($messageBox.val()!=''){
		socket.emit('send-message',$messageBox.val(),function(data){//add later
		  $chat.append("<span class='error'>" + data  + "</span><br>");
		});
		$messageBox.val('');
		}
	 });
		$sendphotoFrom.submit(function(e){
			e.preventDefault();
		 if($textAreaFileContents.html()!=''){
		 socket.emit('sendphoto',$textAreaFileContents.html(),function(data){//add later
		  $chat.append("<span class='error'>" + data  + "</span><br>");
		});
		$textAreaFileContents.val('');
		$inputFileToLoad.val('');
		}
	 });

	 
			socket.on('roomUpdate',function(data){
			var $html='';
			var procData=JSON.parse(data);
			for(i=0; i<procData.length;i++){
			$html+= '<a href="chat/'+ procData[i].room_number +'" ><li>' +  procData[i].room_name +'</li></a>';			  				 }
			$('.RoomList').html($html);	
		 });		
		
		socket.on('new message',function(data){
		var Mesvar="<span class='msg'><b>" + data.UserName + " </b> :  " + data.msg + " <br>";
		   $chat.append(Mesvar);
	
		messageTimeSent = $(".timesent");
		messageTimeSent.last().text(now.fromNow());

				   var oldscrollHeight = 0;  	
		
				   var newscrollHeight = $("#chat").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chat").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }  
		 });
	 // Update the relative time stamps on the chat messages every minute

	setInterval(function(){

		messageTimeSent.each(function(){
			var each = moment($(this).data('time'));
			$(this).text(each.fromNow());
		});

	},60000);

		socket.on('smile',function(data){
	           $chat.append("<span class='whisper'><b>" + data.UserName + " </b> :  <img src='http://2.bp.blogspot.com/-qdtzy_7PEG4/U5f2GFtaSZI/AAAAAAAAIs0/-2xe5Xj8s_I/s1600/girl-smiley-face.png' width='30px'> " + data.msg + "' <br>"  );
	 	 var oldscrollHeight = 0;  	
			   var newscrollHeight = $("#chat").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chat").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }   
		 });		
   socket.on('happy',function(data){
	           $chat.append("<span class='whisper'><b>" + data.UserName + " </b> :  <img src='http://www.commentsyard.com/graphics/smile/smile33.jpg' width='30px'> " + data.msg + "' <br>"  );
	 	 var oldscrollHeight = 0;  	
			   var newscrollHeight = $("#chat").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chat").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }   
		 });
		 
		  socket.on('whisperimg',function(data){
	           $chat.append("<span class='whisper'><b>" + data.UserName + " </b> :  <a   alt=''   href='"+data.msg  +"' class='fancybox' rel='group'  ><img src='" + data.msg + "' width='80px' class='imgdowload'></a> <br>"  );
	 	 var oldscrollHeight = 0;  	
			   var newscrollHeight = $("#chat").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chat").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }   
		 });

		  socket.on('whisper',function(data){
	           $chat.append("<span class='whisper'><b>" + data.UserName + " </b> :  " + data.msg + " <br>"  );
	 	 var oldscrollHeight = 0;  	
			   var newscrollHeight = $("#chat").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chat").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }   
		 });


});
