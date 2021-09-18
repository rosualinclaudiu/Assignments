var canvas, clockWidth, clockHeight, centerX, centerY, ctx;

function setupAnalogClock(cw) {
    canvas = document.getElementById("analogClock");
    ctx = canvas.getContext("2d");
    clockWidth = cw;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;



    tick();
    window.setInterval(tick, 1000)


}


function tick() {
    var date = new Date();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawStaticElts();

    var hours = date.getHours();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 4;
    drawHand(clockWidth / 3, hours * 30);


    var minutes = date.getMinutes();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    drawHand(clockWidth / 2.3, hours * 6);

    var seconds = date.getSeconds();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    drawHand(clockWidth / 2.1, seconds * 6);

}


function drawStaticElts() {
    ctx.beginPath();
    ctx.arc(centerX, centerY, clockWidth / 2, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();
    ctx.arc(centerX, centerY, 2, 0, 2 * Math.PI, false);
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.closePath();


    drawNumbers();
}


function drawNumbers() {
    var i = 12;
    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;
    ctx.font = "13px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";


    while (i > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(centerX, centerY);
        var angle = (i * 30) * Math.PI / 180;
        ctx.rotate(angle);
        ctx.translate(0, -clockWidth / 2)


        ctx.save();
        ctx.translate(0, -10)
        ctx.rotate(-angle);

        ctx.fillText(i, 0, 0);
        ctx.restore();


        ctx.moveTo(0, 0);
        ctx.lineTo(0, 10);
        ctx.stroke();
        ctx.closePath()
        ctx.restore();
        i--;

    }
}


function drawHand(length, angle) {

    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    ctx.rotate(-100 * Math.PI / 180);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    ctx.stroke();
    ctx.closePath()
    ctx.restore();
}

window.onload = function() {
    setupAnalogClock(360)
};