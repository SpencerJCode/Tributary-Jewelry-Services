let galleryIndex = 0;

function scrollToAboutUs(){
    document.getElementById('AboutUs').scrollIntoView({ behavior: 'smooth'});
}
function scrollToGallery(){
    document.getElementById('Gallery').scrollIntoView({ behavior: 'smooth'});
}
function scrollToContact(){
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth'});
}
function advanceGalleryBackward(){
    let slides = document.getElementsByClassName("GallerySlide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if(galleryIndex==0){
        galleryIndex = slides.length-1;
    } else {
        galleryIndex--;
    }
    slides[galleryIndex].style.display = "inline";
}
function advanceGalleryForward(){
    let slides = document.getElementsByClassName("GallerySlide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if(galleryIndex==slides.length-1){
        galleryIndex = 0;
    } else {
        galleryIndex++;
    }
    slides[galleryIndex].style.display = "inline";
}
function hideAllGalleryImages(){
    let slides = document.getElementsByClassName("GallerySlide");
    for (i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
}