//* if i want to delete row from table


//* get data we want:
// slelect lastName, firstName from employees
// where officeCode = 1;

// merging first name with last name we use ->
//! concat
// as -> we change from to fullname

//* select concat(firstName, " " , lastName) as fullname, officeCode from employees


// the company want to see only customers from the USA
//* select customerName, country from customers
//* where country = "USA";


// show orders placed after january 1, 2005
//* select * from orders;
//* select orderNumber ,orderDate from orders
//* where orderDate > "2005-01-01"


// the company wants to know which countries their customers come from
// select * from customers
// بدون تكرار
//* select distinct country
//* from customers

// a manger wants to see products priced between 30 and 50 dollars
//* select * from products;
//* use products
//* select productName , buyPrice
//* from products
//* where buyPrice between 30 AND  50;

// HR wants to review employees whose ID fall between 1200 and 1500
//* select * from employees;
//* select concat(firstName, " ", lastName) as fullname, employeeNumber
//* from employees
//* where  7:50

// HR wants to find employees whose first name starts with G
//* select * from employees;
//* select firstName from employees
//* where firstName like "G"

// the company wants to see customers from USA, France, and Australlia
// *select * from customers
//* select customerName, country from customers
//* where country = "USA" OR country = "France" OR  country = "Australlia"
//!OR
//* select customersName, country form coustomers
//* WHERE country 7:56

// from high to low -> orderby = بترتب
//* select * from payments
//* select customerNumber, amount
//* from payments
// to low: تنازلي
//* order by amount desc

//* select * from employees
//* select concat(fristName, " ", lastName) as fullname
//* from employees
// to low: تصاعدي
//* order by firstName asc


// the company wants to know how many customers exist in each country
//! aggregate funtion -> track count
//* select * from customers
//* select country , count(customerNumber) as customerPerCountry
//* from customers
//* منجمعهم بناء علدوله
//* group by country

// sum = جمع
// the company want to know how much each customer has paid in total
//* select * from payments
//* select customerNumber , sum (amount) as totalamount
//* from payments
//* group by customerNumber


// the company wants to find customers whose total payment exceed 100,000
//! having -> if we have group by
//* select cusomersNumber SubmitEvent(amount) as total_paid
//* from payment
//* group by customerNumber
//* having SubmitEvent(amount) > 100000;


//! join -> merge data with more than 1 table
// inner join -> return row with same match in both tables
// inner join -> find id and do merge and return it in tables
// for example i want to return orders from customers
// must have primary key and folling key to match

//* select * from orders;
//* select * from customers;

// customersName comes from cutomers
//* select customers.customerName , orders.orderDate , order.orderNumber
//* from customers
//* inner join orders
//* on orders.customerNumber = customers.customerNumber

// if the customer order = null (no orders)
//! Left join -> if we have big data we use it
//* select * from customers;
//* select * from orders;

//* select customers.customerName , order.orderNumber
//* from customers
//* left join orders
//* on customers.customerName = orders.customerNumber



// the company wants a report that shows:
// the number of orders they made -> using count

//* select customers.customerName , count(orders.orderNumber) as orderPer Cusotmer
//* from customers
//* left join orders
//* on customers.customerNumber = orders.customerNumber
//! after doing count -> aggregate func we do group by
//* group by customers.customerName

//! right join -> start from right
// show all employees and office they belong to
// every employee
// the city of the office where they work
//* select * from empolees
//* select * from offices

// select concat(employees.firstName)