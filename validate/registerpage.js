function validation()
    {
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
          var a = document.form.email.value;
         if(a=="" || a!="acuttej@gmail.com")
       {
         alert("Please Enter Your email");
        document.form.email.focus();
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
     
if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) )
{
alert ( "Please choose your Gender: Male or Female" );
return false;
}
if ( ( form.Career[0].checked == false ) && ( form.Career[1].checked == false ) )
{
alert ( "Please choose your Career" );
return false;

}
if ( ( form.Memory[0].checked == false ) && ( form.Memory[1].checked == false ) )
{
alert ( "Please choose your Memory option" );
return false;

}
if ( ( form.Graphiccard[0].checked == false ) && ( form.Graphiccard[1].checked == false ) )
{
alert ( "Please choose your Graphic card option" );
return false;

}
if ( ( form.RAM[0].checked == false ) && ( form.RAM[1].checked == false ) )
{
alert ( "Please choose your RAM option" );
return false;

}

if ( ( form.purchaseoption[0].checked == false ) && ( form.purchaseoption[1].checked == false ) )
{
alert ( "Please choose your purchase option" );
return false;

}
if ( ( form.Payment[0].checked == false ) && ( form.Payment[1].checked == false ) && ( form.Payment[2].checked == false ) && ( form.Payment[3].checked == false ) )
{
alert ( "Please choose your Payment option" );
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