-- Database name: portfolio

CREATE TABLE "tags" (
    "tag_id" SERIAL PRIMARY KEY,
    "tagname" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("tagname") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Feedback App', 'A basic feedback app that uses react, redux, and postgreSQL for the database.', '/images/feedback.png', 'https://shielded-badlands-39219.herokuapp.com/#/', 'https://github.com/Buckhalton/Weekend-Challenge-5', '2018-12-08', 1);