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
createButton("campus", "https://www.nimtnam.com/campuses");
createButton("trades", "https://www.nimtnam.com/trades");
createButton("downloads", "https://www.nimtnam.com/downloads");
createButton("about_us", "https://www.nimtnam.com/about-us");
createButton("contact_us", "https://www.nimtnam.com/contact-us");
createButton("fulltime", "https://drive.google.com/file/d/1E1d0nAl0LkSjaRzkJzkjvfeL6zPAZj7Y/view?usp=share_link");
createButton("special", "https://drive.google.com/file/d/1VNbB1Kl9SK8wsf2v12AbkowedQIhnBGi/view?usp=share_link");
createButton("menu_item1", "sabine.hellwig@nimt.edu.na");
createButton("menu_item2", "https://drive.google.com/file/d/1xb96bygPzuxZzq4cai_FpdGDIBhNuuJr/view");
createButton("menu_item3", "https://drive.google.com/file/d/1ObtHGMuLKIzc035mGKAPG3L5YU4250Bx/view?usp=sharing");
createButton("menu_item4", "http://www.google.com/url?q=http%3A%2F%2Fnimtnam.com%2Ffiles%2FDownload%2FMine%2520Surveying%2520-%2520Application.docx&sa=D&sntz=1&usg=AOvVaw2rWNi3QOQrVGcJROX0FfZQ");
createButton("menu_item5", "http://www.google.com/url?q=http%3A%2F%2Fnimtnam.com%2Ffiles%2FDownload%2FEXAMINATION%2520REGISTRATION%2520FORMS%2520-%2520INTERNAL%2520RE-WRITE.docx&sa=D&sntz=1&usg=AOvVaw3kLWM5rj9SnSBiSS6O12z6");
createButton("menu_item6", "http://www.google.com/url?q=http%3A%2F%2Fnimtnam.com%2Ffiles%2FDownload%2FWrite-and-RW.pdf&sa=D&sntz=1&usg=AOvVaw1Hwziampqd7LbhNUnD2rnc");