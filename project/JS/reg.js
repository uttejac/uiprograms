/* creating validation function */

function validation()
    {
      /* checking username condition */
        var a = document.form.name.value;
        if(a=="")
        {
          alert("First name sholud not be blank");
          document.form.name.focus();
        return false;
        }
        if ((a.length < 5) || a.match(  /[0-9]/g)||a.match( /[@#$%^&*!]/g)||(a.length > 10))
        {
        alert("firstname do not contain any numbers or special charecters");
        document.form.name.focus();
        return false;
    }
     /* checking lastname condition */
    var a = document.form.lastname.value;
    if(a=="")
        {
          alert("Last name sholud not be blank");
          document.form.name.focus();
        return false;
        }
    if ((a.length < 5) || a.match(  /[0-9]/g)||a.match( /[@#$%^&*!]/g)||(a.length > 10))
    {
    alert("Lastname do not contain any numbers or special charecters");
    document.form.lastname.focus();
    return false;
    
    }
     /* checking password condition */
    var a = document.form.pass.value;
     if(a=="")
 {
       alert("Please Enter Your Password");
    document.form.pass.focus();
    return false;
}
if ((a.length < 5) || !a.match(  /[0-9]/g)|| !a.match( /[@#$%^&*!]/g)||(a.length > 10))
   {
      alert("Your Password must be any numbers, special chareters");
       document.form.pass.select();
     return false;
}
 /* checking email condition */
          var a = document.form.email.value;
         if(a=="" || a!="acuttej@gmail.com")
       {
         alert("Please Enter Your email");
        document.form.email.focus();
          return false;
}
 /* checking number condition */
    var a = document.form.phone.value;
      if(a=="")
{
      alert("please Enter the Contact Number");
        document.form.phone.focus();
    return false;
}
      if(isNaN(a))
{
      alert("Enter the valid Phone Number(Like : 044-42046569)");
       document.form.phone.focus();
     return false;
}
/* checking  condition */
if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
{
alert ( "Please choose gender" );
return false;

}
 /* checking address condition */

var a = document.form.address.value;
if(a=="")
{
     alert("Please Enter Your Address Details Here");
document.form.address.focus();
  return false;
}
var a = document.form.city.value;
if(a=="")
{
     alert("Please Enter Your city Here");
document.form.city.focus();
  return false;
}
var a = document.form.pin.value;
if(a=="")
{
     alert("Please Enter Your pincode Here");
document.form.pin.focus();
  return false;
}
var a = document.form.state.value;
if(a=="")
{
     alert("Please Enter Your state Here");
document.form.state.focus();
  return false;
}
var a = document.form.country.value;
if(a=="")
{
     alert("Please Enter Your countryHere");
document.form.country.focus();
  return false;
}
    }