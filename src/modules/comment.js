

document.addEventListener('click', (e) => {


    for (let i = 0; i < 6; i++) {
         if(e.target.className === i.toString()) {
       console.log('Button index ' + i + ' is pressed')
    }
        
    }
   
})