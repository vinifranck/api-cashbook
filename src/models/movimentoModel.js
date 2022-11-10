const mysql = require("./mysqlConnect");

get= async (query)=>{
    /**query = JSON.parse(query);
    sql= "SELECT ";
    if(query.select.data){
        sql+="data, ";
    }
    if(query.select.descricao){
        sql+="descricao, ";
    }
    if(query.select.valor){
        sql+="valor, ";
    }
    if(query.select.tipo){
        sql+="tipo, ";
    }
    sql=sql.substring(0, sql.length - 2);//remover dois ultimos caracter da sctring
    sql+=" FROM movimento"
    if(query.where){
        sql+=" WHERE"
        query.where.forEach(item =>{
            sql+=" "+item.campo+" "+item.operador.replace('/', '')+" '"+item.valor+"' AND";
        })
        sql=sql.substring(0, sql.length - 3);//remover utilmo segmento 'END' da string
    }**/
    sql="SELECT * FROM user"
    return await  mysql.query(sql);
}

post= async (data, idUser)=>{
    sql="INSERT INTO movimento"
    +" (descricao, data, valor, usuario_id, tipo)"
    +" VALUES "
    +"('"+data.descricao+"', '"+data.data+"', "+data.valor+", "+idUser+", '"+data.tipo+"')";
    const result = await  mysql.query(sql);
    if(result){
        resp={"status":"OK",insertId:result.insertId};
    }else{
        resp={"status":"Error",insertId:result.insertId};
    }
    return resp;
 }

 put= async (data, idUser)=>{
     sql="UPDATE movimentos SET "
     +"descricao='"+data.descricao+"', data= '"+data.data+"', valor="+data.valor+", usuario_id="+idUser+", tipo='"+data.tipo+"'" 
     +" WHERE id= "+data.id
    const result = await  mysql.query(sql);
    resp=null;
    if(result){
        resp={"status":"OK"};
    }
    return resp;
 }

 remove = async (idMov, idUser)=>{
    sql="DELETE INTO movimentos"
    +" WHERE id="+idMov;
    const result = await  mysql.query(sql);
    resp=null;
    if(result){
        resp={"status":"OK"};
    }
    return resp;
 }
module.exports= {get,post, put, remove}