var count=0;
document.addEventListener('click', (e) => {
        let element = e.target;
        if(element.className == "user" || element.className == "action"){        
            var pe=((element.parentElement).parentElement).parentElement;
            pe.style.backgroundColor= "hsl(0, 0%, 100%)";
            var ele=pe.getElementsByClassName("dot");
            ele[0].parentNode.removeChild(ele[0]);
                count = document.getElementsByClassName("dot").length;
                if(count>= 0){
                    document.getElementById("msg-count").innerHTML=(count);
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
