const {pool} = require('./database.js');
const dbQuery = async (sqlCommand,params) => {
    return pool.query(sqlCommand,params);
}
const getAll = async () => {
    const result = await dbQuery('SELECT * FROM roee.t_apps');
    return result;
}

const add = async (payload) => {
    console.log(payload);
    const result = await dbQuery('INSERT INTO roee.t_apps("id",imageUrl,"name",price,description,companyName,createdAt) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING "id"',[...payload]);
    return result;
}
module.exports = {getAll,add};