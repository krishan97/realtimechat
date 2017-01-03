  jQuery(function ($){
	var socket = io.connect();
	var $nicNameForm=$('#setNickkEnter');
	var $nicNameError=$('#nicNameError');
	var $nicNameBox=$('#nickNamer');
	var $messageForm =$('#sendMessage');
	var $messageBox=$('#messagee');
	var $chat= $('#chatt');
	var $users=$('.usersroom');
 var $userName=$nicNameBox.val();
 var roomid = Number(window.location.pathname.match(/\/chat\/(\d+)$/)[1]);

	$nicNameForm.submit(function(e){
		e.preventDefault();
		var $NameLe=$nicNameBox.val();
		if($NameLe!=''){
		socket.emit('joinRoom',{username:$nicNameBox.val(),roomid:roomid},function(data){
			if(data){
				console.log("success");
				$('#nickwrap').hide();
			   	$('#contentWrap').show();
				$('#displayUser').show();
		 	}else{
				$nicNameError.html('This username is already taken! Try again later');
			}	
		});
		}else{
				$nicNameError.html('This username is required');
			}
	             $nicNameBox.val('');
	 });	
		socket.on('usernamee',function(data){
			var $html="";
			for(i=0; i<data.length;i++){
				$html+= '<li>' + data[i] +'</li>';				
			}
			$users.html($html);		
		});
           $messageForm.submit(function(e){
		e.preventDefault();
		if($messageBox.val()!=''){
		socket.emit('sendMessage',$messageBox.val(),function(data){//add later
		
		 });
		$messageBox.val('');}
	 });
	 		
		socket.on('newMessage',function(data){
	       $chat.append("<span class='msgg'><b>" + data.UserName + " </b> :  " + data.msg + "</span><br>");
		    var oldscrollHeight = 0;  	
		    var newscrollHeight = $("#chatt").prop("scrollHeight") - 20; 
                if(newscrollHeight > oldscrollHeight){  
                    $("#chatt").animate({ scrollTop: newscrollHeight }, 'normal'); 
                }   
		 });
		
		  
	

});