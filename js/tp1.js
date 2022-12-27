let alecran = "unchat";

function diaporama(){
    if(alecran == "unchat"){
        document.getElementById("diapo").setAttribute("src", "image/chien.png");
        alecran = "unchien";
    }else{
        document.getElementById("diapo").setAttribute("src", "image/chat.png");
        alecran = "unchat";
    }
}