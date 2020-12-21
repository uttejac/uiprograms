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
    }