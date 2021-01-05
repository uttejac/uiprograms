function validation()
    {
    var a = document.form.name.value;
    
    if(a=="")
    {
      alert("Name should not be empty");
      document.form.name.focus();
      return false;
    }/*
    if ((a.length < 5) || (a.length > 10))
    {
    alert("Your name must be within 5 to 10 cahrecters ");
    document.form.name.focus();
    return false;
    }*/
    if(a.match(  /[0-9]/g))
    {
      alert("Numbers are not allowed ");
    document.form.name.focus();
    return false;
  }
  
  if (a.match( /[@#$%^&*!]/g))
  {
    alert(" special charecters are not allowed ");
    document.form.name.focus();
    return false;
  }
  if(a!="uttej")
    {
      alert("Enter valid name");
      document.form.name.focus();
      return false;
     
    }
    
    
   
var a=document.form.pass.value;


if(a=="")
{
  alert("Please enter password ")
  document.form.pass.focus();
  return false;
}
if(!a.match(  /[0-9]/g) )
{
  alert("Your password must contain number ")
  document.form.pass.focus();
  return false;
}
if(!a.match(/[a-z]/g) || !a.match(  /[A-Z]/g) || !a.match(   /[^a-zA-Z\d]/g))
{
  alert("Your password must contain number uper and lower case any secial charecters")
  document.form.pass.focus();
  return false;
}
if(!a.length >= 8)
{
  alert("Your password must be not more than 8")
  document.form.pass.focus();
  return false;
}
if(a!="ACu@123")
{
  alert("Your are not a valid user please register and login again");
  document.form.pass.focus();
  return false;
}

    }
  
