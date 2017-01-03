   <html>
<head><title>{{Title}} </title> 
 <link rel='stylesheet' id='sparkling-fonts-css'  href='../css/css.css' type='text/css' media='all' />
 <link rel="stylesheet" href="../fancybox/jquery.fancybox-buttons.css">
        <link rel="stylesheet" href="../fancybox/jquery.fancybox-thumbs.css">
        <link rel="stylesheet" href="../fancybox/jquery.fancybox.css">
 </head>
<body onload="myFunction()">
<div id="nickwrap"> 
<p>Enter a username: </p>
<p id="nicNameError"></p>
<form id="setNickk">
<input size="35" id="nickName"></input>
<input  type="submit"></input>
</form>
</div>
<div id="contentWrap"> 
  <div id="chatWrap">
    <div id="chat"></div>
		<form id="send-message">
		<input size="35" id="message"></input>
 <input  type="submit" class="csubmit"></input>
		</form>
<form id="sendphoto">
<input id="inputFileToLoad" type="file" onchange="loadImageFileAsURL();" />
<textarea id="textAreaFileContents" style="display:none"></textarea>
  <input  type="submit" value="Image Send"></input>
</form>
	</div> 
	<div id="createRoom"> Create Room
	<form id="createROoM"> 
	<input size="35" class="newRoomName"></input>
	  <input  type="submit" ></input>
      </form>
	 <ul> Room Name <span  class="RoomList"> </span>  </ul>
         </div>
	</div> 
	<div id="displayUser"> UserName
<ul >  <span class="users"> </span> </ul></div> 
</div>
 </body>
  <script src="../js/moment.min.js"></script>
<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
  <script src="/socket.io/socket.io.js"></script>
  <script src="/main.js"></script>
 <script src="../js/custom.js"></script>

<script type="text/javascript">
 function myFunction(){
 $('#inputFileToLoad').val('');
}
function loadImageFileAsURL()
{
    var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];
 
        var fileReader = new FileReader();
 
        fileReader.onload = function(fileLoadedEvent) 
        {
            var textAreaFileContents = document.getElementById
            (
                "textAreaFileContents"
            );
     
            textAreaFileContents.innerHTML = fileLoadedEvent.target.result;
        };
 
        fileReader.readAsDataURL(fileToLoad);
    }
}
  </script>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  		<script>window.jQuery || document.write('<script src="../js/libs/jquery-1.7.1.min.js"><\/script>')</script>
       <!-- FancyBox -->
		<script src="../js/fancybox/jquery.fancybox.js"></script>
		<script src="../js/fancybox/jquery.fancybox-buttons.js"></script>
		<script src="../js/fancybox/jquery.fancybox-thumbs.js"></script>
        <script src="../js/fancybox/jquery.easing-1.3.pack.js"></script>
		<script src="../js/fancybox/jquery.mousewheel-3.0.6.pack.js"></script>
        
        <script type="text/javascript">
			$(document).ready(function() {
			$(".fancybox").fancybox({type : 'image'});;
			});
		</script>
</html>
