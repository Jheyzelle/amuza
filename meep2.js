const { Pool } = require("pg");

(async () => {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      application_name: "$ docs_simplecrud_node-postgres",
    });
  
    // Connect to database
    const client = await pool.connect();

    var sql = "INSERT INTO codes (code_id, room_code) VALUES (4321, 2)"
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    })

    process.exit();

})().catch((err) => console.log(err.stack));