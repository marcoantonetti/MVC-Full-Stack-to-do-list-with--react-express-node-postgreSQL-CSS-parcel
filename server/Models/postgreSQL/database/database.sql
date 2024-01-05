CREATE DATABASE todoappDatabase;

CREATE TABLE todos (
	title varchar(100) NOT NULL,
	category varchar(100) NOT NULL, 
	description varchar(250) ,
	completed BOOL DEFAULT FALSE,
	utc timestamp NOT NULL,
	id UUID PRIMARY KEY 
);

CREATE TABLE users (
	id serial PRIMARY KEY ,
	userName varchar(100) NOT NULL,
	password varchar(100) NOT NULL, 
);