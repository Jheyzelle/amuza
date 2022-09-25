
//DATABASE_URL = "postgresql://watchondaniel_hotmai:07KXysyVUTcFV5Q8xZg4zA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dpolite-hacker-5213"

const { Client } = require('pg')

const client = new Client(process.env.DATABASE_URL)

//(async () => {
client.connect(function (err){
    if (err) throw err;
    console.log("Connected")



    var sql = "INSERT INTO codes (code_id, room_code) VALUES (4321, 2)"
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    })


}) 


//console.log(DATABASE_URL)

/*var sql1 = "SELECT * FROM codes"
client.query(sql1, function(err, result, fields) {
    console.log(result)
})*/



process.exit();
//})().catch((err) => console.log(err.stack));