
const { Pool } = require("pg");

function addTaskDB(tName,rCode,tDesc,prog,dead) {

(async () => {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      application_name: "$ docs_simplecrud_node-postgres",
    });
  
    // Connect to database
    const client = await pool.connect();

    //Take info from landing page and insert into cockroachDB
    //taskName = get input from form
    //room_code = get current room code
    //taskDesc = get input from form
    //progress = get input from form
    //deadline? = get input from form

    var sql = "INSERT INTO task (room_code, progress, task_name, date_due, info) VALUES (rCode, prog, tName, dead, tDesc)"
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    })

    process.exit();

})().catch((err) => console.log(err.stack));

}