
//THIS WORKS IF IN COMPONENTS FOLDER

const { Pool } = require("pg");

//function addProjDB(pName,pDesc,dead,members) {

(async () => {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      application_name: "$ docs_simplecrud_node-postgres",
    });
  
    // Connect to database
    const client = await pool.connect();

    var sql = "INSERT INTO project (proj_name, proj_desc, date_due) VALUES ('From', 'Pog', null)"
    client.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted into project table");
    })

    process.exit();

})().catch((err) => console.log(err.stack));

//}

