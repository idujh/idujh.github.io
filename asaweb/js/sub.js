
$(document).ready(function(){

//헤더
$(window).on('load',function(){
var gheight=$('.gnb').height()
$('.gnb>li>ul').css({top:gheight+1})
})
var header=true
var loop=setInterval(function(){
if (header)
{
$('body,html').css({backgroundColor:'#6994a5'})
$('.header').addClass('on')
header=false
}else{
$('body,html').css({backgroundColor:'#699da5'})
$('.header').removeClass('on')
header=true
}
},10000)

$('.gnb>li>a').on('mouseenter focus',function(){
$('.gnb>li>a').removeClass('on')
$(this).addClass('on')
$('.gnb>li>ul').fadeOut()
$(this).next().fadeIn()
})

//푸터
$("#select").selectmenu();

})//ready