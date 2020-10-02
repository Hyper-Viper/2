function current() {
    var refresh = 1000;
    mytime = setTimeout("cdate()", refresh)
}

function cdate() {
    var date = new Date();
    document.getElementById("date").innerHTML = date;
    current()
}
