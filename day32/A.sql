CREATE TABLE citrus (
	id serial primary key
	name varchar(255),
	color varchar(255),
	taste varchar(255)
);

CREATE TABLE citrus (                                                                              
	id serial primary key,                                                                                     
	name varchar(255),                                                                                         
	color varchar(255),                                                                                        
	taste varchar(255)                                                                                         
);


INSERT INTO stock (quantity, price, citrus_id) VALUES (33, 25, 1);
INSERT 0 1
INSERT INTO stock (quantity, price, citrus_id) VALUES (50, 15, 2);
INSERT 0 1
INSERT INTO stock (quantity, price, citrus_id) VALUES (10, 35, 3);
INSERT 0 1
INSERT INTO stock (quantity, price, citrus_id) VALUES (0, 20, 4);
INSERT 0 1
INSERT INTO citrus (name, color, taste) VALUES (lemon, yellow, sour);
ERROR:  column "lemon" does not exist
LINE 1: INSERT INTO citrus (name, color, taste) VALUES (lemon, yello...
                                                        ^
INSERT INTO citrus (name, color, taste) VALUES ('lemon', 'yellow', 'sour');
INSERT 0 1
INSERT INTO citrus (name, color, taste) VALUES ('orange', 'orange', 'juicy');
INSERT 0 1
INSERT INTO citrus (name, color, taste) VALUES ('grapefruit', 'orange', 'bitter');
INSERT 0 1
INSERT INTO citrus (name, color, taste) VALUES ('lime', 'green', 'sour');



SELECT SUM(stock.quantity) FROM stock JOIN citrus ON stock.citrus_id = citrus.id WHERE citrus.color = 'orange';