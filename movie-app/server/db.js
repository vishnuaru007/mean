const mysql = require('mysql')

function connect(){

    const connection = mysql.createPool({
        connectionLimit : 5,
        host : 'localhost',
        user : 'root',
        password : 'vishnu',
        database : 'movie_app',
        port : 3306
    })
    return connection
}
module.export = {
    connect : connect
}