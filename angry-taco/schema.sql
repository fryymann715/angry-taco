

DROP TABLE IF EXISTS books;

CREATE TABLE books
(
  id SERIAL PRIMARY KEY,
  title VARCHAR(256) NOT NULL,
  year VARCHAR(16),
  publisher VARCHAR(256),
  img_url VARCHAR(512),
  summary TEXT
);

DROP TABLE IF EXISTS authors;

CREATE TABLE authors
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  bio TEXT DEFAULT '',
  img_url VARCHAR(512)
);

DROP TABLE IF EXISTS book_authors;

CREATE TABLE book_authors
(
  book_id INT NOT NULL,
  author_id INT NOT NULL
);

DROP TABLE IF EXISTS genres;

CREATE TABLE genres
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL
);

DROP TABLE IF EXISTS book_genres;

CREATE TABLE book_genres
(
  book_id INT NOT NULL,
  genre_id INT NOT NULL
);

DROP TABLE IF EXISTS publishers;

CREATE TABLE publishers
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL
);

DROP TABLE IF EXISTS book_publishers;

CREATE TABLE book_publishers
(
  book_id INT NOT NULL,
  publisher_id INT NOT NULL
);
