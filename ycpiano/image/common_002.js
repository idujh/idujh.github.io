(function($){
	var filter = "win16|win32|win64|mac|macintel";
	 
	/*if ( navigator.platform  ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { // 모바일
			
		} else { //PC
			
		};
	};*/
	// Gnb 모션
	var gnbAnimate = (function(){
		var $wrap = $("#header"),
			$header = $wrap.find(".header_inner"),
			$leftBg = $wrap.find(".left_bg"),
			$rightBg = $wrap.find(".right_bg"),
			time = 300,
			status = true;

		return {
			open: function(){
				if(status){
					$leftBg.not().animate({width:400},time)
					$rightBg.not().animate({width:182},time)
					$wrap.addClass("on").find(".header_inner").not().animate({"height":293},time)
					$.when($leftBg,$rightBg,$header).then(function(){ status = false })
				}
			},
			close : function(){
				if(!status){
					$leftBg.not().animate({width:0},time)
					$rightBg.not().animate({width:0},time)
					$header.not().animate({"height":54},time, function(){ $wrap.removeClass("on"); })
					$.when($leftBg,$rightBg,$header).then(function(){ status = true })
				}
			}
		}
	})();
	
	// Gnb event
	var $menu = $('#gnb'),
		$header = $('#header'),
		$content = $('#content'),
		$oneDepth = $menu.find('.one_depth > a')
		$menuViewBtn = $header.find('.all_view');
	if ( navigator.platform  ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { // 모바일
			$oneDepth.each(function(){
				var $self = $(this);
				$self.click(function(){
					var href = $self.attr('href')
					if( $self.hasClass('newsroom_nav') || $header.hasClass('on') ){ // 뉴스룸 || 메뉴가 펼쳐져 있을때
						location.href( href );
					}else{ 
						gnbAnimate.open();
					};
					return false;
				});
			});
		} else { //PC
			$menu.mouseenter(function(){ gnbAnimate.open() }).mouseleave(function(){ gnbAnimate.close() });
			$header.mouseleave(function(){ gnbAnimate.close() });
		};
	};
	//$menu.hover(function(){ gnbAnimate.open(); },function(){ gnbAnimate.close(); })
	$menuViewBtn.on('click',function(){
		$header.hasClass('on') ? gnbAnimate.close() : gnbAnimate.open();
		return false;
	})
	
	// 모바일 분기
	var $body = $('body');
	if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { // 모바일
		$body.addClass("mobile_body");
	} else { //PC
		$body.addClass("pc_body");
	};


	// 푸터 개열사 
	$('.affiliate_btn').click(function(e){
		if( $('.affiliate_wrap').hasClass('open') ){ //닫
			$('.affiliate_wrap').removeClass('open')
			$('.affiliate_pop').stop().animate({height:0},300)
		}else{
			$('.affiliate_wrap').addClass('open')
			$('.affiliate_pop').stop().animate({height:247},300)
		}
		return false;
	})
	
	// Snb fixed
	var $snb = $('.snb_nav');
	var $pageSpot = $('.page_spot')
	$('.snb_nav')[0] ? snbAnimate() : "";

	function snbAnimate(){
		$(window).scroll(function(){
			if($(window).scrollTop() > 341){
				$snb.addClass('fixed');
				$pageSpot.addClass('fixed');
			}else{
				$snb.removeClass('fixed');
				$pageSpot.removeClass('fixed');
			}
		})
	}

	
	
	//top 버튼
	(function(){
		var $topBtn = $('.scrollToTop')

		$(window).scroll(function(){
			$(this).scrollTop() > 50 ? $topBtn.fadeIn() : $topBtn.fadeOut()
		}).trigger('scroll');
		$topBtn.click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	})()

	// 팝업 
	$('.pop_open_btn').click(function(){
		var $target = $( $(this).attr('href') )
		$target.show();
		return false;
	})
	$('.pop_wrap').find('.close_btn').click(function(){
		var $target = $( $(this).attr('href') )
		$target.hide();
		return false;
	})
	
	// 3뎁스 탭
	function tabEvent(){
		var $wrap = $('.tabWrap'),
			$btns = $wrap.find('.tabList'),
			$btn = $btns.find('a'),
			$contents = $wrap.find('.tabContents'),
			$content = $contents.find('.tabContent')

		$btn.click(function(){
			var idx = $(this).parent('li').index();
			
			$(this).parent('li').addClass('on').siblings('li').removeClass('on');
			$content.eq(idx).addClass('on').siblings('.tabContent').removeClass('on');

			return false;

		})
	}
	tabEvent()
	

	/*
	//뉴스룸 팝업
	$('.newsroom_link').click(function(){
		$('.newsroom_pop').css('display','block')
		return false;
	})
	$('.newsroom_pop').find('.close_btn').click(function(){
		$('.newsroom_pop').css('display','none')
		return false;
	})*/
	$(window).load(function(){
		$(window).resize(function(){
			$('body').css({'min-height':$(window).height()+150})
		}).trigger('resize');
	
	});
	
	// 디자인 셀렉
	$.fn.dSelect = function(options) {
		var o = $.extend({}, options );
		this.each(function() {
			var $self = $(this),
				$default = $self.find(".default"),
				$list = $self.find("li"),
				$select = $self.find("select"),
				$option = $select.find("option");
			
			

			$default.text( $select.find("option:selected").text() )
			$self.click(function(){
				$(this).toggleClass("open")
			})

			$list.click(function(){
				var val = $(this).text(),
					idx = $(this).index();
				$default.text(val);
				$(this).addClass("on");
				$select.find("option").eq(idx).prop("selected", true).trigger("change");
			})
			$list.hover(function(){
				$list.removeClass("on")
			})
		});
	};
	if( $(".dSelect")[0] ){
		$(".dSelect").dSelect();
	}

	// 뉴스룸 마우스 오버
	function newsroomHover(){
		if ( navigator.platform  ) {
			if ( !(filter.indexOf( navigator.platform.toLowerCase() ) < 0) ) { // pc일때만 
				$(".newsroom").on("mouseenter",".newsroom_item",function(){
					$(this).find(".hover_slow").fadeIn(200)
				});
				$(".newsroom").on("mouseleave",".newsroom_item",function(){
					$(this).find(".hover_slow").fadeOut(200)
				});
			};
		};
	};
	if( $(".newsroom")[0] ){
		newsroomHover();
	};

	// placeholder
	function placeholder(){
		$(".placeholder_input").each(function(){
			var $self = $(this);
			var placeholder = $self.attr("placeholder");
			$self.attr("placeholder","");
			$self.css({color:"#b2b2b2"});

			$self.focusin(function(){
				if( $self.val() == placeholder ){
					$self.val("");
					$self.css({color:"#333"});
				};
			});
			$self.focusout(function(){
				if( $self.val() == ""){
					$self.val( placeholder );
					$self.css({color:"#b2b2b2"});
				};
			});
		});
	};
	placeholder();
	if( $(".placeholder_input")[0] ){
		placeholder();
	};

	$(window).on("orientationchange",function(){
		$(window).trigger("resize");
	});


	/*
	 * 날짜 변환 함수
	 */
	Date.prototype.format = function(f) {
	    if (!this.valueOf()) return " ";
	 
	    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	    var d = this;
	     
	    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
	        switch ($1) {
	            case "yyyy": return d.getFullYear();
	            case "yy": return (d.getFullYear() % 1000).zf(2);
	            case "MM": return (d.getMonth() + 1).zf(2);
	            case "dd": return d.getDate().zf(2);
	            case "E": return weekName[d.getDay()];
	            case "HH": return d.getHours().zf(2);
	            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
	            case "mm": return d.getMinutes().zf(2);
	            case "ss": return d.getSeconds().zf(2);
	            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
	            default: return $1;
	        }
	    });
	};
	 
	String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
	String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
	Number.prototype.zf = function(len){return this.toString().zf(len);};
	
	
})(jQuery)



