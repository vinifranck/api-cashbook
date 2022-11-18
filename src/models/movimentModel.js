const mysql = require("./mysqlConnect");

get = async () => {
    sql = " SELECT * FROM moviment";
    return await mysql.query(sql);
};

post = async (date, idUser) => {
    sql =
        `INSERT INTO moviment (description, date, value, user_id, type) VALUES (
        ${date.description}, 
        ${date.date},
        ${date.value},
        ${idUser}, 
        ${date.type} )`;
    const result = await mysql.query(sql);
    if (result) {
        resp = { status: "OK", insertId: result.insertId };
    } else {
        resp = { status: "Error", insertId: result.insertId };
    }
    return resp;
};


put = async (date, idUser) => {
    sql =
        `UPDATE moviments SET description ${date.description}, 
        date= ${date.date}, 
        value= ${date.value}, 
        user_id= ${idUSer}, 
        type= ${date.type} 
        WHERE id= ${date.id}`;
    const result = await mysql.query(sql);
    resp = null;
    if (result) {
        resp = { status: "OK" };
    }
    return resp;
}; 

remove = async (idMov, idUser) => {
    sql = `DELETE INTO moviments" + " WHERE id= ${idMov}`;
    const result = await mysql.query(sql);
    resp = null;
    if (result) {
        resp = { status: "OK" };
    }
    return resp;
};

getCashBalance = async () => {
    input = "SELECT sum(value) AS input FROM moviment WHERE type='input'";
    output = "SELECT sum(value) AS output FROM moviment WHERE type='output'";
    const resultinput = await mysql.query(input);
    const resultoutput = await mysql.query(output);

    total =
        parseFloat(resultinput[0].input) - parseFloat(resultoutput[0].output);

    resp = null;
    if (resultinput && resultoutput) {
        resp = {
            cash_balance: total,
        };
    }
    return resp;
};

movIo = async () => {
    input = "SELECT sum(value) AS input FROM moviment WHERE type='input'";
    output = "SELECT sum(value) AS output FROM moviment WHERE type='output'";
    const resultinput = await mysql.query(input);
    const resultoutput = await mysql.query(output);

    resp = null;
    if (resultinput && resultoutput) {
        resp = {
            input: resultinput[0].input,
            output: resultoutput[0].output,
        };
    }
    return resp;
};
movIOYearMonth = async (data) => {
    input = `SELECT sum(value) AS input FROM moviment WHERE type='input' 
    AND YEAR(date) = ${data.year} AND MONTH(date) = ${data.month}`;
    output = `SELECT sum(value) AS output FROM moviment 
    WHERE type='output' AND YEAR(date) = ${data.year} AND MONTH(date) = ${data.month}`;

    const resultinput = await mysql.query(input);
    const resultoutput = await mysql.query(output);

    let resp = null;
    if (resultinput && resultoutput) {
        resp = {
            input: resultinput[0].input,
            output: resultoutput[0].output,
        };
    }
    return resp;
};

movYearMonth = async (data) => {
    sql = `SELECT * FROM moviment WHERE YEAR(date) = ${data.year}
     AND MONTH(date) = ${data.month}`;
    const result = await mysql.query(sql);
    if (result) {
        return result;
    }
};

movIOYearMonthMonthYear = async (data) => {
    input = `SELECT sum(value) AS input FROM moviment  WHERE type='input' 
    AND YEAR(date) BETWEEN ${data.year} AND ${data.finalyear}  AND MONTH(date) 
    BETWEEN ${data.month} AND ${data.finalmonth}`;
    output = `SELECT sum(value) AS output FROM moviment 
    WHERE type='output' AND YEAR(date) BETWEEN ${data.year} AND ${data.finalyear} 
    AND MONTH(date) BETWEEN ${data.month} AND ${data.finalmonth}`;
    const resultinput = await mysql.query(input);
    const resultoutput = await mysql.query(output);
    let resp = null;
    if (resultinput && resultoutput) {
        resp = {
            input: resultinput[0].input,
            output: resultoutput[0].output,
        };
    }
    return resp;
};

module.exports = {
    get, post, put, remove, getCashBalance, movIo, movYearMonth, movIOYearMonth, movIOYearMonthMonthYear,
};
