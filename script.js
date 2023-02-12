
let city = document.querySelector('.section5__container--address--details--title')
let citiesList = document.querySelector('.cities-list')
let btnDropUp = document.querySelector('.section5__container--address--details--dropup')
let btnDropDown = document.querySelector('.section5__container--address--details--symbol')

let Canandaigua = document.querySelector('.Canandaigua')
let borderCanandaigua = document.querySelector('.border-Canandaigua')

let NewYork = document.querySelector('.NewYork')
let borderNewYork = document.querySelector('.border-NewYork')

let Yonkers = document.querySelector('.Yonkers')
let borderYonkers = document.querySelector('.border-Yonkers')

let Sherrill = document.querySelector('.Sherrill')
let borderSherrill = document.querySelector('.border-Sherrill')

let CanandaiguaOpened = document.querySelector('.Canandaigua-opened')
let NewYorkOpened = document.querySelector('.NewYork-opened')
let YonkersOpened = document.querySelector('.Yonkers-opened')
let SherrillOpened = document.querySelector('.Sherrill-opened')



btnDropDown.addEventListener('click', function(){

    citiesList.style.display = "inline"
    btnDropUp.style.display = "inline"
    btnDropDown.style.display = "none"
    city.style.background = "#C1E698"

    btnDropUp.addEventListener('click', function(){
        citiesList.style.display = "none"
        btnDropUp.style.display = "none"
        btnDropDown.style.display = "inline"
        city.style.background = "#D6E7D2"

    })

})



Canandaigua.addEventListener('click', function(){
    Canandaigua.style.color = '#717171'
    borderCanandaigua.style.color = '#717171'
    CanandaiguaOpened.style.display = "block"
    citiesList.style.display = 'none'
    // city.innerHTML = 'Canandaigua, NY'
    // city.style.paddingRight = '17.4vw'
    btnDropUp.style.display = "none"
    btnDropDown.style.display = "inline"

    btnDropUp.addEventListener('click', function(){
        citiesList.style.display = "none"
        btnDropUp.style.display = "none"
        btnDropDown.style.display = "inline"
        city.style.background = "#D6E7D2"
        city.innerHTML = 'City'
        CanandaiguaOpened.style.display = "none"
        Canandaigua.style.color = '#499A18'
        borderCanandaigua.style.color = '#499A18'
        // city.style.paddingRight = '26.9vw'


    })

    btnDropDown.addEventListener('click', function(){
        CanandaiguaOpened.style.display = "none"
        Canandaigua.style.color = '#499A18'
        borderCanandaigua.style.color = '#499A18'

    })


})


NewYork.addEventListener('click', function(){
    NewYork.style.color = '#717171'
    borderNewYork.style.color = '#717171'
    NewYorkOpened.style.display = "block"
    citiesList.style.display = 'none'
    // city.innerHTML = 'New York City'
    // city.style.paddingRight = '20vw'

    btnDropUp.style.display = "none"
    btnDropDown.style.display = "inline"

    btnDropUp.addEventListener('click', function(){
        citiesList.style.display = "none"
        btnDropUp.style.display = "none"
        btnDropDown.style.display = "inline"
        city.style.background = "#D6E7D2"
        city.innerHTML = 'City'
        NewYorkOpened.style.display = "none"
        NewYork.style.color = '#499A18'
        borderNewYork.style.color = '#499A18'
        // city.style.paddingRight = '26.9vw'


    })

    btnDropDown.addEventListener('click', function(){
        NewYorkOpened.style.display = "none"
        NewYork.style.color = '#499A18'
        borderNewYork.style.color = '#499A18'
    })


})



Yonkers.addEventListener('click', function(){
    Yonkers.style.color = '#717171'
    borderYonkers.style.color = '#717171'
    YonkersOpened.style.display = "block"
    citiesList.style.display = 'none'
    // city.innerHTML = 'Yonkers, NY'
    // city.style.paddingRight = '21.5vw'

    btnDropUp.style.display = "none"
    btnDropDown.style.display = "inline"

    btnDropUp.addEventListener('click', function(){
        citiesList.style.display = "none"
        btnDropUp.style.display = "none"
        btnDropDown.style.display = "inline"
        city.style.background = "#D6E7D2"
        city.innerHTML = 'City'
        YonkersOpened.style.display = "none"
        Yonkers.style.color = '#499A18'
        borderYonkers.style.color = '#499A18'
        // city.style.paddingRight = '26.9vw'


    })

    btnDropDown.addEventListener('click', function(){
        YonkersOpened.style.display = "none"
        Yonkers.style.color = '#499A18'
        borderYonkers.style.color = '#499A18'
    })


})



