


const menu = document.getElementById("mySideMenu");
    const slide = document.getElementById("bar");
   
     slide.addEventListener("click" , () =>{
        console.log("hii");
        menu.style.width = "50%";
     });
     function toggleMenu() {
    menu.style.width = "0";
  }