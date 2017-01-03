 module.exports=function(express,app,url){
	   var router=express.Router();
	 router.get('/', function(req,res,next){
		res.render('index',{Title:'Chat'}); 
		 });
	app.get('/create', function(req,res){

		// Generate unique id for the room
		var id = Math.round((Math.random() * 1000000));
        // Redirect to the random room
		res.redirect('/chat/'+id);
	});
	 router.get('/chat/:id', function(req,res){
                
		res.render('chat',{Title:'Chat Room'});
	});
		 app.use('/',router); 
  }