Sherrill.addEventListener('click', function(){
    Sherrill.style.color = '#717171'
    borderSherrill.style.color = '#717171'
    SherrillOpened.style.display = "block"
    citiesList.style.display = 'none'
    // city.innerHTML = 'Sherrill, NY'
    btnDropUp.style.display = "none"
    btnDropDown.style.display = "inline"
    // city.style.paddingRight = '22vw'


    btnDropUp.addEventListener('click', function(){
        citiesList.style.display = "none"
        btnDropUp.style.display = "none"
        btnDropDown.style.display = "inline"
        city.style.background = "#D6E7D2"
        city.innerHTML = 'City'
        SherrillOpened.style.display = "none"
        Sherrill.style.color = '#499A18'
        borderSherrill.style.color = '#499A18'
        // city.style.paddingRight = '26.9vw'


    })

    btnDropDown.addEventListener('click', function(){
        SherrillOpened.style.display = "none"
        Sherrill.style.color = '#499A18'
        borderSherrill.style.color = '#499A18'
    })


})













let basics = document.querySelector(".Basics")
let standard = document.querySelector(".Standard")
let proCare = document.querySelector(".ProCare")
let basicsDropDown = document.querySelector(".basics-dropdown")
let basicsDropUp = document.querySelector(".basics-dropup")
let standardDropUp = document.querySelector(".standard-dropup")
let proCareDropUp = document.querySelector(".proCare-dropup")

let standardDropDown = document.querySelector(".standard-dropdown")
let proCareDropDown = document.querySelector(".proCare-dropdown")



basicsDropDown.addEventListener('click', function(){
if(basics.style.height === "34px"  || basics.style.height === ""){
    basics.style.height =  "144px"
    basics.style.backgroundColor = "#D6E7D2"
    basicsDropDown.style.display = "none"
    basicsDropUp.style.display = "block"

    proCare.style.height = "34px" 
    proCareDropDown.style.display = "inline-block"
    proCareDropUp.style.display = "none"
    proCare.style.backgroundColor = "#EDF2EC"
    
    standard.style.height = "34px" 
    standardDropDown.style.display = "inline-block"
    standardDropUp.style.display = "none"
    standard.style.backgroundColor = "#EDF2EC"


basicsDropUp.addEventListener('click', function(){
    basics.style.height =  "34px"
    basicsDropDown.style.display = "inline-block"
    basicsDropUp.style.display = "none"
    basics.style.backgroundColor = "#EDF2EC"
   
} )


}
})






standardDropDown.addEventListener('click', function(){
    if(standard.style.height === "34px"  || standard.style.height === ""){
        standard.style.height =  "144px"
        standard.style.backgroundColor = "#D6E7D2"
        standardDropDown.style.display = "none"
        standardDropUp.style.display = "block"
    
        basics.style.height ="34px" 
        basicsDropDown.style.display = "inline-block"
        basicsDropUp.style.display = "none"
        basics.style.backgroundColor = "#EDF2EC"

        proCare.style.height = "34px" 
        proCareDropDown.style.display = "inline-block"
        proCareDropUp.style.display = "none"
        proCare.style.backgroundColor = "#EDF2EC"
    
        standardDropUp.addEventListener('click', function(){
        standard.style.height =  "34px"
        standardDropDown.style.display = "inline-block"
        standardDropUp.style.display = "none"
        standard.style.backgroundColor = "#EDF2EC"
        
    } )

    // basicsDropDown.addEventListener('click', function(){
    //     if(standard.style.height === "144px"){
    //         basics.style.height =  "144px"
    //         standard.style.height = "34px"

    // }
    
    // })

}
})


    proCareDropDown.addEventListener('click', function(){
        if(proCare.style.height === "34px"  || proCare.style.height === ""){
            proCare.style.height =  "144px"
            proCare.style.backgroundColor = "#D6E7D2"
            proCareDropDown.style.display = "none"
            proCareDropUp.style.display = "block"
        
            basics.style.height = "34px" 
            basicsDropDown.style.display = "inline-block"
            basicsDropUp.style.display = "none"
            basics.style.backgroundColor = "#EDF2EC"

            standard.style.height ="34px" 
            standardDropDown.style.display = "inline-block"
            standardDropUp.style.display = "none"
            standard.style.backgroundColor = "#EDF2EC"
        
            proCareDropUp.addEventListener('click', function(){
                proCare.style.height =  "34px"
            proCareDropDown.style.display = "inline-block"
            proCareDropUp.style.display = "none"
            proCare.style.backgroundColor = "#EDF2EC"
           
        } )
        }
        
        })


    








