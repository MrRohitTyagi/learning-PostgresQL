"⭐ LINK claus on a table";

`👉 LIKE claus is used where we have to do advance filtering of data LIKE
fetch all employees from a table  where name starts with 'A'
`;

("Command");

{
  1 - `SELECT * FROM employees WHERE name LIKE 'a%';`;
  `- a% , here "a" means give all records that starts with "a" 
and "%" means include everything afterwards`;
}

{
  2 - `SELECT * FROM employees WHERE name LIKE '%i%';`;
  `- %i% , here "%" means include everything before and after "i", if name contains "i" then return that name`;
}

{
  3 - `select * from emp where dept like '__'`;
  `- '__' , here "__" means only show those records that have 2 only 2 characters`;
}

{
  4 - `select * from emp where fname like '_a%'`;
  `- '_a%' , here "_a%" means only show those records that have 2nd character as "a"`;
}
