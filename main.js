// Get Slider Items 
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));


// Get Number Of Slides
var slidesCount = sliderImages.length;


// set current slide
var currentSlide = 1;

// Slide Number  Element

var slideNumberElement = document.getElementById ('slide-number');

//previous and next buttons

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick= nextSlide;
prevButton.onclick= prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID on created UI element
paginationElement.setAttribute('id','pagination-ul');

// Create list Items Based On Array Lengh
for (var i=1 ; i <= slidesCount ; i++){

    //Creat the li
    var paginationItem = document.createElement('li');

    //set custom attribute
    paginationItem.setAttribute('data-index',i);

    //Set Item content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Item tp the main list
    paginationElement.appendChild(paginationItem);
}

// Add the created element to the page
document.getElementById('indicators').appendChild(paginationElement);

// Get the new created UL
var paginationCreatedUL = document.getElementById('pagination-ul');

// get Pagination Items
var paginationBullets = Array.from (document.querySelectorAll('#pagination-ul li'));

// Loop Throw all bullets tem
for (var i=0; i<paginationBullets.length ; i++)
{
    paginationBullets[i].onclick =function(){

        currentSlide= parseInt (this.getAttribute ('data-index'));
        theChecker();
    }
}


// Trigger the checker function
theChecker();

// Next Slide Function
function nextSlide () {


if (nextButton.classList.contains('disabled')){
    // Do nothing
     return false;

    }else{
        currentSlide ++;
        theChecker();
    }
}

// Previous Slide Function

function prevSlide () {
    if (prevButton.classList.contains('disabled')){
        // Do nothing
         return false;
    
        }else{
            currentSlide --;
            theChecker();
        }
}

//create The Checker function
function theChecker(){
// set the slide number
    
    slideNumberElement.textContent='slide # ' + (currentSlide) + ' of ' + (slidesCount);

    //Remove All Active Class
    removeallactive();
    // Set active class on current slide
    sliderImages[currentSlide - 1].classList.add ('active')

    // Set active class on current pagination Item
    paginationCreatedUL.children[currentSlide - 1].classList.add('active');

    //check of current slide is the first
    if (currentSlide == 1){
        // Add Disabled class on  previous buttom
        prevButton.classList.add('disabled');
    }else{
        //Remove Disabled class from  previous buttom
        prevButton.classList.remove('disabled');
    }
    //check of current slide is the last
    if (currentSlide == slidesCount)
    {
        // Add Disabled class on  Next buttom
        nextButton.classList.add('disabled');
    }else{
        //Remove Disabled class from Next buttom
        nextButton.classList.remove('disabled');
    }
    
}

// Remove all active classes from Immages and Pagination Bullets

function removeallactive() {
    // Loop theough Emages
    sliderImages.forEach(function (img) {


        img.classList.remove('active');


    });
    //loop through pagination Bullets
    paginationBullets.forEach (function (bullet) {

        bullet.classList.remove('active');

    });
}