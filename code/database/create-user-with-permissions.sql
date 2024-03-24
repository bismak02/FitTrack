/* 

Giving full permissions to the team01o to user temporarily for testing

For later: split permissions onto different users

*/

GRANT ALL PRIVILEGES ON team01o.* TO '$DBUSER'@'%' IDENTIFIED BY '$DBPASS'; 

flush privileges;