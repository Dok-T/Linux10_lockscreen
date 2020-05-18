/**
 * Created by Sebastian on 19.03.2017.
 */
function setLayer2(body,layer) {
    body.className = "layer2";
    setTimeout(function() {
        layer.style.webkitAnimationDelay = 0;
        layer.style.webkitAnimationName  = 'avatar_in';
        layer.style.animationDelay = 0;
        layer.style.animationName  = 'avatar_in';
    }, 1);
    clearInterval(clockLoop);
}

var body = document.getElementById("body");
var layer1= document.getElementById("layer1");
body.onclick = function () {
    setLayer2(body,layer1);
};

body.onkeydown = function () {
    if (body.className != "layer2") {
        setLayer2(body,layer1);
    }
};
var weekday = new Array(7);
weekday[0] =  "Dimanche";
weekday[1] = "Lundi";
weekday[2] = "Mardi";
weekday[3] = "Mercredi";
weekday[4] = "Jeudi";
weekday[5] = "Vendredi";
weekday[6] = "Samedi";

var month = new Array(12);
month[0] = "Janvier";
month[1] = "Février";
month[2] = "Mars";
month[3] = "Avril";
month[4] = "Mai";
month[5] = "Juin";
month[6] = "Juillet";
month[7] = "Aaoût";
month[8] = "Septembre";
month[9] = "Octobre";
month[10] = "Novembre";
month[11] = "Décembre";

var clockLoop = setInterval(clockDo,1000);
function clockDo() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }



    var n = month[d.getMonth()];
    document.getElementById("date-weekday").innerHTML = weekday[d.getDay()];
    document.getElementById("date-month").innerHTML = month[d.getMonth()];
    document.getElementById("date-day").innerHTML = d.getDate();

    document.getElementById("clock-left").innerHTML = h;
    document.getElementById("clock-right").innerHTML = m;
}
clockDo();
