const tabs = document.querySelectorAll('li');
const ul = document.querySelector('ul');
const navLink = document.querySelector('.nav-ul')
// console.log(navLink)
// navLink.style.transform = "translateX(-20px)";





tabs.forEach( tab => {
    tab.addEventListener('click', (e) => {
        
       
        const showDiv = document.querySelectorAll('[data-tab-content]');  
        showDiv.forEach( item => {
            item.classList.remove('activee');
            if(`#${item.id}`=== tab.dataset.tabTarget){
                item.classList.add('activee')  
            }         
    })
})    
})

tabs.forEach(el => {
    el.addEventListener('click', () => {
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active')

    });
});


const imgClicked = document.querySelectorAll('.main-content img');
const popupWrapper = document.querySelector('.popup-wrapper');                    
const close = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');



imgClicked.forEach( coffinImg => {
    coffinImg.addEventListener('click', (e) => {
        
        popupWrapper.style.display = 'block';

        const popupHeadLine = document.querySelector('.casket-type');
        console.log(popupHeadLine)

        popupHeadLine.style.display = 'block';

       popupHeadLine.textContent = coffinImg.nextElementSibling.textContent
        
          
    });
});

close.addEventListener('click', () => {
    popupWrapper.style.display = 'none';
   
});
popupWrapper.addEventListener('click', (e) => {
   if(!popup.classList === 'popup'){
    popupWrapper.style.display = 'none';
   }
    
    
    
   
});