// basicsDropDown.onclick = function(){
//     basics.classList.toggle('Basics-active ')
// }























let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let xButton = document.querySelector(".nav__items--item--x")
let  body = document.querySelector("body")
let navItems = document.querySelectorAll(".nav__items--item a")


burger.addEventListener("click", function(){
    if(nav.style.display === "" || nav.style.display === "none"){
        nav.style.display === "block"    
    } 

    nav.classList.toggle('active')

})

// xButton.addEventListener("click", function(){
//     if(nav.style.display === "block"){
//         nav.style.top = "-100%"

//     }
//     // nav.classList.toggle('active')


// })




xButton.onclick = function(){
    nav.classList.toggle('active')
}

// document.onclick = function(){
//     nav.classList.toggle('active')

// }

navItems.onclick = function(){
    nav.classList.toggle('active')
}

let plantingBtn = document.querySelector(".section3__descript--btn--item-3")
let gardenBtn = document.querySelector(".section3__descript--btn--item-1")
let lawvBtn = document.querySelector(".section3__descript--btn--item-2")

let planting1 = document.querySelector(".planting1")
let planting2 = document.querySelector(".planting2")
let planting3 = document.querySelector(".planting3")


let gardenCare1 = document.querySelector(".garden-care1")
let gardenCare2 = document.querySelector(".garden-care2")

let lawnCare = document.querySelector(".lawn-care")

 // lawnCare.addEventListener('click', function(){
    //     if(lawnCare.style.filter === "blur(2px)" ){
    //         lawnCare.style.filter === "blur(0px)"
    //     }
    // })


    plantingBtn.addEventListener('click', function(){
    // if(    planting1.style.filter = "blur(0px)"){
    if((gardenCare1.style.filter === "blur(0px)" &&   gardenCare2.style.filter === "blur(0px)") && lawnCare.style.filter === "blur(0px)" ){
        gardenCare1.style.filter = "blur(2px)"
    gardenCare2.style.filter = "blur(2px)"
    lawnCare.style.filter = "blur(2px)"

    }else {
        gardenCare1.style.filter = "blur(0px)"
        gardenCare2.style.filter = "blur(0px)"
        lawnCare.style.filter = "blur(0px)"
    }

// }else{
//     planting1.style.filter = "blur(2px)"
//     planting2.style.filter = "blur(2px)"
//     planting3.style.filter = "blur(2px)"



// }
})

// planting2.addEventListener('click', function(){
//     // if(    planting3.style.filter = "blur(0px)" ){
//                if((gardenCare1.style.filter === "blur(0px)" &&   gardenCare2.style.filter === "blur(0px)") && lawnCare.style.filter === "blur(0px)" ){
//         gardenCare1.style.filter = "blur(2px)"
//     gardenCare2.style.filter = "blur(2px)"
//     lawnCare.style.filter = "blur(2px)"

//     }else {
//         gardenCare1.style.filter = "blur(0px)"
//         gardenCare2.style.filter = "blur(0px)"
//         lawnCare.style.filter = "blur(0px)"
//     }
// }else{
//     planting1.style.filter = "blur(2px)"
//     planting2.style.filter = "blur(2px)"
//     planting3.style.filter = "blur(2px)"

// }
// })

// planting3.addEventListener('click', function(){
//     // if(        planting3.style.filter = "blur(0px)"){
//     if((gardenCare1.style.filter === "blur(0px)" &&   gardenCare2.style.filter === "blur(0px)") && lawnCare.style.filter === "blur(0px)" ){
//         gardenCare1.style.filter = "blur(2px)"
//     gardenCare2.style.filter = "blur(2px)"
//     lawnCare.style.filter = "blur(2px)"

