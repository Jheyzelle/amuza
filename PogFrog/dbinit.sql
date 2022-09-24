/*
CREATE TABLE codes (
    code_id SMALLINT PRIMARY KEY,
    room_code SMALLINT
);*/

CREATE TABLE task (
    task_id SMALLINT PRIMARY KEY,
    room_id SMALLINT,
    progress varchar(255),
    task_name varchar(255),
    deadline Date,
    info varchar(255),
    FOREIGN KEY (room_id) REFERENCES codes (code_id)
);

CREATE TABLE persons (
    person_id SMALLINT PRIMARY KEY,
    task_key SMALLINT,
    name_id varchar(255),
    FOREIGN KEY (task_key) REFERENCES task (task_id)
);