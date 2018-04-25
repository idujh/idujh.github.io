$(document).ready(function(){
//헤더 스트립트
$('.header').on('mouseenter focus',function(){
$(this).css({backgroundColor:'green'})
})
$('.header').on('mouseleave blur',function(){
$(this).css({backgroundColor:'#ddd'})
})
//헤더 시크립트

//푸터 스트립트
$('.footer').on('mouseenter focus',function(){
$(this).css({backgroundColor:'green'})
})
$('.footer').on('mouseleave blur',function(){
$(this).css({backgroundColor:'#ddd'})
})
//푸터 시크립트

})//ready