//     }else {
//         gardenCare1.style.filter = "blur(0px)"
//         gardenCare2.style.filter = "blur(0px)"
//         lawnCare.style.filter = "blur(0px)"
//     }
// // } else{
// //     planting1.style.filter = "blur(2px)"
// //     planting2.style.filter = "blur(2px)"
// //     planting3.style.filter = "blur(2px)"

// // }
// })

// gardenCare1.addEventListener('click', function(){
//     // if( gardenCare1.style.filter = "blur(0px)"){
//     if((planting1.style.filter === "blur(0px)" &&   planting2.style.filter === "blur(0px)" && planting3.style.filter === "blur(0px)") && lawnCare.style.filter === "blur(0px)" ){
//         planting1.style.filter = "blur(2px)"
//         planting2.style.filter = "blur(2px)"
//         planting3.style.filter = "blur(2px)"
//         lawnCare.style.filter = "blur(2px)"

//     }else {
//         planting1.style.filter = "blur(0px)"
//         planting2.style.filter = "blur(0px)"
//         planting3.style.filter = "blur(0px)"
//         lawnCare.style.filter = "blur(0px)"
//     }

// // }else{
// //     gardenCare1.style.filter = "blur(2px)"
// //     gardenCare2.style.filter = "blur(2px)"


// // }
// })

gardenBtn.addEventListener('click', function(){
    // if(  gardenCare2.style.filter = "blur(0px)"){
    if((planting1.style.filter === "blur(0px)" &&   planting2.style.filter === "blur(0px)" && planting3.style.filter === "blur(0px)") && lawnCare.style.filter === "blur(0px)" ){
        planting1.style.filter = "blur(2px)"
        planting2.style.filter = "blur(2px)"
        planting3.style.filter = "blur(2px)"
        lawnCare.style.filter = "blur(2px)"

    }else {
        planting1.style.filter = "blur(0px)"
        planting2.style.filter = "blur(0px)"
        planting3.style.filter = "blur(0px)"
        lawnCare.style.filter = "blur(0px)"
    }

    lawvBtn.addEventListener('click', function(){
        // if( lawnCare.style.filter = "blur(0px)"){
        if((planting1.style.filter === "blur(0px)" &&   planting2.style.filter === "blur(0px)" && planting3.style.filter === "blur(0px)") || (gardenCare1.style.filter === "blur(0px)" &&   gardenCare2.style.filter === "blur(0px)")  ){
            planting1.style.filter = "blur(2px)"
            planting2.style.filter = "blur(2px)"
            planting3.style.filter = "blur(2px)"
            gardenCare1.style.filter = "blur(2px)"
        gardenCare2.style.filter = "blur(2px)"
        lawnCare.style.filter = "blur(2px)"

    
        }else  if((planting1.style.filter === "blur(2px)" &&   planting2.style.filter === "blur(2px)" && planting3.style.filter === "blur(2px)") || (gardenCare1.style.filter === "blur(2px)" &&   gardenCare2.style.filter === "blur(2px)")  ) {
            planting1.style.filter = "blur(0px)"
            planting2.style.filter = "blur(0px)"
            planting3.style.filter = "blur(0px)"
            gardenCare1.style.filter = "blur(0px)"
            gardenCare2.style.filter = "blur(0px)"
            lawnCare.style.filter = "blur(0px)"

        }
    })
    


// }else{
//      gardenCare2.style.filter = "blur(2px)"
//      gardenCare1.style.filter = "blur(2px)"


// }
})

lawvBtn.addEventListener('click', function(){
    // if( lawnCare.style.filter = "blur(0px)"){
    if((planting1.style.filter === "blur(0px)" &&   planting2.style.filter === "blur(0px)" && planting3.style.filter === "blur(0px)") && (gardenCare1.style.filter === "blur(0px)" &&   gardenCare2.style.filter === "blur(0px)")  ){
        planting1.style.filter = "blur(2px)"
        planting2.style.filter = "blur(2px)"
        planting3.style.filter = "blur(2px)"
        gardenCare1.style.filter = "blur(2px)"
    gardenCare2.style.filter = "blur(2px)"

    }else {
        planting1.style.filter = "blur(0px)"
        planting2.style.filter = "blur(0px)"
        planting3.style.filter = "blur(0px)"
        gardenCare1.style.filter = "blur(0px)"
        gardenCare2.style.filter = "blur(0px)"
    }
})












