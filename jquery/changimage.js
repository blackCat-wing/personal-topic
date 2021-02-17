$('.image_small img').mouseenter(function(){
    $(".image_large img").attr("src",$(this)[0].src).addClass("fadein");
    $(this).css({
        'border':'1px solid rgba(145,152,159,.3)',
    });
    $(this).siblings().css({
        'border':'0px',
    });
});
$('.image_small img').mouseleave(function(){
    $(".image_large img").attr("src",$(this)[0].src).removeClass("fadein");
});

$(".image_large").click(function(){
    let imageSrc = $(".image_large img")[0].src;
    // alert(imageSrc);
    let windowWidth = $(window).width();
    let windowHight = $(window).height();
    let imageWidth = $(this).width;
    let imageHeight = $(this).height;
    let scale = 0.9;
    let realWidth = 0;
    let realHeight = 0;
        
    if(windowWidth > windowHight){
        realHeight  = windowHight*scale;

        $(".innerdiv img").css({
            'height':realHeight,
        });
    }
    if(windowWidth < windowHight){
        realWidth  = windowWidth*scale;
        $(".innerdiv img").css({
            'height':realWidth,
        });
    }

    $("#bigimg").attr("src",imageSrc);
    $(".outerdiv").css({
            'display':'block',
    });
        
});

$(".outerdiv").click(function(){
    $(".outerdiv").css({
        'display':'none',
    });
});
$('.shop_in').mouseenter(function(){
    $image = $(this).children('img').attr('src');
    $imageSrc = $image.split('.png');
    $($(this).children('img')).attr('src',$imageSrc[0]+'_1.png');
    // alert($image);
});
$('.shop_in').mouseleave(function(){
    $($(this).children('img')).attr('src',$image);
});

$(document).ready(function(){
    $(window).resize(function() {
        wdth=$(window).width();
        if(wdth <= 767){
            $("#banner_img1").attr("src","./images/banner_img1.jpg");
            $("#banner_img2").attr("src","./images/banner_img2.jpg");
            $("#banner_img3").attr("src","./images/banner_img3.jpg");
            $("#banner_img4").attr("src","./images/banner_img3.jpg");
        }else{
            $("#banner_img1").attr("src","./images/banner1.jpg");
            $("#banner_img2").attr("src","./images/banner.jpg");
            $("#banner_img3").attr("src","./images/banner1.jpg");
            $("#banner_img4").attr("src","./images/banner.jpg");
        }
    });
    wdth=$(window).width();
        if(wdth <= 767){
            $("#banner_img1").attr("src","./images/banner_img1.jpg");
            $("#banner_img2").attr("src","./images/banner_img2.jpg");
            $("#banner_img3").attr("src","./images/banner_img3.jpg");
            $("#banner_img4").attr("src","./images/banner_img2.jpg");
        }else{
            $("#banner_img1").attr("src","./images/banner1.jpg");
            $("#banner_img2").attr("src","./images/banner.jpg");
            $("#banner_img3").attr("src","./images/banner1.jpg");
            $("#banner_img4").attr("src","./images/banner.jpg");
        }
});