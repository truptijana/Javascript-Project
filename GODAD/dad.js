let section = document.createElement("section")
section.style.width="100%";
section.style.height="90vh";
section.style.position="relative"
section.style.top="-825px";
section.style.left="71"
// section.style.background="grey";
document.body.append(section);

let article = document.createElement("article")
article.style.width="90%";
article.style.height="80vh";
// article.style.background="pink";
article.style.top="0px";
article.style.left="68px";
article.style.position="absolute";
section.appendChild(article);

let bhioo = document.getElementsByClassName("right")
let div = document.createElement("div")
div.style.width="100%";
div.style.height="15vh";
// div.style.background="yellow";
div.style.position="absolute";
div.style.top="1px";
div.style.left="1px";
article.appendChild(div);

let input = document.createElement("input")
input.style.width="47%";
input.style.height="57px";
input.style.paddingBlockStart="1rem";
input.style.paddingInlineStart="1.25rem";
input.style.background="#EBEBEB";
input.style.border="none";
input.placeholder="Find your perfect domain";
input.style.fontSize="16px";
input.style.marginTop="25px";
div.appendChild(input);


let button = document.createElement("button")
button.style.width="13%";
button.style.height="55px";
button.style.position="relative"
button.style.top="-9px";
button.innerHTML="Search Domain";
button.style.color="white";
button.style.textAlign="center"
// button.style.paddingBlockStart="1rem";
// button.style.paddingInlineStart="1.25rem";
button.style.fontSize="12px";
button.style.fontWeight="700";
button.style.background="#00838c";
button.style.border="none";
div.appendChild(button);

let div1 = document.createElement("div1")
div1.style.width="25%";
div1.style.height="60vh";
div1.style.background="#ddeaf8";
div1.style.position="absolute"
div1.style.top="100px";
article.appendChild(div1);

// let a = document.createElement('a'); 
// let link = document.createTextNode("‪₹ 299.00*‬");
// a.appendChild(link); 
// // a.title="hi";
// a.href ="#";
// a.style.position="absolute";
// a.style.color="black";
// div.appendChild(a);

let h4 = document.createElement("h4")
h4.style.color="black";
h4.textContent="Domain Names"
h4.style.position="relative"
h4.style.top="40px";
h4.style.fontSize="15px";
h4.style.paddingBlockStart="1rem";
h4.style.paddingInlineStart="1.25rem";
div1.appendChild(h4);

let h1 = document.createElement("h1")
h1.style.color="black";
h1.innerHTML=`Get a.com for<br/> ₹ 299.00*‬/1st yr.`
h1.style.position="relative"
h1.style.top="40px";
h1.style.fontWeight="800";
h1.style.fontSize="32px";
// h1.style.fontFamily="gd-sage,"Times","Times New Roman",serif";
h1.style.paddingBlockStart="1rem";
h1.style.paddingInlineStart="1.25rem";
div1.appendChild(h1);

let p = document.createElement("p")
p.innerHTML=`Grab's  the world's most popular domain`;
p.style.top="40px";
p.style.position="relative"
p.style.color="#111";
p.style.fontSize="15px"
p.style.paddingBlockStart="1rem";
p.style.paddingInlineStart="1.25rem";
div1.appendChild(p);

let button1 = document.createElement("button1");
button1.innerHTML=`Get It Now`;
button1.style.background="black";
button1.style.top="80px";
button1.style.width="50px";
button1.style.height="30px";
button1.style.left="22px";
button1.style.padding="15px 45px";
button1.style.textAlign="center";
button1.style.position="relative"
button1.style.color="white";
button1.style.fontSize="15px";
div1.appendChild(button1); 

// let p1 = document.createElement("p1")
// p1.innerHTML="2-year purchase required. Additional year(s) ‪₹ <br/>1,099.00*‬";
// p1.style.top="290px";
// p1.style.left="17px";
// p1.style.position="absolute"
// p1.style.color="#111";
// p1.style.fontSize="12px"
// div1.appendChild(p1);

