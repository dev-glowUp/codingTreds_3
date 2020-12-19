// const overlay = document.getElementById("product-shape")

// var el = document.getElementsByClassName("color");

// var text = document.querySelector(".color-name");


// for (var i = 0; i < el.length; i++) {
// el[i].onclick = changeState;
// }

// function allEvents() {
//     changeColor;

// }




// function changeColor(e) {
// // get the hex color
// let hex = e.target.getAttribute("data-hex");
// console.log(hex);
// // set the hex color
// overlay.style.fill = hex;
// }

// function changeState(b) {
//     b.style.border = "3px solid #2b2b2b";
// }

// function changeColorNAME(a) {
// // get the hex color
// let textTag = a.target.getAttribute("tag");
// console.log(textTag);
// // set the hex color
// text.innerHTML = textTag;
// }

// function selected() {
//     el.style.border = "3px solid #2b2b2b";
// }


// ////////////////////

// // Reference the color shape that was drawn over the image
// const overlay = document.getElementById("product-shape");

// // Click on a color

// var el = document.getElementsByClassName("color");
// for (var i = 0; i < el.length; i++) {
//   el[i].onclick = changeColor;
// }

// function changeColor(e) {
//   // get the hex color
//   let hex = e.target.getAttribute("data-hex");
//   // set the hex color
//   overlay.style.fill = hex;
// }

// const overlay = document.getElementsByClassName("product-shape")

// var dot = document.getElementsByClassName("dot");

// var text = document.querySelector(".color-name");


// console.log("funciona");

	
$( ".dot" ).click(function(){
    var $hex = $(this).attr("data-hex");
    // console.log($hex);
    $("#product-shape").css({'fill' : $hex});

    var $textTag = $(this).attr("tag");
    $(".color-name").html($textTag);

});


// function changeColorNAME(a) {
// let textTag = a.target.getAttribute("tag");
// text.innerHTML = textTag;
// }