
function confirmar() {

    var x = document.getElementById("romano").value;


    if (x >= 1 && x <= 99) {
        if (x <= 9) {

            if (x == 1) {
                document.getElementById('cont1').innerHTML = "I";

            }
            if (x == 2) {
                document.getElementById('cont1').innerHTML = "II";
            }
            if (x == 3) {
                document.getElementById('cont1').innerHTML = "III";
            }
            if (x == 4) {
                document.getElementById('cont1').innerHTML = "IV";
            }
            if (x == 5) {
                document.getElementById('cont1').innerHTML = "V";
            }
            if (x == 6) {
                document.getElementById('cont1').innerHTML = "VI";
            }
            if (x == 7) {
                document.getElementById('cont1').innerHTML = "VII";
            }
            if (x == 8) {
                document.getElementById('cont1').innerHTML = "VIII";
            }
            if (x == 9) {
                document.getElementById('cont1').innerHTML = "IX";
            }
            


        } else {
            var numeroInt = x % 10;


            switch (numeroInt) {
                case 1:
                    Romano = "I";
                    break;
                case 2:
                    Romano = "II";
                    break;
                case 3:
                    Romano = "III";
                    break;
                case 4:
                    Romano = "IV";
                    break;
                case 5:
                    Romano = "V";
                    break;
                case 6:
                    Romano = "VI";
                    break;
                case 7:
                    Romano = "VII";
                    break;
                case 8:
                    Romano = "VIII";
                    break;
                case 9:
                    Romano = "IX";
                    break;
                default:
                    Romano = "";
                    break;    

            }

        }

        if (x >= 10 && x < 20) {
            var res = "X" + Romano;
            document.getElementById('cont1').innerHTML = res;

        }
        if (x >= 20 && x < 30) {
            var res = "XX" + Romano;
            document.getElementById('cont1').innerHTML = res;
        }
        if (x >= 30 && x < 40) {
            var res = "XXX" + Romano;
            document.getElementById('cont1').innerHTML = res;
        }
        if (x >= 40 && x < 50) {
            var res = "XL" + Romano;
            document.getElementById('cont1').innerHTML = res;
        } if (x >= 50 && x < 60) {
            var res = "L" + Romano;
            document.getElementById('cont1').innerHTML = res;
        } if (x >= 60 && x < 70) {
            var res = "LX" + Romano;
            document.getElementById('cont1').innerHTML = res;
        } if (x >= 70 && x < 80) {
            var res = "LXX" + Romano;
            document.getElementById('cont1').innerHTML = res;
        } if (x >= 80 && x < 90) {
            var res = "LXXX" + Romano;
            document.getElementById('cont1').innerHTML = res;
        } if (x >= 90 && x < 100) {
            var res = "XC" + Romano;

            document.getElementById('cont1').innerHTML = res;
        }

    } else {
        alert("se debe ingresar un numero entre 1 a 99");
    }



}

