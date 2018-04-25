<?php 
include_once('./g5/common.php'); 
include_once(G5_LIB_PATH.'/latest.lib.php'); 
?> 
<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
<!-- saved from url=(0013)about:internet -->
<!-- IE 브라우져 최신버젼 렌더링 모드 오류를 최대로 줄여줄수 있음. -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Document</title>

<link rel="stylesheet" href="g5/skin/latest/basic/style.css">
<link rel="stylesheet" href="g5/css/default.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
$(document).ready(function(){

//헤더 스트립트
$('.header').on('mouseenter focus',function(){
$(this).css({backgroundColor:'#ddd'})
})
$('.header').on('mouseleave blur',function(){
$(this).css({backgroundColor:'green'})
})
//헤더 시크립트

//컨텐츠 스트립트
$('.content').on('mouseenter focus',function(){
$(this).css({backgroundColor:'#ddd'})
})
$('.content').on('mouseleave blur',function(){
$(this).css({backgroundColor:'green'})
})
//컨텐츠 시크립트

//푸터 스트립트
$('.footer').on('mouseenter focus',function(){
$(this).css({backgroundColor:'#ddd'})
})
$('.footer').on('mouseleave blur',function(){
$(this).css({backgroundColor:'green'})
})
//푸터 시크립트




})//ready
</script>

<style>
@import url(http://cdn.jsdelivr.net/font-notosans-kr/1.0.0-v1004/NotoSansKR-2350.css);
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'NotoSansKR',sans-serif;font-size:14px;color:#333;}
li{list-style:none;}
a{text-decoration:none;color:#333;}
img{vertical-align: middle;border:none;border:0;max-width:100%;}
a:hover{}
a:focus{}
.wrap{background-color:green;}
.header{padding:10px 0;text-align: center;border-bottom:1px solid #333;}
/* 헤더css */

.content{padding:50px 0;text-align: center;border-bottom:1px solid #333;}
.lat {
    position: relative;
    margin-bottom: 20px;
    overflow: hidden;
    border: 1px solid #c6cacc;
    background: #fff;
    width: 960px;
    margin: 0 auto;
    text-align: left;
}
.lat .lt_more {
    position: absolute;
    top: 11px;
    right: 0;
    display: block;
    width: 100%;
    line-height: 25px;
    color: #aaa;
    border-radius: 3px;
    text-align: right;
    padding-right: 10px;
}
/* 컨텐츠css */

.footer{padding:10px 0;text-align: center;}
/* 푸터css */

</style>
</head>
<body>
<div class='wrap'>
<div class='header'>
헤더
<ul>
	<li><a href="g5/html/sub1.html">메뉴1</a></li>
	<li><a href="g5/html/sub2.html">메뉴2</a></li>
	<li><a href="g5/html/sub3.html">메뉴3</a></li>
</ul>
</div><!-- header -->
<div class='content'>
<?php 
echo latest('basic', 'free', 5, 20,'...'); 
?> 
</div><!-- content -->
<div class='footer'>
푸터
</div><!-- footer -->
</div><!-- wrap -->
</body>
</html>
