    var Fossil = 15000;
    var Diesel = 14000;
    var TommyHilfigur = 12000;
    var Casio = 13000;
    var Police = 16000;
    var total = 0;
    var check = 1;
    var gw;
    var watch;
    var per;
    var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);

    function getMe() {
      watch = document.querySelector("#sf").value;
      per = parseFloat(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      if (Number.isNaN(per) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (per<0) {
        alert("Negative intergers are not allowed!");
        check = 0;
      }
      else{
        check = 1;
      }
      if (check == 1) {
     
        switch (watch) {
          case "Fossil":
            var a = Fossil  * per;
            gw.value += "Fossil  " + per + " piece = " + a + " rs\r";
            total += a;
            per.value = "";
            break;
          case "Diesel":
            var b = Diesel * per;
            gw.value += "Diesel " + per + " piece = " + b + " rs\r";
            total += b;
            per.value = "";
            break;
          case "TommyHilfigur":
            var c = TommyHilfigur * per;
            gw.value += "TommyHilfigur " + per + " piece  = " + c + " rs\r";
            total += c;
            per.value = "";
            break;
          case "Casio":
            var d = Casio * per;
            gw.value += "Casio " + per + " piece  = " + d + " RS\r";
            total += d;
            per.value = "";
            break;
          case "Police":
            var e = Police * per;
            gw.value += "Police " + per + " piece = " + e + " rs\r";
            total += e;
            per.value = "";
            break;
        }

      }
    }

    function checkOut() {
      gw.value += "*******************\r";
      gw.value += "Total Bill Is =  " + total + " ₹  \r";
      gw.value += "Thanks For Shopping! Visit again.\r";
      gw.value += "*******************\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }
