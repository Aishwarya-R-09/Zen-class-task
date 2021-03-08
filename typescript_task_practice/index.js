function leapYear(value) {
    if ((value % 4 == 0 && value % 100 != 0) || value % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function revString(value) {
    var revstr = "";
    for (var i = (value.length) - 1; i >= 0; i--) {
        revstr = revstr + value[i];
    }
    return revstr;
}
var l = leapYear(1999);
var s = revString("Hello");
console.log(l);
console.log(s);
