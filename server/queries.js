const {pool} = require('./database.js');
const dbQuery = async (sqlCommand,params) => {
    return pool.query(sqlCommand,params);
}
const getAll = async () => {
    const result = await dbQuery('SELECT * FROM roee.t_apps');
    return result;
}

const add = async (payload) => {
    const result = await dbQuery('INSERT INTO roee.t_apps("id",imageUrl,"name",price,description,companyName,createdAt) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "id"',[...payload]);
    return result;
}

const remove = async (id) => {
    const result = await dbQuery('DELETE FROM roee.t_apps WHERE "id" = $1 RETURNING "id"',[id])
    return result;
}
const update = async (id,payload) => {
    const result = await dbQuery('UPDATE roee.t_apps SET imageUrl = $1, "name" = $2, price = $3, description = $4, companyName = $5 WHERE "id" = $6 RETURNING *',[...payload,id])
    return result
}
module.exports = {getAll,add,remove,update};