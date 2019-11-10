


}
function passwordGenerator(len){
  var lenght=(8)(128);
  var numbers= '1234567890';
  var lowerCase= 'abcdefghijklmnopqrstuvwxyz';
  var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var SpecialChar= '~!@#$%^&*:;"?/(),`<>?/-=_+{}{[]\|.';
  var password='';
  var all='';
   while(password.lenght>lenght);{
    var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
  }
  return ("new");

}