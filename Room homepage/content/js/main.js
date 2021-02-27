$('.caroseul-button__left').on('click', function(e) {
    e.preventDefault();
    $('.carousel').carousel('prev');
});

$('.caroseul-button__right').on('click', function(e) {
    e.preventDefault();
    $('.carousel').carousel('next');
});

var src1="../content/assets/svg/icon-hamburger.svg";
var src2="../content/assets/svg/icon-close.svg";


$('#mobile-nav-icon').click(
    function(){

        $('.navbar-list').toggleClass("showing");

        $('.navbar-list').toggleClass("background");
        
        $('.navbar-list').toggleClass("selected");

        var src = $('#mobile-nav-icon').attr('src'); 
        if(src == src1){
            $('#mobile-nav-icon').attr('src',src2);
        }
        else{
            $('#mobile-nav-icon').attr('src',src1);
        }
    }
);