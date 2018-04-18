$(document).ready(function(){

	$('.guide>li>a').on({
	mouseenter:function(){
    $(this).css({backgroundColor:'#ffd2a6',border:'2px solid gray'})
	},
    mouseleave:function(){
	$(this).css({backgroundColor:'#eeeeee',border:0})
	},
	})//on

$('.gnb>li>a').each(function(index){
$(this).on({
mouseenter:function(){
$('.gnbwrap').slideDown(500)
$('.bg').show()
$('.next1,.prev1').hide()
$('.next,.prev').hide()
$('.gnbtitle').css({background:'none'})
$(this).parent().find('.gnbtitle').css({background:'url(image/bg_gnb'+(index+1)+'.jpg) 0 0 no-repeat'})
$('.gnbtitle').find('h2,p').hide()
$(this).parent().find('.gnbtitle').find('h2,p').show()
},
mouseleave:function(){
$('.gnbwrap').css({width:0})
},

})//on
})//each

$('.header').on({
mouseleave:function(){
	$('.gnbwrap').css({width:1200})
$('.gnbwrap').slideUp(500)
$('.bg').hide()
$('.next1,.prev1').show()
$('.next,.prev').show()

},
})//on

var now=1
var all=$('.visual>ul>li').length

$('<div class="page"></div>').prependTo('.visual')
$('.page').html('<b>'+now+'</b>/'+all)


$('.next').on('click',function(){
	$('.visual').stop().animate({left:'-=1200'},50,function(){
	$('.visual>ul>li').first().appendTo('.visual>ul')
    $('.visual').css({left:0})
	})//ani
if (now==all)
{
	now=0
}
now++
$('.page').html('<b>'+now+'</b>/'+all)
return false
})//click

$('.prev').on('click',function(){
$('.visual>ul>li').last().prependTo('.visual>ul')
$('.visual').css({left:-1200})
$('.visual').stop().animate({left:'+=1200'},50)
if (now==1)
{
	now=all+1
}
now--
$('.page').html('<b>'+now+'</b>/'+all)
return false
})//click

$('.quick>ul>li>a').on({
mouseenter:function(){
$(this).css({backgroundColor:'#ffd200'})
},
mouseleave:function(){
$(this).css({backgroundColor:'#fff'})
},
})//on

$('.sub>li>a').on({
mouseenter:function(){
$(this).css({color:'#ffd200',fontWeight:'bold'})
},
mouseleave:function(){
$(this).css({color:'black',fontWeight:'normal'})
},
})//on

$('.next1').on('click',function(){
$('.event>ul').stop().animate({left:'-=400'},50,function(){
$('.event>ul>li').first().appendTo('.event>ul')
$('.event>ul').css({left:0})
})//ani
return false
})//click

$('.prev1').on('click',function(){
$('.event>ul>li').last().prependTo('.event>ul')
$('.event>ul').css({left:-400})
$('.event>ul').stop().animate({left:'+=400'},50)
return false
})

var loop=setInterval(function(){$('.visual').stop().animate({left:'-=1200'},1000,function(){
	$('.visual>ul>li').first().appendTo('.visual>ul')
    $('.visual').css({left:0})
	})//ani
	if (now==all)
{
	now=0
}
now++
$('.page').html('<b>'+now+'</b>/'+all)
	$('.next,.prev').on({
	click:function(){clearInterval(loop)},
	})
},5000)//interval

var move=setInterval(function(){$('.event>ul').stop().animate({left:'-=400'},50,function(){
$('.event>ul>li').first().appendTo('.event>ul')
$('.event>ul').css({left:0})
})//ani
$('.next1,.prev1').on({
click:function(){clearInterval(move)},
})//click
},8000)//interval

})//ready