/*
CREATE TABLE codes (
    u_id SERIAL NOT NULL PRIMARY KEY,
    room_code SMALLINT UNIQUE
);*/

/*
CREATE TABLE task (
    u_id SERIAL NOT NULL  PRIMARY KEY,
    room_code SMALLINT,
    progress varchar(255),
    task_name varchar(255),
    date_due Date,
    info varchar(255),
    FOREIGN KEY (room_code) REFERENCES codes (room_code)
);*/

/*
CREATE TABLE project (
    u_id SERIAL NOT NULL PRIMARY KEY,
    proj_name varchar(255),
    proj_desc varchar(255),
    date_due Date
);*/

/*
CREATE TABLE persons (
    u_id SERIAL NOT NULL PRIMARY KEY,
    task_id SMALLINT,
    name_id varchar(255),
    FOREIGN KEY (task_id) REFERENCES task (u_id),
    
);*/

/*
ALTER TABLE persons 
    DROP COLUMN proj_id;*/


CREATE TABLE members (
    u_id SERIAL NOT NULL PRIMARY KEY,
    proj_id SMALLINT,
    FOREIGN KEY (proj_id) REFERENCES project (u_id)
);