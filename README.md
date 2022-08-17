# DevToolkit-2-Middleware-To-Backend

NUS Professional Certificate for Fullstack Development

Final Assessment.

1) Build a database for the following 
CREATE TABLE customer (
 email VARCHAR(32) PRIMARY KEY,
 name VARCHAR(32) NOT NULL
 pwd VARCHAR(10) 
);
CREATE TABLE item (
 id CHAR(6) PRIMARY KEY CHECK (length(id)=6),
 name VARCHAR(32) NOT NULL,
 price NUMERIC CHECK (price>=0));
CREATE TABLE shop_order (
 id CHAR(7) PRIMARY KEY,
 custEmail VARCHAR(32) REFERENCES customer(email),
 itemID CHAR(6) REFERENCES item(id),
 quantity INTEGER CHECK (quantity > 0),
 address VARCHAR(128) NOT NULL,
 order_date DATE NOT NULL,
 shipping_date DATE CHECK 
 (shipping_date >= date OR 
 shipping_date IS NULL));
2) [BACKEND] State any 5 API Specs in a Word Document. [Follow the structure given in the 
Slides]
a. Should demonstrate CRUD operations
b. Should exhibit multi-table query or joins
3) [BACKEND] Implement the API with Express/NodeJS.
4) [FRONTEND] Develop a login page with local login (userid and passwd in DB) OR using SaaS 
based authentication providers. [use FrontEgg or auth0]. [For auth0 refer to 
https://www.youtube.com/watch?v=QQwo4E_B0y8. It is done in BACKEND, so react is not 
required].
5) [CONSUMING THE API] On successful login, 
a. [If SaaS Login] - add the email and name to the customer table if it is not already 
exists.
b. [SasS or Local login] - display all the shop orders of the customer with customer 
name, item name, item quantity and shipping date. (Note, this query will involve 3 
tables).


DISCLAIMER: code is not clean and included all raw files
