CREATE TABLE car(car_id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
model VARCHAR (70) NOT NULL,
description VARCHAR(100) NOT NULL,
year VARCHAR(4) NOT NULL,image TEXT NOT NULL,
condition VARCHAR NOT NULL,
installment NUMERIC(5,2) NOT NULL,
price INT NOT NULL);



CREATE TABLE users(user_id SERIAL PRIMARY KEY,
username VARCHAR(15) NOT NULL,
email VARCHAR (70) UNIQUE NOT NULL,
password VARCHAR (200) UNIQUE NOT NULL,
follower TEXT[],
following TEXT[],
image VARCHAR(450),
role VARCHAR (10) DEFAULT 'user',
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE post(media TEXT[] NOT NULL,
    caption VARCHAR(100) NOT NULL,
    author VARCHAR (50)REFERENCES users(username),
    likes TEXT[],
    comments json,
    post_id SERIAL PRIMARY KEY)
    
CREATE TABLE savedpost (
owner VARCHAR(50) NOT NULL REFERENCES users(username),
post REFERENCES posts(post_id),
savedpost_id SERIAL PRIMARY KEY

)