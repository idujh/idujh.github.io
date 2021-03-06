$(document).ready(function(){
var audio1=new Audio('music/music1.mp3')
var audio3=new Audio('music/music3.mp3')
var total=$('.section').length
$('.page2_over a').css({scale:0})
$('.page3_over a').css({scale:0})
$('.w3c').css({scale:0})
$('.my').draggable()
$('.my').resizable()
$('.view').draggable()

        $('#fullpage').fullpage({
            anchors: ['firstpage', 'secondpage', '3rdpage', '4thpage', '5thpage','6thpage'],
            menu: '#menu',
            css3: true,
			navigation: true,
			navigationPosition:'left',
            scrollingSpeed: 1000,
			afterLoad:function(anchorLink,index){
            if (index==1)
            {
				$('#page1 h2').stop().animate({left:0,opacity:1},1000)
				$('#page1').particleground('start')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
                $('.pager').html($('#menu>li>a').eq(0).attr('data-num')+'/'+total)
				var voice1=$('#menu>li>a').eq(0).html()
				responsiveVoice.speak(voice1,"Korean Female");	
            }
            else if (index==2)
            {
				$('#page2 h2').stop().animate({left:0,opacity:1},1000)
				$('.typer2').stop().animate({left:0},600,'easeOutBack')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
				var voice1=$('#menu>li>a').eq(1).html()
				responsiveVoice.speak(voice1,"Korean Female");
				$('.w3c').stop().animate({scale:1,opacity:1,left:100},1000)
$('.pager').html($('#menu>li>a').eq(1).attr('data-num')+'/'+total)
$('.progress').fadeIn()
$('.progress1').LineProgressbar({ 
  percentage: 100,
  duration: 1000,
  fillBackgroundColor: '#3498db', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
});
$('.progress2').LineProgressbar({ 
  percentage: 100,
  duration: 2000,
  fillBackgroundColor: '#d74653', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
}); 
$('.progress3').LineProgressbar({ 
  percentage: 100,
  duration: 3000,
  fillBackgroundColor: '#dec442', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
});
$('.page2_over a').each(function(index){
$('.page2_over a').eq(index).delay(index*400).animate({scale:1},400,'easeOutElastic',function(){
$(this).hide('explode',1000,function(){
$(this).show('bounce',1200)
})
})
})
            }
			else if (index==3)
			{
				$('#page3 h2').stop().animate({left:0,opacity:1},1000)
				$('.typer3').stop().animate({left:0},600,'easeOutBack')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
				$('.pager').html($('#menu>li>a').eq(2).attr('data-num')+'/'+total)
				var voice1=$('#menu>li>a').eq(2).html()
				responsiveVoice.speak(voice1,"Korean Female");
				$('.w3c').stop().animate({scale:1,opacity:1,left:100},1000)
$('.progress').fadeIn()
$('.progress1').LineProgressbar({ 
  percentage: 100,
  duration: 1000,
  fillBackgroundColor: '#3498db', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
});
$('.progress2').LineProgressbar({ 
  percentage: 100,
  duration: 2000,
  fillBackgroundColor: '#d74653', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
}); 
$('.progress3').LineProgressbar({ 
  percentage: 100,
  duration: 3000,
  fillBackgroundColor: '#dec442', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
});
$('.page3_over a').each(function(index){
$('.page3_over a').eq(index).delay(index*400).animate({scale:1},400,'easeOutElastic',function(){
$(this).hide('clip',1000,function(){
$(this).show('drop',1200)
})
})
})
			}
			else if (index==4)
			{
				$('#page4 h2').stop().animate({left:0,opacity:1},1000)
				$('.typer4').stop().animate({left:0},600,'easeOutBack')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
				$('.pager').html($('#menu>li>a').eq(3).attr('data-num')+'/'+total)
				var voice1=$('#menu>li>a').eq(3).html()
				responsiveVoice.speak(voice1,"Korean Female");
				$('#page4').snowfall({
flakeColor:'#fff',
flakeCount:6,
minSize:8,
maxSize:14,
round:true,
flakeIndex:1,
minSpeed:1,
maxSpeed:1,
image:'image/snow.png'
})//snowfall
$('.progress').fadeIn()
$('.progress4').LineProgressbar({ 
  percentage: 70,
  duration: 1000,
  fillBackgroundColor: '#1c6391', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
}); 
			}
			else if (index==5)
			{
				$('#page5 h2').stop().animate({left:0,opacity:1},1000)
				$('.typer5').stop().animate({left:0},600,'easeOutBack')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
				$('.pager').html($('#menu>li>a').eq(4).attr('data-num')+'/'+total)
				var voice1=$('#menu>li>a').eq(4).html()
				responsiveVoice.speak(voice1,"Korean Female");
				$('.progress5').LineProgressbar({ 
  percentage: 70,
  duration: 1000,
  fillBackgroundColor: '#1c6391', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
});
$('.progress').fadeIn()
$('.progress6').LineProgressbar({ 
  percentage: 70,
  duration: 2000,
  fillBackgroundColor: '#ffa724', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
}); 
			}
			else if (index==6)
			{
                $('.typer6').stop().animate({left:0},600,'easeOutBack')
				$('.flowerbg2').stop().animate({top:0,opacity:1},800,'easeOutBounce')
				$('.pager').html($('#menu>li>a').eq(5).attr('data-num')+'/'+total)
				var voice1=$('#menu>li>a').eq(5).html()
				responsiveVoice.speak(voice1,"Korean Female");
				var voice6=setTimeout(function(){
				responsiveVoice.speak('하단 이미지를 클릭하면 상단컨테츠로 변경후 재생됩니다',"Korean Female");
				$('.thumbnail>a').stop().animate({scale:1.1,rotate:'+=4deg'},1000,'easeOutElastic',function(){
				$(this).delay(1000).animate({scale:1,rotate:0},1000)
				})
				$('.embed-container iframe').delay(1600).animate({scale:1.1,rotate:'+=4deg'},1000,'easeOutElastic',function(){
				$(this).delay(1000).animate({scale:1,rotate:0},1000)
				})
				},2000)
					$('#page6').snowfall({
flakeColor:'#fff',
flakeCount:3,
minSize:12,
maxSize:18,
round:true,
flakeIndex:1,
minSpeed:1,
maxSpeed:1,
image:'image/blur.png'
})//snowfall
$('.progress').fadeIn()
$('.progress7').LineProgressbar({ 
  percentage: 80,
  duration: 2000,
  fillBackgroundColor: '#302863', 
  backgroundColor: '#272727', 
  radius: '0px', 
  height: '20px', 
  width: '100%' 
}); 
            }
			},//Load

			onLeave:function(index,nextindex,direction){
            if (index==1)
            {
                audio1.play();
				$('#page1 h2').css({left:200,opacity:0})
				$('#page1').particleground('pause')
				$('.flowerbg2').css({top:-100,opacity:0})
            }
			else if (index==2)
			{
                audio3.play();
				$('#page2 h2').css({left:200,opacity:0})
				$('.typer2').css({left:'-100%'})
				$('.flowerbg2').css({top:-100,opacity:0})
				$('.progress').hide()
				$('.page2_over a').css({scale:0})
				$('.w3c').css({scale:0,opacity:0,left:-100})
			}
			else if (index==3)
			{
                audio1.play();
				$('#page3 h2').css({left:200,opacity:0})
				$('.typer3').css({left:'-100%'})
				$('.flowerbg2').css({top:-100,opacity:0})
				$('.progress').hide()
				$('.page3_over a').css({scale:0})
				$('.w3c').css({scale:0,opacity:0,left:-100})
			}
			else if (index==4)
			{
                audio3.play();
				$('#page4 h2').css({left:200,opacity:0})
				$('.typer4').css({left:'-100%'})
				$('#page4').snowfall('clear')
				$('.flowerbg2').css({top:-100,opacity:0})
				$('.progress').hide()
			}
			else if (index==5)
			{
                audio1.play();
				$('#page5 h2').css({left:200,opacity:0})
				$('.typer5').css({left:'-100%'})
				$('.flowerbg2').css({top:-100,opacity:0})
				$('.progress').hide()
			}
			else if (index==6)
			{
                audio3.play();
				$('#page6').snowfall('clear')
				$('.typer6').css({left:'-100%'})
				$('.flowerbg2').css({top:-100,opacity:0})
				$('.progress').hide()
				var voice6=setTimeout(function(){
				responsiveVoice.speak('하단 이미지를 클릭하면 상단컨테츠로 변경후 재생됩니다',"Korean Female");
				$('.thumbnail>a').stop().animate({scale:1.1,rotate:'+=4deg'},1000,'easeOutElastic',function(){
				$(this).delay(1000).animate({scale:1,rotate:0},1000)
				})
				$('.embed-container iframe').delay(1600).animate({scale:1.1,rotate:'+=4deg'},1000,'easeOutElastic',function(){
				$(this).delay(1000).animate({scale:1,rotate:0},1000)
				})
				},3000)
				clearTimeout(voice6);
			}
			}//Leave
        });//fullpage
		

$('#menu>li>a').each(function(index){
$('#header').css({position:'relative',left:'50%',top:0})
$('#header').stop().animate({left:0,top:0},800,'easeInOutBack',function(){
$('#header').css({position:'fixed',left:0,top:0})
})
$('#menu>li>a').css({left:100,opacity:0})
$('#menu>li>a').eq(index).stop().delay(index*300).animate({opacity:1,left:0},400,'easeInOutBack')
})

$('<div class="view_text">').appendTo('.view_list>li>a')
$('.view_list>li>a').each(function(index){
var alt=$('.view_list>li>a').eq(index).find('img').attr('alt')
$('.view_text').eq(index).html(alt)
$(this).on('mouseenter focus',function(){
$('.pinkbd').stop().animate({left:$(this).attr('data-left'),top:$(this).attr('data-top'),opacity:1}
,400,function(){
$('.view_list>li>a').find('img').css({opacity:0.3})
$('.view_list>li>a').eq(index).find('img').css({opacity:1})
$('.view_text').show()
$('.view_text').eq(index).hide()
})
})//enter
$(this).on({
click:function(){
var voice_alt=$(this).find('img').attr('alt')
responsiveVoice.speak(voice_alt,"Korean Female");
}
})//on
})//each

var viewnow=0
var viewtotal=$('.view_list>li>a').length
var viewloop=setInterval(function(){
if (viewnow==viewtotal)
{
	viewnow=0
}
viewnow++
$('.pinkbd').stop().animate({left:$('.moving'+viewnow).attr('data-left')
,top:$('.moving'+viewnow).attr('data-top'),opacity:1}
,400,function(){
$('.view_list>li>a').find('img').css({opacity:0.3})
$('.moving'+viewnow).find('img').css({opacity:1})
$('.view_text').show()
$('.moving'+viewnow).find('.view_text').hide()
})

},4000)

$('.scaleup').on('click',function(){
$('.view').stop().animate({scale:'+=0.2'},200);
return false;
})
$('.scaledown').on('click',function(){
$('.view').stop().animate({scale:'-=0.2'},200);
return false;
})
$('.view').on('mouseenter focus',function(){
clearInterval(viewloop)
})

$('.view').on('mouseleave blur',function(){
viewloop=setInterval(function(){
if (viewnow==viewtotal)
{
	viewnow=0
}
viewnow++
$('.pinkbd').stop().animate({left:$('.moving'+viewnow).attr('data-left')
,top:$('.moving'+viewnow).attr('data-top'),opacity:1}
,400,function(){
$('.view_list>li>a').find('img').css({opacity:0.3})
$('.moving'+viewnow).find('img').css({opacity:1})
$('.view_text').show()
$('.moving'+viewnow).find('.view_text').hide()
})

},4000)
})

$('.thumbnail>a').each(function(index){
$('<div class="thumbnail_over"></div>').appendTo($(this))
var alt=$(this).find('img').attr('alt')
$('<p class="over_text1">'+alt+'<p>').appendTo($(this).find('.thumbnail_over'))
$('<p class="over_text2">[[ Now_Play ]]</p>').prependTo($(this).find('.thumbnail_over'))
$('<p class="over_text3"><img src="image/text1_'+(index+1)+'.png"></p>').appendTo($(this).find('.thumbnail_over'))
$('.over_text').css({opacity:0})
$(this).on('click',function(){
$('.embed-container>iframe').attr({src:$(this).attr('data-title')})
$('.thumbnail>a>img').css({opacity:1})
$('.thumbnail>a>img').eq(index).css({opacity:0.2})
$('.thumbnail a').css({backgroundColor:'none'})
$(this).css({backgroundColor:'#000'})
$('.over_text1').show()
$('.over_text2').hide()
$('.over_text1').eq(index).hide()
$('.over_text2').eq(index).show()
$('.over_text3').css({opacity:0})
$('.over_text3').eq(index).stop().animate({left:0,opacity:1},'fast')
return false
})//click
})//each

$('.ov').each(function(index){
$('<div class="section_over"></div>').appendTo($(this))
$('.section_over').html('<span>+</span> Detail View')
$('.section_over').each(function(index){
$('<div class="section_over_stroke">').appendTo($(this))
})
$('.section_over_stroke').css({left:'50%',width:0})
$(this).on('mouseenter focus',function(){
$(this).find('.section_over').fadeIn(function(){
$('.section_over').css({color:'#f87976',boxShadow:'0 0 10px #ffd9d9'})
$('.section_over').find('span').css({borderColor:'#f87976'})
$(this).find('.section_over_stroke').stop().animate({left:0,width:'100%'})
})
})
$(this).on('mouseleave blur',function(){
$('.section_over').css({color:'#fff',boxShadow:'none'})
$('.section_over').find('span').css({borderColor:'#fff'})
$(this).find('.section_over_stroke').css({left:'50%',width:0})
$(this).find('.section_over').hide()
})
$(this).on('click',function(){
responsiveVoice.speak('새창으로 이동',"Korean Female");
})
})
$('.page3_over>a').each(function(index){
$(this).on('mouseenter focus',function(){
$('.page3_over>a').css({border:'2px solid #ddd'})
$('.page3_over>a').find('.bdleft').css({height:0}).hide()
$('.page3_over>a').find('.bdright').css({height:0}).hide()
$('.page3_over>a').find('.bdbottom').css({width:0}).hide()
$('.page3_over>a').find('.bdtop').css({width:0}).hide()
$(this).css({border:'none'})
$(this).find('.bdtop').stop().animate({width:'100%'},200).show()
$(this).find('.bdright').stop().delay(200).animate({height:'100%'},200).show()
$(this).find('.bdbottom').stop().delay(400).animate({width:'100%'},200).show()
$(this).find('.bdleft').stop().delay(600).animate({height:'100%'},200).show()
$('.page3_over>a>img').css({opacity:1})
$('.page3_over>a>img').stop().transition({scale:1},400,'snap')
$(this).find('img').css({opacity:0.1})
$(this).find('img').stop().transition({scale:1.2},400,'snap')
$('.page3_over>a').css({background:'none'})
$(this).css({background:'#134859 url(image/chracter.png) 100% 0 no-repeat',backgroundSize:'25%'})
$('.page3_over_text1').stop().animate({top:0,opacity:1},400)
$(this).find('.page3_over_text1').stop().animate({top:-20,opacity:0},400)
$('.page3_over_text2').stop().animate({top:100,opacity:0},400)
$(this).find('.page3_over_text2').stop().animate({top:0,opacity:1},400)
})
$(this).on('click',function(){
responsiveVoice.speak('새창으로 이동',"Korean Female")
})
})


$('.page2_over>a').each(function(index){
$(this).on('mouseenter focus',function(){
$('.page2_over>a').css({border:'2px solid #ddd'})
$('.page2_over>a').find('.bdleft').css({height:0}).hide()
$('.page2_over>a').find('.bdright').css({height:0}).hide()
$('.page2_over>a').find('.bdbottom').css({width:0}).hide()
$('.page2_over>a').find('.bdtop').css({width:0}).hide()
$(this).css({border:'none'})
$(this).find('.bdtop').stop().animate({width:'100%'},200).show()
$(this).find('.bdright').stop().delay(200).animate({height:'100%'},200).show()
$(this).find('.bdbottom').stop().delay(400).animate({width:'100%'},200).show()
$(this).find('.bdleft').stop().delay(600).animate({height:'100%'},200).show()
$('.page2_over>a>img').css({opacity:1})
$('.page2_over>a>img').stop().transition({scale:1},400,'snap')
$(this).find('img').css({opacity:0.1})
$(this).find('img').stop().transition({scale:1.2},400,'snap')
$('.page2_over>a').css({background:'none'})
$(this).css({background:'#134859 url(image/chracter.png) 100% 0 no-repeat',backgroundSize:'25%'})
$('.page2_over_text1').stop().animate({top:0,opacity:1},400)
$(this).find('.page2_over_text1').stop().animate({top:-20,opacity:0},400)
$('.page2_over_text2').stop().animate({top:100,opacity:0},400)
$(this).find('.page2_over_text2').stop().animate({top:0,opacity:1},400)
})
$(this).on('click',function(){
responsiveVoice.speak('새창으로 이동',"Korean Female")
})
})

// var volume_off=$('.video-foreground iframe').attr('src')
// $('.volume_off').on('click',function(){
// $('.video-foreground iframe').attr({src:volume_off.replace('mute=0','mute=1')})
// return false
// })


/*  $('.s1').hide()
$('.my,#page1 .move,#page1 .ov,#page1 h2').css({scale:0})
var movie1=setTimeout(function(){
audio1.play()
$('.move').stop().animate({scale:1},1000,'easeInOutElastic',function(){
audio3.play()
$('.section h2').stop().animate({scale:1},1000,'easeOutElastic',function(){
audio1.play()
$('.ov').stop().animate({scale:1},1000,'easeOutElastic',function(){
audio3.play()
$('.my').stop().animate({scale:1},1000,'easeOutElastic',function(){
responsiveVoice.speak('포트폴리오 방문을 환영합니다',"Korean Female")
setTimeout(function(){
responsiveVoice.speak('오른쪽메뉴를 클릭하면 이벤트가 진행됩니다',"Korean Female")
$('.list_m').css({border:'3px solid red',backgroundColor:'#333'})
var listw=$('.list_m').width()/2
var width=$(window).width()/2
$('.list_m').stop().animate({left:-width+listw},function(){
$(this).delay(3500).animate({left:0,top:0})
})
setTimeout(function(){
$('.list_m').css({border:'none',borderRight:'1px solid #bebebe',borderLeft:'1px solid #bebebe',backgroundColor:'transparent'})
},5000)
},3000)
})
})
})
})

$('.s1').show()
$('.video-background').fadeOut()
$('#page1').css({background:'url(image/subtle_carbon.png) 0 0 repeat'})
$('.section h2').css({display:'block'})
$('#firstimg1').css({display:'block'})
$('.my').show()
$('.move').show()
$('.skip').hide()
var volume_off=$('.video-foreground iframe').attr('src')
$('.video-foreground iframe').attr({src:volume_off.replace('mute=0','mute=1')})
$('#page1').particleground({
dotColor:'#ddd',
lineColor:'#0f0f0f',
density:10000,
particleRadius:3,
lineWidth:2,
parallaxMultiplier:10
})
},45000) */


$('.my,#page1 .move,#page1 .ov,#page1 h2').css({scale:0})
$(window).on('load',function(){
audio1.play();
$('.move').stop().animate({scale:1},1000,'easeInOutElastic',function(){
audio3.play();
$('.section h2').stop().animate({scale:1},1000,'easeOutElastic',function(){
audio1.play();
$('.ov').stop().animate({scale:1},1000,'easeOutElastic',function(){
audio3.play();
$('.my').stop().animate({scale:1},1000,'easeOutElastic',function(){
responsiveVoice.speak('포트폴리오 방문을 환영합니다',"Korean Female")
setTimeout(function(){
responsiveVoice.speak('오른쪽메뉴를 클릭하면 이벤트가 진행됩니다',"Korean Female")
$('.list_m').css({border:'3px solid red',backgroundColor:'#333'})
var listw=$('.list_m').width()/2
var width=$(window).width()/2
$('.list_m').stop().animate({left:-width+listw},function(){
$(this).delay(3500).animate({left:0,top:0})
})
setTimeout(function(){
$('.list_m').css({border:'none',borderRight:'1px solid #bebebe',borderLeft:'1px solid #bebebe',backgroundColor:'transparent'})
},5000)
},3000)
})
})
})
})

$('.s1').show()
$('.video-background').fadeOut()
$('#page1').css({background:'url(image/subtle_carbon.png) 0 0 repeat'})
$('.section h2').css({display:'block'})
$('#firstimg1').css({display:'block'})
$('.my').show()
$('.move').show()
$('.skip').hide()
// var volume_off=$('.video-foreground iframe').attr('src')
// $('.video-foreground iframe').attr({src:volume_off.replace('mute=0','mute=1')})
// clearTimeout(movie1)
$('#page1').particleground({
dotColor:'#ddd',
lineColor:'#0f0f0f',
density:10000,
particleRadius:3,
lineWidth:2,
parallaxMultiplier:10,
})
})


setInterval(function(){
$('.scroll').stop().animate({bottom:10,opacity:1},800,function(){
$('.scroll').stop().animate({bottom:0,opacity:0},800)
})
},2000)

/* $('.move').textillate({
loop:true,
in:{effect:'bounceIn',
delay:100,
delayScale:1.5,
},
out:{effect:'rollOut',
delay:100,
delayScale:1.5,
}
}) */


$('.list_m>li>a').each(function(index){
$('.list_m>li>a').eq(0).find('span').html('-')
$('.list_m>li>a').eq(0).next().show()
$('#tab1').show()
var text=$('.list_m>li>a:first').next().find('a').html()
var text1=$('.list_m>li>a:first').html()
$('.charactertext').html(text1+'<br />'+text)
var text2=$(this).next().find('a').html()
$(this).on('click',function(){
audio1.play()
$(this).effect('highlight')
$('.click').html($(this).attr('data-title')+'/'+text2)
$('.click').css({marginLeft:-$('.click').width()/2})
$('.click').css({top:0,opacity:0,scale:1})
$('.click').stop().animate({opacity:1,top:'50%'},1200,'easeOutElastic',function(){
$('.click').stop().animate({scale:3,opacity:0},1200,function(){
$('.click').css({top:0,opacity:0,scale:1})
})
})

$('.character').find('img').attr({src:'image/ch2.png'})
$('.character').stop().animate({scale:0.8},400)
$('.charactertext').stop().animate({scale:0.1,left:-20},400,function(){
$('.character').stop().animate({scale:1},400)
$('.character').find('img').attr({src:'image/ch1.png'})
$('.charactertext').stop().animate({scale:1,left:-70},400,function(){
var color=['#bc79ff','#ffb693','#ffff8c','#ff80ff']
$('.charactertext').css({color:color[index]})
})
})
$('.charactertext').html($(this).attr('data-title')+'-<br />'+text2)

var src=$(this).find('span').html()
if (src=='+')
{
$('.tab>ul>li>a').css({left:0,opacity:1})
$('.list_m>li>ul').hide()
$('.tab').hide()
$('.list_m>li>a span').html('+')
$('.list_m>li>ul>li>a').removeClass('on')
$(this).next().find('a').first().addClass('on')
$(this).next().show()
$(this).next().next().show()
$(this).find('span').html('-')
$('.click').html($(this).attr('data-title')+'-'+text2)
$('.click').css({marginLeft:-$('.click').width()/2})
}else{
$(this).next().hide()
$('.tab').hide()
$(this).find('span').html('+')
$('.charactertext').html($(this).attr('data-title'))
$('.click').html($(this).attr('data-title'))
$('.click').css({marginLeft:-$('.click').width()/2})
}
})
})
$('.list_m>li>ul>li>a').each(function(index){
$(this).on('click',function(){
var text=$(this).html()
var text1=$(this).parent().parent().prev().html()
audio3.play()
$('.click').html(text1+text)
$('.click').css({marginLeft:-$('.click').width()/2})
$('.click').css({top:0,opacity:0,scale:1})
$('.click').stop().animate({opacity:1,top:'50%'},1200,'easeOutElastic',function(){
$('.click').stop().animate({scale:3,opacity:0},1200,function(){
$('.click').css({top:0,opacity:0,scale:1})
})
})
$('.character').find('img').attr({src:'image/ch2.png'})
$('.character').stop().animate({scale:0.8},400)
$('.charactertext').stop().animate({scale:0.1,left:-20},400,function(){
$('.character').stop().animate({scale:1},400)
$('.character').find('img').attr({src:'image/ch1.png'})
$('.charactertext').stop().animate({scale:1,left:-70},400,function(){
$('.charactertext').html(text1+'<br />'+text)
})
})
$('.tab').hide()
$('.tab').eq(index).show()
$('.list_m>li>ul>li>a').removeClass('on')
$(this).addClass('on')
$('.tab').eq(index).find('a').each(function(index){
$('.tab>ul>li>a').css({left:100,opacity:0})
$(this).stop().delay(index*400).animate({opacity:1,left:0},400,'easeOutBounce')
})
})
})

$('.my h3').rainbow({	
	colors: [
		'#FF0000',
		'#f26522',
		'#fff200',
		'#00a651',
		'#28abe2',
		'#2e3192',
		'#6868ff'
	],
	animate: true,
	animateInterval: 100,
	pad: false,
	pauseLength: 100,
});

				$('.typer2').typer({
				strings:['01.MUSICISLAND : 시원한 배경영상, 이미지, 컨셉에 맞는 사운드 가 독특한 MUSICISLAND','02.PIZZAHUT : PIZZAHUT 의 정적인틀에서 벗어나, 재코딩하여 좀더 동적인 메인페이지로 리뉴얼.','03:CELLTRION : 다양한 애니메이션으로 구성된 CELLTRION.','04.CLEAR : 창작 및 제작하였으며, 총작업기간 약 20일 가량 소요.','CLEAR : 메인1 서브5 구성되어 있으며 이미지와 텍스트 아이콘은 검색을 통해 입수.','※ 공통사항 (main1) 작업의 경우 서브링크는 해당사이트로 연결'
				],
				typeSpeed: 200, 
                backspaceSpeed: 20, 
                backspaceDelay: 800, 
                repeatDelay: 10000, 
                repeat: true, 
                autoStart: true,
                startDelay: 10000, 
				})
				$('.typer3').typer({
				strings:['01.삼성디스플레이 : 메인작업 - 상단메뉴 이벤트 및 메인이미지 스케일 효과 추가.','02.건영건설 : 컨셉 - 1PX 의 오차도 없이 유사하게 제작하는것에 주력',
				'메인1 서브5 구성되어 있으며 이미지와, 텍스트, 아이콘은 해당사이트에서 입수.',
				'03.현대모터스튜디오 : 메인페이지 작업 컨셉은 위와 동일','04.XID : 웹 에이전시 XID 메인 리뉴얼','05.HAATZ : 페이저기능 및 텍스트 이벤트 추가','※ 공통사항 (main1) 작업의 경우 서브링크는 해당사이트로 연결'],
				typeSpeed: 200, 
                backspaceSpeed: 20, 
                backspaceDelay: 800, 
                repeatDelay: 10000, 
                repeat: true, 
                autoStart: true,
                startDelay: 10000, 
				})
				$('.typer4').typer({
				strings:['Photoshop 을 활용한 이벤트 작업'],
				typeSpeed: 200, 
                backspaceSpeed: 20, 
                backspaceDelay: 800, 
                repeatDelay: 20000, 
                repeat: true, 
                autoStart: true,
                startDelay: 20000, 
				})
				$('.typer5').typer({
				strings:['Illustrator, Photoshop 을 활용하여 약1달간 진행한 BI/CI 프로젝트'],
				typeSpeed: 200, 
                backspaceSpeed: 20, 
                backspaceDelay: 800, 
                repeatDelay: 20000, 
                repeat: true, 
                autoStart: true,
                startDelay: 20000, 
				})
			    $('.typer6').typer({
				strings:['에프터 이펙트 플러그인 사용. BI/CI 를 음악과 함께 편집 & 렌더링 후 유튜브 업로드','html 문서내 iframe 속성을 불러와 src 속성값을 이용하여 on/off 컨트롤'],
				typeSpeed: 200, 
                backspaceSpeed: 20, 
                backspaceDelay: 800, 
                repeatDelay: 20000, 
                repeat: true, 
                autoStart: true,
                startDelay: 20000, 
				}) 
/* $(window).load(function(){
var intro=setTimeout(function(){
$('.introtext').find('a').each(function(index){
$(this).delay(index*8000).animate({top:0,opacity:1,scale:0.3},1200,'easeOutElastic',function(){
$(this).animate({scale:1,rotateX:'360deg'},600,'easeOutBounce',function(){
$(this).delay(4000).animate({opacity:0,left:'100%'},2000)
})
})
})
},6000)
}) */

$('#my #fp-nav ul li a').each(function(index){
var title=$('#menu>li>a').eq(index).attr('data-title')
$('<div class="title"></div>').appendTo($(this))
$(this).find('.title').html(title)
})



/* $('#line1').css({height:3,scale:1.2})
$('#line1').find('.pager').show()
$('#line1>.redline').stop().animate({width:'100%'},20000,function(){
$('#line1').find('.pager').hide()
$('#line1>.redline').css('width','0')
$('#line1').css({height:1,scale:1})
$('#page2').css({background:'url(image/bg.png) 0 0 no-repeat',backgroundSize:'cover'})
$('#line2').css({height:3,scale:1.2})
$('#line2').find('.pager').show()
$('#line2>.redline').stop().animate({width:'100%'},20000,function(){
$('#line2').find('.pager').hide()
$('#line2>.redline').css('width','0')
$('#line2').css({height:1,scale:1})
$('#page2').css({background:'url(image/rainbow-background-1149610_1920.jpg)'})
$('#line3').css({height:3,scale:1.2})
$('#line3').find('.pager').show()
$('#line3>.redline').stop().animate({width:'100%'},20000,function(){
$('#line3').find('.pager').hide()
$('#line3>.redline').css('width','0')
$('#line3').css({height:1,scale:1})
$('#page2').css({background:'url(image/rain-455120_1920.jpg)'})
$('#line4').css({height:3,scale:1.2})
$('#line4').find('.pager').show()
$('#line4>.redline').stop().animate({width:'100%'},20000,function(){
$('#line4').find('.pager').hide()
$('#line4>.redline').css('width','0')
$('#line4').css({height:1,scale:1})
$('#page2').css({background:'url(image/ux-788002_1920.jpg)'})
$('#line5').css({height:3,scale:1.2})
$('#line5').find('.pager').show()
$('#line5>.redline').stop().animate({width:'100%'},20000,function(){
$('#line5').find('.pager').hide()
$('#line5>.redline').css('width','0')
$('#line5').css({height:1,scale:1})
$('#page2').css({background:'url(image/graphic-2127026_1920.jpg)'})
$('#line6').css({height:3,scale:1.2})
$('#line6').find('.pager').show()
$('#line6>.redline').stop().animate({width:'100%'},20000,function(){
$('#line6').find('.pager').hide()
$('#line6>.redline').css('width','0')
$('#line6').css({height:1,scale:1})
$('#page2').css({background:'url(image/theater-2757802.jpg) 50% 0'})
$('#line7').css({height:3,scale:1.2})
$('#line7').find('.pager').show()
$('#line7>.redline').stop().animate({width:'100%'},20000,function(){
$('#line7').find('.pager').hide()
$('#line7>.redline').css('width','0')
$('#line7').css({height:1,scale:1})
$('#page2').css({background:'url(image/xmas-2928142.jpg) 50% 0'})
})
})
})
})
})
})
})

setInterval(function(){
$('#line1').css({height:3,scale:1.2})
$('#line1').find('.pager').show()
$('#line1>.redline').stop().animate({width:'100%'},20000,function(){
$('#line1').find('.pager').hide()
$('#line1>.redline').css('width','0')
$('#line1').css({height:1,scale:1})
$('#page2').css({background:'url(image/bg.png) 0 0 no-repeat',backgroundSize:'cover'})
$('#line2').css({height:3,scale:1.2})
$('#line2').find('.pager').show()
$('#line2>.redline').stop().animate({width:'100%'},20000,function(){
$('#line2').find('.pager').hide()
$('#line2>.redline').css('width','0')
$('#line2').css({height:1,scale:1})
$('#page2').css({background:'url(image/rainbow-background-1149610_1920.jpg)'})
$('#line3').css({height:3,scale:1.2})
$('#line3').find('.pager').show()
$('#line3>.redline').stop().animate({width:'100%'},20000,function(){
$('#line3').find('.pager').hide()
$('#line3>.redline').css('width','0')
$('#line3').css({height:1,scale:1})
$('#page2').css({background:'url(image/rain-455120_1920.jpg)'})
$('#line4').css({height:3,scale:1.2})
$('#line4').find('.pager').show()
$('#line4>.redline').stop().animate({width:'100%'},20000,function(){
$('#line4').find('.pager').hide()
$('#line4>.redline').css('width','0')
$('#line4').css({height:1,scale:1})
$('#page2').css({background:'url(image/ux-788002_1920.jpg)'})
$('#line5').css({height:3,scale:1.2})
$('#line5').find('.pager').show()
$('#line5>.redline').stop().animate({width:'100%'},20000,function(){
$('#line5').find('.pager').hide()
$('#line5>.redline').css('width','0')
$('#line5').css({height:1,scale:1})
$('#page2').css({background:'url(image/graphic-2127026_1920.jpg)'})
$('#line6').css({height:3,scale:1.2})
$('#line6').find('.pager').show()
$('#line6>.redline').stop().animate({width:'100%'},20000,function(){
$('#line6').find('.pager').hide()
$('#line6>.redline').css('width','0')
$('#line6').css({height:1,scale:1})
$('#page2').css({background:'url(image/theater-2757802.jpg) 50% 0'})
$('#line7').css({height:3,scale:1.2})
$('#line7').find('.pager').show()
$('#line7>.redline').stop().animate({width:'100%'},20000,function(){
$('#line7').find('.pager').hide()
$('#line7>.redline').css('width','0')
$('#line7').css({height:1,scale:1})
$('#page2').css({background:'url(image/xmas-2928142.jpg) 50% 0'})
})
})
})
})
})
})
})
},140000) */


$('body,html').on('mousemove',function(m){
$('.log').html('PAGEX : ' +m.pageX+ '<br />PAGEY : ' +m.pageY)
})

$('#fp-nav').css({marginTop:-114.5})
$('a').on('focus',function(){
$(this).blur()
})

//cursor
//$('body').css({cursor:'url(image/c.cur),default'})
//$('a,a:hover').css({cursor:'url(image/c1.cur),pointer'})


$('body').jpreLoader({
showSplash:true,
splashID:'#loader',
loaderVPos:'45%',
splashVPos:'40%',
autoclose:true,
showPercentage:true,
closeBtnText:'Start!'
})
$('#loader').html('LOADING..')

//반응형 페이지 fadeInOut
$('.p2a').first().find('.page2_over_text1').addClass('on0000')
$('#page2 .p2title').html($('.p2a').first().find('.page2_over_text1').html())
$('#page2 .p2title').stop().animate({left:0,width:'100%'},33333,'linear')
var p2now=1
var p2total=$('.p2a').length
var p2loop=setInterval(function(){
if (p2now==p2total)
{
p2now=0
}
p2now++
$('.page2_over_text1').removeClass('on0000')
$('.p2a'+p2now).find('.page2_over_text1').addClass('on0000')
$('#page2 .ov').css({opacity:0})
$('#page2 .ov:first()').stop().animate({opacity:1},1200)
$('#page2 .ov').attr({href:$('.p2a'+p2now).attr('href')})
$('#page2 .ov>img').attr({src:$('.p2a'+p2now).find('img').attr('src')})
$('#page2 .p2title').html($('.p2a'+p2now).find('.page2_over_text1').html())
$('#page2 .p2title').css({left:0,width:'20%'})
$('#page2 .p2title').stop().animate({left:0,width:'100%'},33333,'linear')
},33333)

$('.p2next').on('click',function(){
if (p2now==p2total)
{
p2now=0
}
p2now++
$('.page2_over_text1').removeClass('on0000')
$('.p2a'+p2now).find('.page2_over_text1').addClass('on0000')
var width=$('#page2 .ov:first()').width()
$('#page2 .ov:first()').stop().transition({opacity:1,perspective:width*2,rotateY:'-=90deg'},400,'linear',function(){
$('#page2 .ov>img').attr({src:$('.p2a'+p2now).find('img').attr('src')})
$('#page2 .ov').attr({href:$('.p2a'+p2now).attr('href')})
$('#page2 .p2title').html($('.p2a'+p2now).find('.page2_over_text1').html())
$(this).css({rotateY:'-270deg'})
$(this).stop().transition({opacity:1,perspective:width*2,rotateY:'-=90deg'},400,'linear')
})
return false
})
$('.p2prev').on('click',function(){
if (p2now==1)
{
p2now=p2total+1
}
p2now--
$('.page2_over_text1').removeClass('on0000')
$('.p2a'+p2now).find('.page2_over_text1').addClass('on0000')
var width=$('#page2 .ov:first()').width()
$('#page2 .ov:first()').stop().transition({opacity:1,perspective:width*2,rotateY:'+=90deg'},400,'linear',function(){
$('#page2 .ov>img').attr({src:$('.p2a'+p2now).find('img').attr('src')})
$('#page2 .ov').attr({href:$('.p2a'+p2now).attr('href')})
$('#page2 .p2title').html($('.p2a'+p2now).find('.page2_over_text1').html())
$(this).css({rotateY:'270deg'})
$(this).stop().transition({opacity:1,perspective:width*2,rotateY:'+=90deg'},400,'linear')
})
return false
})
//반응형 페이지 fadeInOut

//기업형 페이지 fadeInOut
$('.p3a').first().find('.page3_over_text1').addClass('on0000')
$('#page3 .p3title').stop().animate({left:0,width:'100%'},30000,'linear')
$('#page3 .p3title').html($('.p3a').first().find('.page3_over_text1').html())
var p3now=1
var p3total=$('.p3a').length
setInterval(function(){
if (p3now==p3total)
{
p3now=0
}
p3now++
$('.page3_over_text1').removeClass('on0000')
$('.p3a'+p3now).find('.page3_over_text1').addClass('on0000')
$('#page3 .ov').css({opacity:0})
$('#page3 .ov:first()').stop().animate({opacity:1},1200)
$('#page3 .ov').attr({href:$('.p3a'+p3now).attr('href')})
$('#page3 .ov>img').attr({src:$('.p3a'+p3now).find('img').attr('src')})
$('#page3 .p3title').html($('.p3a'+p3now).find('.page3_over_text1').html())
$('#page3 .p3title').css({left:0,width:'20%'})
$('#page3 .p3title').stop().animate({left:0,width:'100%'},30000,'linear')
},30000)

$('.p3next').on('click',function(){
if (p3now==p3total)
{
p3now=0
}
p3now++
$('.page3_over_text1').removeClass('on0000')
$('.p3a'+p3now).find('.page3_over_text1').addClass('on0000')
var width=$('#page3 .ov:first()').width()
$('#page3 .ov:first()').stop().transition({opacity:1,perspective:width*2,rotateX:'-=90deg'},400,'linear',function(){
$('#page3 .ov>img').attr({src:$('.p3a'+p3now).find('img').attr('src')})
$('#page3 .ov').attr({href:$('.p3a'+p3now).attr('href')})
$('#page3 .p3title').html($('.p3a'+p3now).find('.page3_over_text1').html())
$(this).css({rotateX:'-270deg'})
$(this).stop().transition({opacity:1,perspective:width*2,rotateX:'-=90deg'},400,'linear')
})
return false
})
$('.p3prev').on('click',function(){
if (p3now==1)
{
p3now=p3total+1
}
p3now--
$('.page3_over_text1').removeClass('on0000')
$('.p3a'+p3now).find('.page3_over_text1').addClass('on0000')
var width=$('#page3 .ov:first()').width()
$('#page3 .ov:first()').stop().transition({opacity:1,perspective:width*2,rotateX:'+=90deg'},400,'linear',function(){
$('#page3 .ov>img').attr({src:$('.p3a'+p3now).find('img').attr('src')})
$('#page3 .ov').attr({href:$('.p3a'+p3now).attr('href')})
$('#page3 .p3title').html($('.p3a'+p3now).find('.page3_over_text1').html())
$(this).css({rotateX:'270deg'})
$(this).stop().transition({opacity:1,perspective:width*2,rotateX:'+=90deg'},400,'linear')
})
return false
})
//기업형 페이지 fadeInOut

//nextprev enter leave Interval
var p2np=setInterval(function(){
$('.p2next').css({background:'url(image/next_on.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_on.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_on.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_on.png) 0 0 no-repeat'})
setTimeout(function(){
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
},400)
},20000)
$('.pnbtn').on('mouseleave blur',function(){
clearInterval(p2np)
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
p2np=setInterval(function(){
$('.p2next').css({background:'url(image/next_on.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_on.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_on.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_on.png) 0 0 no-repeat'})
setTimeout(function(){
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
},400)
},20000)
})
$('.p2next').on('mouseenter focus click',function(){
clearInterval(p2np)
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$(this).css({background:'url(image/next_on.png) 0 0 no-repeat'})
return false
})
$('.p3next').on('mouseenter focus click',function(){
clearInterval(p2np)
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$(this).css({background:'url(image/next_on.png) 0 0 no-repeat'})
return false
})
$('.p2prev').on('mouseenter focus click',function(){
clearInterval(p2np)
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$(this).css({background:'url(image/prev_on.png) 0 0 no-repeat'})
return false
})
$('.p3prev').on('mouseenter focus click',function(){
clearInterval(p2np)
$('.p2next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p3next').css({background:'url(image/next_off.png) 0 0 no-repeat'})
$('.p2prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$('.p3prev').css({background:'url(image/prev_off.png) 0 0 no-repeat'})
$(this).css({background:'url(image/prev_on.png) 0 0 no-repeat'})
return false
})
//nextprev enter leave Interval

/* $(window).on({
load:function(){
$('.count').fadeIn()
var count=10
var countlast=1
var countset=setInterval(function(){
if (count==countlast)
{
    $('.count').fadeOut(1000)
	$('.skip').fadeIn(2000)
	clearInterval(countset)
}
count--
$('.count>span').html(count)
},1000)
}
}) */





});//ready
