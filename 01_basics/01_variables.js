const accountId = 144553
let accountEmail = "stark@google.com"
var accountPassword = "12345"
accountCity = "New York"// can be used for variable declaration but it's not the appropriate way
let accountState

// accountId = 2 not allowed Single Line Comments

accountEmail = "gasd.com"
accountPassword = "2345354"
accountCity = "America"

console.log(accountId);

/*
Multiline comments
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
