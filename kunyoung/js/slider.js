$(function(){
		var width,auto
		var max=$('#slider>li').length
		var num=0
		$('<div id="pager"></div>').appendTo('.sliderwrap')
		
		for (var i=0;i<max ;i++ )
		{
			$('<a>'+i+'</a>').appendTo('#pager')
		}
		

		$(window).on('load',function(){
			width=$(this).width()
			$('#slider>li').width(width)
			$('#pager>a').eq(num).addClass('on')
		})//end 
				
		auto=setInterval(function(){
			if (num==max-1)
			{
				num=-1
			}
			num++
			$('#slider').stop().animate({left:'-='+width},800,function(){
				$('#pager>a').removeClass('on')
				$('#pager>a').eq(num).addClass('on')
				$('#slider>li').first().appendTo('#slider')
				$('#slider').css('left',0)
			})
		},8000)	
	
})