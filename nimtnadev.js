$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#navbar').addClass("sticky");
        }else{
            $('#navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toogle menu script
    $('.menu-icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-icon i').toggleClass("active");
    });
});   

function createButton(id, url) {
    const button = document.getElementById(id);
    button.addEventListener("click", function(){
      window.location.href = url;
    });
    button.style.cursor = "pointer";
}
  
createButton("net", "https://www.nimtnam.com/campuses/net");
createButton("nsc", "https://www.nimtnam.com/campuses/nsc");
createButton("nbct", "https://www.nimtnam.com/campuses/nbct");
createButton("nnc", "https://www.nimtnam.com/campuses/net");
createButton("rectangle2", "https://www.nimtnam.com/more/examination-department");
createButton("rectangle3", "https://www.nimtnam.com/more/job-attachment-department");
createButton("rectangle4", "https://www.nimtnam.com/more/artisan-training-curriculum-department");
createButton("rectangle5", "https://www.nimtnam.com/more/student-affairs-and-it-department");
createButton("rectangle6", "https://www.nimtnam.com/more/finance-department");
createButton("h3-title", "https://drive.google.com/file/d/15wnjWjD5Hpou_v1i1qP4LtESgdWkocNb/view?usp=share_link");
  