function fileAdd(target,id,max){
	var $file = $(target), $fileInput = $file.find(".file_input"), fileCnt = 1;
	var max = max || 5 , id = id || "file";
	$file.on("click",".file_add",function(){
		if($fileInput.children("div").length < max){
			fileCnt++;
			var html = "<div class='file_area'><input type='file' name='"+id+"' id='file_"+ id + fileCnt +"' class='"+$file.find("input[type=file]").attr('class')+"'><label for='file_" + id + fileCnt + "'>파일선택</label> <button type='button' class='file_remove' title='첨부파일 삭제'>-</button><span>선택된 파일 없음</span></div>";
			$fileInput.append(html);
		};
	}).on("click",".file_remove",function(){
		if($fileInput.children("div").length > 1){
			fileCnt--;
			$(this).closest("div").remove();
		};
	}).on("change","input",function(e){
		if($(this).val().length){
			var fileNE = ["doc", "docx", "ppt", "pptx", "xls", "xlsx", "hwp", "pdf", "zip"];
			var selectFileNE = e.target.files[0].name.split(".").pop();
			var val = $(this).val().split("\\");
			if(fileNE.indexOf(selectFileNE) != -1){
				$(this).siblings("span").text(val.pop());
			}else{
				alert("첨부파일 확장자 확인을 부탁드립니다.");
				$(this).val("");
				$(this).siblings("span").text("선택된 파일 없음");
			};
		}else{
			$(this).siblings("span").text("선택된 파일 없음");
		};
	});
}

function fileAddEng(target,id,max){
	var $file = $(target), $fileInput = $file.find(".file_input"), fileCnt = 1;
	var max = max || 5 , id = id || "file";
	$file.on("click",".file_add",function(){
		if($fileInput.children("div").length < max){
			fileCnt++;
			var html = "<div class='file_area'><input type='file' name='"+id+"' id='file_"+ id + fileCnt +"' class='"+$file.find("input[type=file]").attr('class')+"'><label for='file_" + id + fileCnt + "'>Choose FIle</label> <button type='button' class='file_remove' title='첨부파일 삭제'>-</button><span>No file chosen</span></div>";
			$fileInput.append(html);
		};
	}).on("click",".file_remove",function(){
		if($fileInput.children("div").length > 1){
			fileCnt--;
			$(this).closest("div").remove();
		};
	}).on("change","input",function(e){
		if($(this).val().length){
			var fileNE = ["doc", "docx", "ppt", "pptx", "xls", "xlsx", "hwp", "pdf", "zip"];
			var selectFileNE = e.target.files[0].name.split(".").pop();
			var val = $(this).val().split("\\");
			if(fileNE.indexOf(selectFileNE) != -1){
				$(this).siblings("span").text(val.pop());
			}else{
				alert("첨부파일 확장자 확인을 부탁드립니다.");
				$(this).val("");
				$(this).siblings("span").text("No file chosen");
			};
		}else{
			$(this).siblings("span").text("No file chosen");
		};
	});
}

function searchList(){
	$('#page').val(1);
	$('form').submit();
};