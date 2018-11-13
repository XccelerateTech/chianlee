CREATE TABLE stock (
	id SERIAL primary key,
	name VARCHAR(255) not null,
	description text,
	quantity integer,
 	price numeric(4,2)
);