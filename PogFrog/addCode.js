const { Pool } = require("pg");

(async () => {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      application_name: "$ docs_simplecrud_node-postgres",
    });
  
    // Connect to database
    const client = await pool.connect();

    var sql = "INSERT INTO codes(room_code) VALUES (2323)"
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted into codes table");
    })

    process.exit();

})().catch((err) => console.log(err.stack));