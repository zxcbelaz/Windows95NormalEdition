doc = document;
var div
document.addEventListener("DOMContentLoaded",function () {
    cursor = "https://cdn.discordapp.com/attachments/1133378405379866655/1210660590129909770/Normal.webp?ex=65eb5e89&is=65d8e989&hm=e240a38bce24d732266565dc1bab79c791d88b027d6dbeb5e04394b2fe7adcce&";
    div = document.createElement('img');
    div.id = "CursorPSX";
    div.src=cursor
    div.style.width="20px"
    div.style.height="20px"
    div.style.position="absolute"
    div.style.left="100px"

    document.body.append(div);
})




var x = null;
var y = null;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);

function onMouseUpdate(e) {
    x = e.pageX;
    y = e.pageY;
    console.log(x, y);
    div.style.left=x-10+"px";
    div.style.top=y-10+"px"
}

function getMouseX() {
    return x;
}

function getMouseY() {
    return y;
}