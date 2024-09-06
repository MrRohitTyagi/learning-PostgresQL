`⭐ GROUP BY Query``👉 this query helps to grop certain type of records together nad show data based on the group`;

("command");

{
  1 - `select dept ,count(dept) from emp group by dept`;
  `here  it says group the records by dept name and show thir count`;

  `"dept"	   "count"
"MANAGER"	   3
"ACCOUNTANT"   2
"ADMIN"	       2
"DESIGNER"	   2
`;
}
{
  2 - `select dept ,sum(salary) from emp group by dept`;
  `here  it says group the records by dept name and show their salary sum in ech dept`;

  `"dept"	      "sum"
"MANAGER"	  230000
"ACCOUNTANT"  103000
"ADMIN"	      99000
"DESIGNER"	  109000

`;
}
