const accountID = 12345
let accountEmail = "parvej.alam@codeclouds.in";
var accountpassword = "1234343"
accountCity = "Bihar"

//accountID = 2 //Not allowed
accountEmail = "pa@pa.com"
accountpassword = "11223344"
accountCity = "Bangal"
let accountState;

console.log(accountID)

/*
Prefer not to use var
Beacuse of issue in block scope and functional scope
*/
console.table([accountID, accountEmail, accountpassword, accountCity, accountState])


