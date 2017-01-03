  <?php
error_reporting(0);
$servername='localhost';
$username='root';
$password='';
$conn=mysql_connect($servername,$username,$password);
$db_selected=mysql_select_db('socketiochat');
?>