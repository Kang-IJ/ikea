// JavaScript Document

$(function(){


//메뉴아이콘
	$('.menu_btn, .menu_btn_2').click(function(){
		$('p.x1, p.x1_2').toggleClass('active');
		$('p.x2, p.x2_2').toggleClass('active');
		$('p.x3, p.x3_2').toggleClass('active');
		$('.back').toggleClass('active');
		$('.menu').toggleClass('active');
	});
	
	
	
	$(".back").click(function(){
		$('p.x1, p.x1_2').removeClass('active');
		$('p.x2, p.x2_2').removeClass('active');
		$('p.x3, p.x3_2').removeClass('active');
		$('.back').removeClass('active');
		$('.menu').removeClass('active');
	});
	
	
	$(window).scroll(function(){  
      var num = $(this).scrollTop(); 
      if( num > 500 ){  
          $(".menu_btn").fadeOut(300);
          $(".menu_btn_2").fadeIn(200);
      }else{
          $(".menu_btn").fadeIn(200);
          $(".menu_btn_2").fadeOut(300);
      }
 });
 
 /*
$(".menu_btn").on("click",function(){
	$(".x1.active").css("background","#000");
	$(".x3.active").css("background","#000");
	});
*/
	
	

//오른쪽 메뉴들

	$(".login, .heart, .cart").click(function(){
		$(".menu2").animate({right:380+"px"},200);
		$(".back2").css("display","block");

	});
	$(".login_close, .heart_close, .cart_close, .back2").click(function(){
		$(".menu2").animate({right:0+"px"},200);
		$(".back2").css("display","none");

	});
	
//오른쪽 메뉴 서브

$(".gnb3>li").on("mouseover",function(){
	$(this).find(".sub").slideDown(200);
});
$(".gnb3>li").on("mouseleave",function(){
	$(this).find(".sub").slideUp(200);
});
/*
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 100 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").css("display","block");
      }else{
          $(".top").css("display","none");
      }
 });
*/

$(".content1>ul>li>a").on("click",function(){
  return false;
  });
  
			//top scroll 부드럽게 올라가기	
	$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
	   });
	});
	
    //top 스크롤 이벤트
	$(window).scroll(function(){  
      var num = $(this).scrollTop(); 
      if( num > 500 ){  
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });
 

 



    
    
});  //function end







