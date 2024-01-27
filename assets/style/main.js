"useStrict"

//for header

const header = document.querySelector("header")

const headerColor = ()=>{
    if(window.scrollY > 0){
        header.style.backgroundColor = "#22201fee"
    }else{
        header.style.backgroundColor = "#1A1E1F"
    }
     
}

window.addEventListener("scroll",headerColor)




//for slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  slides[slideIndex-1].style.justfyContent = "center";
  slides[slideIndex-1].style.alignItems = "center";  
  slides[slideIndex-1].style.gap = "100px";
  dots[slideIndex-1].className += " active";
}







//for accordion 

const questionsCont = document.getElementsByClassName("questions-container")

for(let i=0; i<questionsCont.length; i++){
   
    questionsCont[i].addEventListener("click",function(){
       
        this.classList.toggle("active")
    
    const questions = document.getElementsByClassName("questions")

    for(let i=0; i<questions.length; i++){

        if(questions[i].parentElement.className === "questions-container active"){
            questions[i].children[1].style.transform = "rotate(270deg)"

        }else{

            questions[i].children[1].style.transform = "rotate(90deg)"

        }
    }
})
}



//for burger menu

const burgermenuDiv = document.querySelector(".burger-menu");
const TbcPagesDiv = document.querySelector(".TbcPages");
const Fline = document.querySelector(".bm-line1");
const Secline = document.querySelector(".bm-line2");
const Lastline = document.querySelector(".bm-line3");
burgermenuDiv.addEventListener("click", () => {
  TbcPagesDiv.classList.toggle("activeBM");
  
  const isActiveMenu = TbcPagesDiv.classList.contains("activeBM");
  
  const FlineDegree = isActiveMenu ? "50deg" : "0deg";
  const SecLineDegree = isActiveMenu ? "140deg" : "0deg";
  const LastLineDegree = isActiveMenu ? "52deg" : "0deg";

  const FlinetranslateX = isActiveMenu ? "14px" : " 0"

  const SeclinetranslateY = isActiveMenu ? "-1px" : " 0"
  const SeclinetranslateX = isActiveMenu ? "-14px" : " 0"

  const LastlinetranslateY = isActiveMenu ? "-10px" : " 0"
  const LastlinetranslateX = isActiveMenu ? "7px" : " 0"

  Fline.style.transition = "transform 0.5s ease";
  Fline.style.transform = `  translateX(${FlinetranslateX}) rotate(${FlineDegree})`;
  Fline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';

  Secline.style.transition = "transform 0.5s ease";
  Secline.style.transform = ` translateX(${SeclinetranslateX}) translateY(${SeclinetranslateY}) rotate(${SecLineDegree})`;
  Secline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';

  Lastline.style.transition = "transform 0.5s ease";
  Lastline.style.transform = `translateY(${LastlinetranslateY}) translateX(${LastlinetranslateX}) rotate(${LastLineDegree})`;
  Lastline.style.backgroundColor = isActiveMenu ? 'lightgray' : '';

})
