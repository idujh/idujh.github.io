$(function(){
	var $btn_menu = $("#btn_menu");
	var $btn_close = $("#btn_close");
	var $gnb_wrap = $("#gnb_wrap");
	var $gnb_bg = $("#gnb_bg");
	var $htmlBody = $("html, body");
	
	/* gnb */
	$btn_menu.click(function(){
		$gnb_wrap.addClass("on");
		$gnb_bg.addClass("on");
		$htmlBody.addClass("gnb_on");
	});
	$btn_close.click(function(){
		$gnb_wrap.removeClass("on").find("li").removeClass("on");
		$gnb_bg.removeClass("on");
		$htmlBody.removeClass("gnb_on");
	});
	$gnb_bg.click(function(){
		$gnb_wrap.removeClass("on").find("li").removeClass("on");
		$gnb_bg.removeClass("on");
		$htmlBody.removeClass("gnb_on");
	});
	$gnb_wrap.find("li").each(function(){
		$(this).click(function(){
			if(!$(this).is(".on")){
				$(this).addClass("on").siblings().removeClass("on");
			}else{
				$(this).removeClass("on");
			};
		});
	});
	
	/* top button */
	$("#btn_top").click(function(){
		$(window).scrollTop(0);
	});
	
	/* footer affiliate */
	$(".affiliate").find("h3").click(function(){
		if(!$(this).is(".on")){
			$(this).addClass("on");
			$(".affiliate_list").addClass("on");
		}else{
			$(this).removeClass("on");
			$(".affiliate_list").removeClass("on");
		}
	});
	
	/* tit_area */
	$(".tit_area").find("li").each(function(){
		var wrapSplit = $("#wrap").attr("class").split(" ");
		if($(this).attr("class") == wrapSplit[1]) $(this).addClass("on");
	});
	
	/* tab_area */
	$(".tab_area").find("li").each(function(index){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(".tab_cont").eq(index).addClass("on").siblings(".tab_cont").removeClass("on");
		});
	});
});

(function(){
	$.fn.extend({
		slidePlugin : function(opt){
			return this.each(function(){
				var $self = $(this);
				var $slideLi = $self.find(".slide_list").find("li");
				var $controller = $self.find(".controller").find("a");
				var $arrow = $self.find(".arrow");
				var $number = $self.find(".number");
				var $total = $self.find(".total");
				var cnt = 0;
				var nextCnt;
				var time = 400;
				
				function rightMove(){
					$slideLi.eq(cnt).animate({"left" : "-100%"}, time, function(){
						$(this).css("left", "100%");
					});
					if(cnt == $slideLi.length - 1){
						$slideLi.eq(0).stop().animate({"left" : 0}, time);
						$controller.eq(0).addClass("on").siblings().removeClass("on");
					}else{
						$slideLi.eq(cnt+1).stop().animate({"left" : 0}, time);
						$controller.eq(cnt+1).addClass("on").siblings().removeClass("on");
					};
					cnt++;
					if(cnt == $slideLi.length) cnt = 0;
					$number.text(cnt+1);
				};
				function leftMove(){
					$slideLi.eq(cnt).stop().animate({"left" : "100%"}, time);
					$slideLi.eq(cnt-1).css("left", "-100%").stop().animate({"left" : 0}, time);
					$controller.eq(cnt-1).addClass("on").siblings().removeClass("on");
					cnt--;
					if(cnt < 0) cnt = $slideLi.length - 1;
					$number.text(cnt+1);
				};
				$arrow.find(".prev").click(function(){
					leftMove();
				});
				$arrow.find(".next").click(function(){
					rightMove();
				});
				$controller.each(function(index){
					$(this).click(function(){
						nextCnt = index;
						$controller.eq(index).addClass("on").siblings().removeClass("on");
						if(cnt < nextCnt){
							$slideLi.eq(cnt).stop().animate({"left" : "-100%"}, time, function(){
								$(this).css("left", "100%");
							});
							$slideLi.eq(nextCnt).stop().animate({"left" : 0}, time);
							cnt = nextCnt;
						}else{
							$slideLi.eq(cnt).stop().animate({"left" : "100%"}, time);
							$slideLi.eq(nextCnt).css("left", "-100%").stop().animate({"left" : 0}, time);
							cnt = nextCnt;
						};
					});
				});
				$total.text($slideLi.length);
			});
		}
	});
})();