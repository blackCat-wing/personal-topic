//畫面往下滑200px的時候show出導覽列
window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 200) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("-on")
        } else {
            document.querySelector("header").classList.remove("-on")
        }
    }
    
}
//匯入hamburger方法
window.onload = function(){
$('.hamburger').on('click',function(){
    $('.header_list').slideToggle()
    $(this).toggleClass("is-active")
})
}