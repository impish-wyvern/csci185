const photos = [
    "../../images/BlackCuillins.jpg",
    "../../images/me.jpg",
    "../../images/southdowns.jpg",
    "../../images/brighton.jpg",
    "../../images/blacklake.jpg",
    "../../images/irishhillforts.jpg",
    "../../images/hogwarts.jpg",
    "../../images/Pemberly.jpg",
    "../../images/urquhart.jpg",
    "../../images/cemetery.jpg",
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
    const img = document.querySelector(".current-photo img");
    img.src = photos[idx];
    
    if (idx === 0){
    document.querySelector('.caption').textContent = "Image 1 of 10";
    }
    if (idx === 1){
        document.querySelector('.caption').textContent = "Image 2 of 10";
    }
    if (idx === 2){
        document.querySelector('.caption').textContent = "Image 3 of 10";
    }
    if (idx === 3){
        document.querySelector('.caption').textContent = "Image 4 of 10";
    }
    if (idx === 4){
        document.querySelector('.caption').textContent = "Image 5 of 10";
    }
    if (idx === 5){
        document.querySelector('.caption').textContent = "Image 6 of 10";
    }
    if (idx === 6){
        document.querySelector('.caption').textContent = "Image 7 of 10";
    }
    if (idx === 7){
        document.querySelector('.caption').textContent = "Image 8 of 10";
    }
    if (idx === 8){
        document.querySelector('.caption').textContent = "Image 9 of 10";
    }
    if (idx === 9){
        document.querySelector('.caption').textContent = "Image 10 of 10";
    }
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    idx += 1;
    if (idx > 9) {
        idx = 0;
    }
    showImage();
    
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
    idx -= 1;
    if (idx < 0) {
        idx = 9;
    }
    showImage();

}
