
    function validation()
    {
      var a = document.form.name.value;
      if(a=="")
      {
        alert("firstname should not be empty");
        document.form.name.value;
        return false;
      }
    var a = document.form.name.value;
    if ((a.length < 5) || a.match(  /[0-9]/g)||a.match( /[@#$%^&*!]/g)||(a.length > 10))
    {
    alert("firstname do not contain any numbers or special charecters");
    document.form.name.focus();
    return false;
    
    }
    var a = document.form.lastname.value;
      if(a=="")
      {
        alert("lastname should not be empty");
        document.form.lastname.value;
        return false;
      }
    var a = document.form.lastname.value;
    if ((a.length < 5) || a.match(  /[0-9]/g)||a.match( /[@#$%^&*!]/g)||(a.length > 10))
    {
    alert("Lastname do not contain any numbers or special charecters");
    document.form.lastname.focus();
    return false;
    
    }
var a=document.form.pass.value;
if(a=="" ||!a.match(/[a-z]/g) || !a.match(  /[A-Z]/g) || !a.match(  /[0-9]/g) || !a.match(   /[^a-zA-Z\d]/g) || !a.length >= 8)
{
  alert("enter valid Password")
  document.form.pass.focus();
  return false;
}

var x=document.form.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");
{
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  
}  
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
var a = document.form.aadhar.value;
if(a=="")
{
alert("please Enter the Aadhar Number");
  document.form.aadhar.focus();
return false;
}
if(isNaN(a))
{
alert("Enter the valid Aadhar Number(Like : 1234 5678 9012)");
 document.form.aadhar.focus();
return false;
}

if ( ( form.total[0].checked == false ) && ( form.total[1].checked == false ) )
{
alert ( "Please choose your total members" );
return false;
}
if ( ( form.Accomodation[0].checked == false ) && ( form.Accomodation[1].checked == false ) )
{
alert ( "Please choose your Accomodation" );
return false;

}
if ( ( form.Accomodationtype[0].checked == false ) && ( form.Accomodationtype[1].checked == false ) )
{
alert ( "Please choose your Accomodation type" );
return false;

}
if ( ( form.location[0].checked == false ) && ( form.location[1].checked == false ) )
{
alert ( "Please choose your location places " );
return false;

}   
if ( ( form.purchaseoption[0].checked == false ) && ( form.purchaseoption[1].checked == false ) )
{
alert ( "Please choose your purchase option" );
return false;
}

var a = document.form.address.value;
   if(a=="")
 {
        alert("Please Enter Your Address Details Here");
   document.form.address.focus();
     return false;
}
}
    }
