module.exports=function(){
var mysql=require('mysql');
 var conn=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'socketioChat'
	}); 
	conn.connect();
}