const accountId = 9813
let accountemail = "jay@gmail.com"
accountcity = "london"

// accounId = 1231 not allowed ( const: neither name can be changed nor the value )
accountemail = "san@gmail.com"
accountpassword = "982367"
accountcity = "japan"

console.log(accountId);

/*
Prefer not to use var
because of issue in lock scope and funtional scope
*/

console.table([accountId, accountemail, accountpassword, accountcity])

