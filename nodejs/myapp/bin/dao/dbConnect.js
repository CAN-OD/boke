/**
 * Created by SF-1888 on 2016/8/18.
 */
var mysql=require('mysql');

function connectServer(){

    var client=mysql.createConnection({
//        host:'localhost',
//        user:'root',
//        password:'',
//        database:'crm'
        host:'121.42.85.194',
        user:'qdm167504488_db',
        password:'450451297fw',
        database:'qdm167504488.my3w.com'
    });
    return client;
}


function  selectFun(client,username,callback){
    //client为一个mysql连接对象
    client.query('select password from table_1 where username="'+username+'"',function(err,results,fields){
        if(err) throw err;

        callback(results);
    });
}

function insertFun(client , username , password,callback){
    client.query('insert into table_1 value(?,?)', [username, password], function(err,result){
        if( err ){
            console.log( "error:" + err.message);
            return err;
        }else{
            alert(55)
        }
        callback(err);
    });
}

exports.connect = connectServer;
exports.selectFun  = selectFun;
exports.insertFun = insertFun;

