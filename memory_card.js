var counter =1;
var latest;

list = document.querySelectorAll(".card-container").forEach(item=>{
    item.addEventListener('click' , event=>{
        console.log({item})
        let id =  +item.id
        console.log(id);
        if(item.classList.contains("done")){
            return ;
        }
        if(-id == latest){
            console.log("db")
            var current = latest*-1
            document.getElementById(current ).classList.add("done");
            document.getElementById(current).classList.remove("flip")
            document.getElementById(latest).classList.add("done");
            document.getElementById(latest).classList.remove("flip")
            return;
        } else {

            latest = id;
            
        }

        if(counter<3) {   
            console.log("dbdb")
            if(item.classList.contains("done"))
            {
                return;
            }
            else if(item.classList.contains("flip"))
            {
                            if(item.classList.contains("done"))
            {
                return;
            }
                console.log("true");
                item.classList.remove("flip");
                counter++;
                setTimeout(() => {
                    item.classList.add("flip");
                    counter--;
                }, 3000);
            }
            else
            {
                if(item.classList.contains("done"))
                {
                    return;
                }
                else{
                    console.log("false");
                    item.classList.add("flip");
                } 
            }    
        }
            
        
        }); counter=0;
});

var tim =1;
var clocktime;

(()=> {
    
    
    clocktime = setInterval(function(){ 
        document.getElementById("timer").innerHTML = tim++;
     }, 1000);
  })();

(() => {
    setTimeout(() => {
        clearInterval(clocktime);
        endgame = document.querySelectorAll(".card-container").forEach(items=>{
            items.classList.add("done");
        });
    }, 60000);
})();