// lawnCare.addEventListener('click', function(){
//     if(planting1.contains('filter')){
//         planting1.style.filter = "blur(2px)"
//         planting2.classList.remove('blurEffect')
//         planting3.classList.remove('blurEffect')

//     gardenCare1.classList.remove('blurEffect')
//     gardenCare2.classList.remove('blurEffect')

//     }else {
//         planting1.classList.add('blurEffect')
//         planting2.classList.add('blurEffect')
//         planting3.classList.add('blurEffect')

//     gardenCare1.classList.add('blurEffect')
//     gardenCare2.classList.add('blurEffect')

//     }
      
     


// planting1.addEventListener('click', function(){
//     planting1.classList.toggle('blurEffect')
//     planting2.classList.toggle('blurEffect')
//     planting3.classList.toggle('blurEffect')
//     gardenCare1.classList.add('blurEffect')
//     gardenCare2.classList.add('blurEffect')
//     //     lawnCare.classList.toggle('blurEffect')



// })


// planting1.addEventListener('click', function(){
//     lawnCare.classList.toggle('blurEffect')
   
//     gardenCare1.classList.toggle('blurEffect')
//     gardenCare2.classList.toggle('blurEffect')

// })

// planting2.addEventListener('click', function(){
//     lawnCare.classList.toggle('blurEffect')
   
//     gardenCare1.classList.toggle('blurEffect')
//     gardenCare2.classList.toggle('blurEffect')

// })
// planting3.addEventListener('click', function(){
//     lawnCare.classList.toggle('blurEffect')
   
//     gardenCare1.classList.toggle('blurEffect')
//     gardenCare2.classList.toggle('blurEffect')

// })

// gardenCare1.addEventListener('click', function(){
//     lawnCare.classList.toggle('blurEffect')
   
//     gardenCare1.classList.toggle('blurEffect')
//     gardenCare2.classList.toggle('blurEffect')

// })

// gardenCare2.addEventListener('click', function(){
//     lawnCare.classList.toggle('blurEffect')
   
//     planting1.classList.toggle('blurEffect') 
//     planting2.classList.toggle('blurEffect')
//     planting3.classList.toggle('blurEffect')

// })



// lawnCare.addEventListener('click', function(){
//     if(planting1.style.filter = "blur(0)"){
//         planting1.style.filter = "blur(2px)"
//         planting2.style.filter = "blur(2px)"
//         planting3.style.filter = "blur(2px)"
//         gardenCare1.style.filter = "blur(2px)"
//         gardenCare2.style.filter = "blur(2px)"
    

//     }else if(planting1.style.filter = "blur(2px)") {
//         planting1.style.filter = "blur(0)"
//         planting2.style.filter = "blur(0)"
//         planting3.style.filter = "blur(0)"
//         gardenCare1.style.filter = "blur(0)"
//         gardenCare2.style.filter = "blur(0)"
 
//     }
// }) 
  




// planting1.addEventListener('click', function(){
//     if(lawnCare.style.filter = "blur(0)"){
//         lawnCare.style.filter = "blur(2px)"
//         gardenCare1.style.filter = "blur(2px)"
//         gardenCare2.style.filter = "blur(2px)"
    

//     }














// if(nav.style.display === "block"){
//         body.addEventListener("click", function(){
//             nav.style.display = "none"
        
//     })
// }


// document.onclick = function(e){
//     if(e.target.id !== "nav"){
// nav.classList.remove('active')   
//  }
// }






// const adaptiveMenu = document.querySelector('.header__nav');
// const burger = document.querySelector(".header__burger");

// burger.addEventListener('click', function() {
//     toggleBurger();
// });

// window.addEventListener('click', function() {
//     if (event.target != document.querySelector('.menu') && event.target != burger) {
//         closeAdaptiveMenu();
//     }
// });

// function toggleBurger() {
//     adaptiveMenu.classList.toggle('header__nav_visible');
//     burger.classList.toggle('header__burger_cross');
// }

// function closeAdaptiveMenu() {
//     adaptiveMenu.classList.remove('header__nav_visible');
//     burger.classList.remove('header__burger_cross');
// }




