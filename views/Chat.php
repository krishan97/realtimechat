  <html>
<head><title>{{Title}} </title> 
 <link rel='stylesheet' id='sparkling-fonts-css'  href='../css/css.css' type='text/css' media='all' />
 </head>
<body>
<div id="nickwrap"> 
<p>Enter a username: </p>
<p id="nicNameError"></p>
<form id="setNickkEnter">
<input size="35" id="nickNamer"></input>
<input  type="submit"></input>
</form>
</div>
<div id="contentWrap"> 
  <div id="chatWrap">
    <div id="chatt"></div>
		<form id="sendMessage">
		<input size="35" id="messagee"></input>
		<input  type="submit" class="csubmit"></input>
		</form>
	</div> 
	 </div> 
	<div id="displayUser"> UserName
<ul >  <span class="usersroom"> </span> </ul></div> 
</div>
 </body>
<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src="/socket.io/socket.io.js"></script>
  <script src="/main.js"></script>
 <script src="../js/customroom.js"></script>
 </html>
