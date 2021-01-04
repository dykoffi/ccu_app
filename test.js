var mailTester = require('mail-tester');
  
var email = 'test@gmail.com';
  
mailTester.check(email, function(data) {
  console.log(data);
})