var win = document.querySelector(".window")
var smallimg = document.querySelectorAll("#smallimg")
var bigimg = document.querySelector("#bigimg")
var caption = document.querySelector("#caption")

for(let i=0;i<smallimg.length;i++){
    smallimg[i].onclick = function (){
        win.style.display="block"
        bigimg.src=this.src
        caption.innerHTML=this.alt
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    win.style.display = "none";
  }