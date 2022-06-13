const db = require('../confiq/db');
const PrDetailsSave = async (name,phoneNo,email)=>{
    let sql =`
        INSERT INTO prdetails(
            userName,
            userPhoneNo,
            userEmail
        )
        VALUES(
            '${name}',
            ${phoneNo},
            '${email}'
        );`
        const newPost = await db.execute(sql);
        return newPost;
}
const PrDetailsFindAll = async () => {
    let sql =`SELECT * FROM prdetails;`
    const find = await db.execute(sql);
    return find;
}

module.exports = {
    PrDetailsFindAll : PrDetailsFindAll,
    PrDetailsSave : PrDetailsSave,
}