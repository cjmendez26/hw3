
//lst of id's in HTML file
//*id=generate(button)
//*id=clipdoard
//*id=new
//*id=lenght
//*id=defaultcheck4(check box4)Numbers
//*id=defaultcheck1(check box1)capital
//*id=defaultcheck2(check box2)lower
//*id=defaultcheck3(check box3)special
//Copy Clipboard Function
// its a little cofussion how to link all the ids so it does what I want//
// I'm trying to do it by myself//

//Password Generator
}
function generate(){
  var numbers= '1234567890';
  var lowerCase= 'abcdefghijklmnopqrstuvwxyz';
  var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var specialChar= '~!@#$%^&*:;"?/(),`<>?/-=_+}{[]\|.';
  var password='';
  var all='';
//generates random for only numbers
  for (i=0;i<length;i++)
  //trying to link the checked number box to numbers
    all+=numbers.charAt(Math.floor(Math.random()*numbers.length));
//generates random for only lowercase
  for (i=0;i<lenght;i++)
//trying to link the checked box to lowercase
    all+=lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
//generates random for uppercase
  for (i=0;i<lenght;i++)
  //trying to link checked box to uppercase//
    all+=upperCase.charAt(Math.floor(Math.random()*upperCase.length));
//generates random for special char
  for (i=0;i<lenght;i++)
  //trying to link checked box to special char//
    all+=specialChar.charAt(Math.floor(Math.random()*specialChar.length));
//generarates random for all
 //trying to link checked box to all
    all=all.split('').sort(function(){return 0.5-Math.random()}).join('');

  return all;

}