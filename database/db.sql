CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,
    NAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL UNIQUE,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO USERS (NAME, EMAIL)
VALUES ('John Doe', 'jhon@gmail.com'),
    ('Tommy Doe', 'tommy@gmail.com');