 function start(){
	 
	  var express=require('express'),
	path = require('path'),
	  app = express(),
	   url = require('url'),
   cookieParser=require('cookie-parser'),
   	session=require('express-session'),
	 users={},
	  userName={},
	rooms=[];
	 app.set('views',path.join(__dirname,'../views'));
	app.engine('php',require('hogan-express'));
	app.set('view engine','php');
	
	app.use(express.static(path.join(__dirname,'../public')));
	
	app.set('port',process.env.PORT || 2016); // Port Start
	
	// Session
	app.use(cookieParser());
	app.use(session({secret:'Krishan',saveUninitialized:true,resave:true}));
	//End
	
	require('./routes/routes.js')(express,app,url);  // router file path
		var server= require('http').createServer(app);
		var io=require('socket.io').listen(server);
		require('./socket/socket.js')(io,rooms,users,userName);	
		server.listen(app.get('port'),function(){
			console.log('server start on port'+ app.get('port') );
			});
}exports.start = start;
