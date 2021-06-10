//example of how to use addEventListener

//  HTML  CODE
//{/* <button class="btn" id="effect">hello</button> */}

// const a = document.querySelector(".btn")
// var x= a.addEventListener("click",theClickFunction)
// var y= a.addEventListener("mouseover",theMouseoverFunction)
// var z= a.addEventListener("mouseout",theMouseoutFunction)
// function theClickFunction(){
//    document.getElementById("effect").innerHTML =
//                       "Click Event" + "<br>";
// }
// function theMouseoverFunction(){
//      document.getElementById("effect").innerHTML =
//                        "MouseOver Event" + "<br>";
// }
// function theMouseoutFunction(){
//    document.getElementById("effect").innerHTML =
//                       "MouseOut Event" + "<br>";
// }
 
//noob method::::::::::: var song =document.querySelector(".a").addEventListener("click", function(){
//     var audio= new Audio("BTS - Dynamite.mp3");
//     audio.play();
// });

var lengthOfClass=document.querySelectorAll(".btn").length;
for (var i= 0 ; i<lengthOfClass ; i++){
    document.querySelectorAll(".btn")[i].addEventListener('click', function(){
        var key = this.innerHTML;
        switch (key) {
            case "a":
                 
                var audio1 = new Audio("BTS - Dynamite.mp3");
                if(!audio1.isPlaying()){
                     audio1.play();
                }
                else{
                    audio1.pause();
                    document.querySelectorAll(".btn")[i].innerHTML="V";
                    
                }
                break;
            case "b":
                    
                    var audio2 = new Audio("BTS - FakeLove.mp3");
                    audio2.play();
                break;
            case "c":
                         
                        var audio3 = new Audio("paino.mp3");
                        audio3.play(); 
                    break;
            case "d":
                            
                            var audio4 = new Audio("guitar.mp3");
                            audio4.play();
                    break;
        
            default:
                console.log(key);

                break;
        }
    })
}
 
 