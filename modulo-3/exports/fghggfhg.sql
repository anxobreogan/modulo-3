-- select first_name,last_name from actor;

-- select UPPER ( concat (first_name,last_name))  as `Actor Name`
-- 
-- from 
-- 
-- actor;


-- select actor_id,'Joe',last_name
-- from 
-- actor;

-- select *
-- from
-- actor
-- where
-- last_name LIKE '%GEN%'


-- select *
-- 
-- from
-- actor
-- where
-- last_name LIKE '%LI%'
-- order by last_name, first_name;
-- 

-- select country_id, country
-- from country
-- where country in('Afghanistan','Bangladesh','China');
-- 

-- alter table actor
-- ADD column middle_name varchar(15) after first_name;
-- 

-- alter table actor drop column middle_name;

-- select last_name,count(*)
-- 
-- from 
-- actor
-- group by last_name;



-- List last names of actors and the number of actors who have that last name, 
-- --     but only for names that are shared by at least two actors.

-- select last_name,count(*)
-- 
-- from 
-- actor
-- group by last_name
-- 
-- having count(*)>=2;
-- EJERCICO 4C
-- 
-- update actor set first_name='HARPO'
-- WHERE FIRST_NAME='GROUCHO' AND LAST_NAME ='WILLIAMS';
-- -----  CREATE TABLE `address` (
--   `address_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
--   `address` varchar(50) NOT NULL,
--   `address2` varchar(50) DEFAULT NULL,
--   `district` varchar(20) NOT NULL,
--   `city_id` smallint(5) unsigned NOT NULL,
--   `postal_code` varchar(10) DEFAULT NULL,
--   `phone` varchar(20) NOT NULL,
--   `location` geometry NOT NULL,
--   `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--   PRIMARY KEY (`address_id`),
--   KEY `idx_fk_city_id` (`city_id`),
--   SPATIAL KEY `idx_location` (`location`),
--   CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`) ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=606 DEFAULT CHARSET=utf8;
-- - 

-- show create  table address;
-- 
-- select first_name,last_name,address,district
-- from
-- staff
-- inner join	address on staff.address_id=address.address_id;
-- 
-- alter
-- select first_name,payment_date,amount
-- 
-- from 
-- staff
-- 
-- inner join payment on staff.staff_id=payment.payment_id;
-- 

-- select SUM(payment.amount),staff.first_name
-- 
-- from
-- payment
-- 
-- inner join staff on payment.staff_id= staff.staff_id and payment.payment_date between '2005-08-01' and '2005-08-31'
-- 
-- group by sakila.staff.first_name;
-- 


-- select film.title,count(film_actor.actor_id)
-- 
-- from film
-- 
-- inner join film_actor on film_actor.film_id=film.film_id
-- 
-- group by film.title;
-- 

select count(inventory.film_id)

from
inventory

where inventory.film_id=439

group by film_id











 



