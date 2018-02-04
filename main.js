
$(document).ready(function () {
// var myVar; 
//     function startCycle() {
//     $(".slider-wrapper > div:gt(0)").hide();
//     myVar = setInterval(function() { 
//         $('#slide1').removeClass("active");
//         $('#slide2').removeClass("active"); 
//         $('#slide3').removeClass("active");  
//         $('.slider-wrapper > div:first')
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('.slider-wrapper');
//     },         
//     3000);
// }
// startCycle(3000);
    $('#1-slide').addClass("active-button");
    $('#slide1 img').addClass("active");  
    $('#1-slide').click(function(){
        // clearInterval(myVar);
        // clearTimeout(startCycle);
        $(this).addClass("active-button");
        $('#2-slide').removeClass("active-button"); 
        $('#3-slide').removeClass("active-button"); 
        $('#slide1 img').addClass("active");
        $('#slide2 img').removeClass("active");
        $('#slide3 img').removeClass("active");
        // setTimeout(startCycle, 3000);
    });
    $('#2-slide').click(function(){
        // clearInterval(myVar);
        // clearTimeout(startCycle);
        $(this).addClass("active-button");
        $('#1-slide').removeClass("active-button"); 
        $('#3-slide').removeClass("active-button"); 
        $('#slide2 img').addClass("active");
        $('#slide1 img').removeClass("active");
        $('#slide3 img').removeClass("active");
        // setTimeout(startCycle, 3000);
    });
    $('#3-slide').click(function(){
        // clearInterval(myVar);
        // clearTimeout(startCycle);
        $(this).addClass("active-button");
        $('#1-slide').removeClass("active-button"); 
        $('#2-slide').removeClass("active-button"); 
        $('#slide3 img').addClass("active");
        $('#slide1 img').removeClass("active");
        $('#slide2 img').removeClass("active");
        // setTimeout(startCycle, 3000);
    });
  });