const rightArrow = document.querySelector('.circle-position-right'); 
const leftArrow = document.querySelector('.circle-position-left');
const slidesArr = Array.from(document.querySelectorAll("input[name='point']"));



rightArrow.addEventListener('click', function(){
    let indexV;

    slidesArr.forEach((elem, index, arr) => {
        if (elem.checked === true && index !== arr.length - 1) {
            indexV = index;
            elem.removeAttribute('checked');
        }
    });

    slidesArr[indexV + 1].setAttribute('checked', 'true');
});

leftArrow.addEventListener('click', function(){
    let indexV;

    slidesArr.forEach((elem, index, arr) => {
        if (elem.checked === true && index !== 0) {
            indexV = index;
            elem.removeAttribute('checked');
        }
    });

    slidesArr[indexV - 1].setAttribute('checked', 'true');
});




const leftArrow_2 = document.querySelector('.review-left-circle-position'); 
const rightArrow_2 = document.querySelector('.review-right-circle-position');
const slidesArr_2 = Array.from(document.querySelectorAll("input[name='point_1']"));


leftArrow_2.addEventListener('click', function(){
    let indexV;
    slidesArr_2.forEach((elem, index) => {
        if(elem.checked && index !==0){
           elem.removeAttribute('checked')
           indexV = index;
        }    
    })
    slidesArr_2[indexV - 1].setAttribute('checked', 'true');
});


rightArrow_2.addEventListener('click', function(){
    let indexV;
    slidesArr_2.forEach((elem, index) => {
        if(elem.checked && index !==5){
           elem.removeAttribute('checked')
           indexV = index;
        }
    })
    slidesArr_2[indexV + 1].setAttribute('checked', 'true'); 
});