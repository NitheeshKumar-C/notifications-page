var count=0;
document.addEventListener('click', (e) => {
        let element = e.target;
        if(element.className == "user" || element.className == "action"){        
            var pe=((element.parentElement).parentElement).parentElement;
            pe.style.backgroundColor= "hsl(0, 0%, 100%)";
            pe.getElementsByClassName("dot")[0].style.display="none";
            var a=document.getElementsByClassName("chat-container");
                for(let i=0;i<a.length;i++){
                    if(a[i].style.backgroundColor=="rgb(255, 255, 255)"){
                        count--;
                    }
                }
                if((count+3) >= 0){
                    document.getElementById("msg-count").innerHTML=(count+3);
                    count=0;
                }
                
            
            
        }
});

function readAll(){
    count=0;
    document.getElementById("msg-count").innerHTML=(count);

    var allMsg=document.getElementsByClassName("chat-container");
    console.log(allMsg[0].style.backgroundColor)
    for(let i=0;i<allMsg.length;i++){
            allMsg[i].style.backgroundColor= "hsl(0, 0%, 100%)";
            allMsg[i].getElementsByClassName("dot")[0].style.display="none";
    }
                
}