let img = document.createElement("img")
img.src="dhoni.png"
img.style.width="74%";
img.style.height="60vh";
img.style.position="absolute"
img.style.right="0px";
img.style.top="100px";
article.appendChild(img);

let h2 = document.createElement("h2")
h2.style.color="black";
h2.innerHTML=`Web hosting`;
h2.style.top="200px";
h2.style.left="850px";
h2.style.fontWeight="800";
h2.style.fontSize="15px";
h2.style.fontFamily="gdsherpa,Helvetica,Arial,sans-serif;";
h2.style.position="absolute";
article.appendChild(h2);


let h11 = document.createElement("h11")
h11.style.color="black";
h11.innerHTML=`Get web hosting as <br/>low as ₹ 199.00/mo.`;
h11.style.top="222px";
h11.style.left="850px";
h11.style.fontWeight="800";
h11.style.fontSize="2.3rem";
h11.style.fontFamily="gdsherpa,Helvetica,Arial,sans-serif;";
h11.style.position="relative";
article.appendChild(h11);

let p2 = document.createElement("p2")
p2.innerHTML="Fast and secure. Includes free domain + email.";
p2.style.top="245px";
p2.style.left="551px";
p2.style.position="relative"
p2.style.color="#111";
p2.style.fontSize="16px";
p2.style.fontWeight="200";
article.appendChild(p2);

let button2 = document.createElement("button2");
button2.innerHTML=`Learn More`;
button2.style.background="black";
button2.style.top="300px";
button2.style.width="50px";
button2.style.height="30px";
button2.style.left="252px";
button2.style.padding="15px 45px";
button2.style.textAlign="center";
button2.style.position="relative"
button2.style.color="white";
button2.style.fontSize="15px";
article.appendChild(button2); 

// const a = document.querySelectorAll(".faq");

// a.forEach(faq => {
//     faq.addEventListner("click", () => {
//     faq.classList.toggle("active");
//     });
// });




var a = document.querySelector(".call_us")
a.style.transform = "scale(0)"
// console.log(a.style.transform);
document.getElementById("num-drop").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(a.style.transform == "scale(0)"){
                a.style.transform = "scale(1)"
            }
            else{
                a.style.transform = "scale(0)"
            }
})

a.addEventListener("click",(e)=>{
    e.stopPropagation();
 
})

document.body.addEventListener("click",()=>{
    if(a.style.transform == "scale(1)"){
        a.style.transform = "scale(0)"
    }
    
})


var a = document.querySelector(".call_us")
a.style.transform = "scale(0)"
// console.log(a.style.transform);
document.getElementById("into").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(a.style.transform == "scale(0)"){
                a.style.transform = "scale(1)"
            }
            else{
                a.style.transform = "scale(0)"
            }
})

a.addEventListener("click",(e)=>{
    e.stopPropagation();
 
})

document.body.addEventListener("click",()=>{
    if(a.style.transform == "scale(1)"){
        a.style.transform = "scale(0)"
    }
    
})


var b = document.querySelector(".sign_us")
b.style.transform = "scale(0)"
// console.log(a.style.transform);
document.getElementById("reg-drop").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(b.style.transform == "scale(0)"){
                b.style.transform = "scale(1)"
            }
            else{
                b.style.transform = "scale(0)"
            }
})

b.addEventListener("click",(e)=>{
    e.stopPropagation();
 
})

document.body.addEventListener("click",()=>{
    if(b.style.transform == "scale(1)"){
        b.style.transform = "scale(0)"
    }
    
})


// iframe
// var m = document.querySelector(".ifra")
// m.style.display = "none";

// function dhoni()
// {
    
//     if(m.style.display == "none"){
//         m.style.display = "block"
//     }
//     else{
//         m.style.display= "none"
//     }
// }

// function crss_video()
// {
//     i.style.display= "none"
// }



const faq=document.querySelectorAll(".faq");

faq.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })
})