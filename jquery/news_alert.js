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