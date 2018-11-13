1. SELECT first_name, last_name FROM employee WHERE salary > 5000 AND salary < 11000;

2. SELECT * FROM employee WHERE contract_length < 2 ;

3. INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('MIke', "Row", 50000, 2);
	 INSERT INTO employee (first_name, last_name, salary, contract_length) VALUES ('Luke', "Skywalker", 2000, 1	);

4.  UPDATE employee SET contact_length = 2, salary = 8000 WHERE first_name = 'Nancy' AND last_name = 'Green';

5.  SELECT * FROM employee ORDER BY salary DESC;