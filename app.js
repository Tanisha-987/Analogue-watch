function Rotate() {
    let dd = new Date();

    let hrsh = document.getElementById("hrs");
    let sech = document.getElementById("sec");
    let minh = document.getElementById("min");

    let hrs = dd.getHours();
    let min = dd.getMinutes();
    let sec = dd.getSeconds();

    let h = ((hrs / 12) * 360) + ((min / 60) * 30);
    let m = ((min / 60) * 360) + ((sec / 60) * 6) ;
    let s = ((sec / 60) * 360);


    hrsh.style.transform = `rotate(${h}deg)`;
    minh.style.transform = `rotate(${m}deg)`;
    sech.style.transform = `rotate(${s}deg)`;
}

setInterval(Rotate, 1000);
Rotate();
