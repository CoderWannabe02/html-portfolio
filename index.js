
let height = 0;

document.getElementById("clickMe").onclick = function(){
    let RN = Math.floor(Math.random() * 101);
    RN = String(RN);
    document.getElementById("clickMe").style.color = "red";
    document.getElementById("clickMe").style.position = "absolute";
    document.getElementById("clickMe").style.top = RN+"%";
    document.getElementById("clickMe").style.left = RN+"%";
    
    
    if (height < 1200){
        height += 100;
    } 
    console.log(height);

    document.getElementById("oo").style.color = "GREEN";
    document.getElementById("oo").style.fontSize = "1.2rem";
    document.getElementById("oo").style.fontWeight = "bold";
    document.getElementById("oo").style.width = height +"px";
    document.getElementById("oo").style.height = height +"px";
}

document.getElementById("oo").onclick = function(){
    document.getElementById("oo").style.display = "none";
    document.getElementById("clickMe").style.display = "none";
    document.getElementById("myH1").style.display = "none";
    document.getElementById("muah").style.display = "inline-block";
}


