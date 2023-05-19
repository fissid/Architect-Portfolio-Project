var intbtn=document.querySelector(".menu").children[0]
var extbtn=document.querySelector(".menu").children[1]
var planbtn=document.querySelector(".menu").children[2]

var images = document.querySelector(".images")
var small = document.querySelector(".small")

// console.log(small)
var intpath = "./img/project/int"
var extpath = "./img/project/ext"
var planpath = "./img/project/plan"
var extention = ".jpg"

interior()
intbtn.addEventListener("click",interior)
extbtn.addEventListener("click",exterior)
planbtn.addEventListener("click",plan)

function interior(){
    let temp=1;
    for (let i=0;i<images.children.length;i++){
        // console.log(images.children[i])
        images.children[i].src=intpath+temp.toString()+extention
        temp++
    }

    for (let j=0;j<small.children.length;j++){
        small.children[j].src=intpath+temp.toString()+extention
        temp++
    }
    planbtn.className=" "
    extbtn.className=" "
    intbtn.className="select"
}

function exterior(){
    let temp=1;
    for (let i=0;i<images.children.length;i++){
        // console.log(images.children[i])
        images.children[i].src=extpath+temp.toString()+extention
        temp++
    }

    for (let j=0;j<small.children.length;j++){
        small.children[j].src=extpath+temp.toString()+extention
        temp++
    }
    intbtn.className=" "
    planbtn.className=" "
    extbtn.className="select"
}

function plan(){
    let temp=1;
    for (let i=0;i<images.children.length;i++){
        // console.log(images.children[i])
        images.children[i].src=planpath+temp.toString()+extention
        temp++
    }

    for (let j=0;j<small.children.length;j++){
        small.children[j].src=planpath+temp.toString()+extention
        temp++
    }
    intbtn.className=" "
    extbtn.className=" "
    planbtn.className="select"
}


