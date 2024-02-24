var x = null;
var y = null;
document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
function onMouseUpdate(e) {
	x = e.pageX;
	y = e.pageY;
	document.querySelectorAll(".dragging").forEach((element) => {
		element.style.position=`absolute`
		var ny = screen.height+y
		var nx = screen.width+x
		let getContainerStyle = window.getComputedStyle(element);
		let leftValue = parseInt(getContainerStyle.left);
		let topValue = parseInt(getContainerStyle.top);
		element.style.left = `${x-10}px`;
		element.style.top = `${y-10}px`;
	});
}
function getMouseX() {
	return x;
}
function getMouseY() {
	return y;
}

function createWindow(name,code) {
	document.getElementById("windows").innerHTML=`<div class="clwnds window active" style="max-width:80%;width: 400px;">
    <div class="title-bar">
        <div class="title-bar-text">${name}</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close" onclick='this.closest(".title-bar-controls").closest(".title-bar").closest(".clwnds").remove()'></button>
        </div>
    </div>
    <div class="window-body has-space">
        ${code}
    </div>
</div>`
	document.querySelector(".clwnds").style.top=screen.height/4
	document.querySelector(".clwnds").style.left=screen.width/4
	var elmt = document.querySelector(".title-bar")
	elmt.addEventListener("mousedown", () => {
		if (!!document.querySelector(".clwnds .title-bar")) {
			document.querySelector(".clwnds").classList.add("dragging");
		}
	});
	elmt.addEventListener("mouseup", () => {
		if (!!document.querySelector(".clwnds .title-bar")) {
			document.querySelector(".clwnds").classList.remove("dragging");
		}
	});
}

function setcursor(cur){
	stylus.innerHTML=`* {
        cursor: default;
    }`
	stylus.innerHTML=stylus.innerHTML.replace("default",cur)
}

if (document.addEventListener) {
	document.addEventListener('contextmenu', function(e) {
		document.getElementById("conmenuelem").style.display="block"
		document.getElementById("conmenuelem").style.pointerEvents=`all`
		document.getElementById("conmenuelem").style.top=y-10+'px';
		document.getElementById("conmenuelem").style.left=x-10+'px';
		document.getElementById("conmenuelem").style.opacity="1"
		e.preventDefault();
	}, false);
} else {
	document.attachEvent('oncontextmenu', function() {
		window.event.returnValue = false;
	});
}


var foldercode

async function updatefolder() {
	foldercode=``
	let path = location.hash.replace("#","");
	let disk = await fetch(`https://directoryclient.onrender.com/disk/?q=`+path);
	let dr = await disk.json();
	dr.folders.forEach(e => foldercode+="<div class='folderId' onclick='location.hash+=`/"+e+"`'>Folder:"+e+"</div><br/>")
	dr.files.forEach(e => foldercode+="<div class='folderId' onclick='location.hash+=`/"+e+"`'>File:"+e+"</div><br/>")
	document.querySelector(".window-body").innerHTML=``
	document.querySelector(".window-body").innerHTML=foldercode
}

async function loaded() {


	let response = await fetch(`https://raw.githubusercontent.com/zxcbelaz/Windows95NormalEdition/master/README.md`);

	let commits = await response.text();
	console.log(commits.replaceAll("#","<br/>"))
	createWindow("Sigma Updates",commits.replaceAll("#","<br/>"))


	let path = location.hash.replace("#","")
	let disk = await fetch(`https://directoryclient.onrender.com/disk/?q=`+path);

	let dr = await disk.json();

	dr.folders.forEach(e => foldercode+="<div class='folderId' onclick='location.hash+=`"+e+"/`;updatefolder()'>"+e+"</div><br/>")

	location.hash="/";
	createWindow("folder",foldercode)
}

document.addEventListener("DOMContentLoaded", loaded)



