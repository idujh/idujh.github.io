$(document).ready(function(){
$('.gnb>li>a').each(function(index){
$(this).on('mouseenter focus',function(){
$('.gnb>li>ul').stop().slideDown()
$('.gnbbg').stop().slideDown()
$('.gnb>li>ul').css({backgroundColor:'#fff'})
$('.gnb>li>a').eq(index).next().css({backgroundColor:'#c63d4e'})
$('.gnb>li>ul>li>a').css({color:'#767676'})
$(this).next().find('a').css({color:'#fff'})
})//mouseenter
$(this).on('mouseleave blur',function(){
$('.gnb>li>a').eq(index).next().css({backgroundColor:'#fff'})
$(this).next().find('a').css({color:'#767676'})
})//mouseenter
})//each

$('.gnb>li>ul').each(function(index){
$(this).on('mouseenter focus',function(){
$('.gnb>li>ul').css({backgroundColor:'#fff'})
$(this).css({backgroundColor:'#c63d4e'})
$('.gnb>li>ul>li>a').css({color:'#767676'})
$(this).find('a').css({color:'#fff'})
})
})//each

$('.header').on('mouseleave blur',function(){
$('.gnbbg').stop().slideUp()
$('.gnb>li>ul').stop().slideUp()
})//blur

$('.visual>a').hide()
$('.visual>a').first().show()
$('.box>ul>li>a').each(function(index){
var h3=$(this).attr('data-h3')
var p=$(this).attr('data-p')
$('.box>ul>li>a:eq(0)').css({background:'url(image/arrow.png)',width:136,zIndex:1,color:'#fff',border:'none',paddingRight:10})
$(this).on('click',function(){
$('.box>ul>li>a').css({background:'none',color:'#767676',width:126,
borderBottom:'1px solid #ddd',padding:0})
$(this).css({background:'url(image/arrow.png)',width:136,color:'#fff',border:'none',paddingRight:10})
$('.visual>a').hide()
$('.visual>a').eq(index).fadeIn(100)
$('.visual1 h3').html($(this).attr('data-h3'))
$('.visual1 p').html($(this).attr('data-p'))
return false
})
})//each

$('.gnb>li>ul>li>a').on('mouseenter focus',function(){
$(this).css({color:'#ffff99'})
})
$('.gnb>li>ul>li>a').on('mouseleave blur',function(){
$(this).css({color:'#fff'})
})
$('#select1>option').on('click',function(){
var src=$(this).val()
window.open(src)
})
$('#select2>option').on('click',function(){
var src=$(this).val()
window.open(src)
})


})//ready