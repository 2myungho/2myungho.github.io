
$(function(){
    $('.nav-btn').click(function(e){
		e.preventDefault();
        if( $('#topbullet').css('display') == 'none'){
			$('.nav-btn').toggleClass('changed');
			$('#topbullet').slideDown('slow');
			$(".circleButton").css('background','#ff6b6b');
			$(".circleButton").hover(function(){
				$(".circleButton").css('background','#ff8787');
			},function(){
				$(".circleButton").css('background','#ff6b6b');
			})
        }else{
            $('#topbullet').slideUp('slow');
			$('.nav-btn').toggleClass('changed');
			$(".circleButton").css('background','#a6d14f');
			$(".circleButton").hover(function(){
				$(".circleButton").css('background','#c2f35f');
			},function(){
				$(".circleButton").css('background','#a6d14f');
			})
		}
    });

/*****************nav vedio************************/
//   function navHide(){
//     if($(window).width()>1200){
//       $("#nav-img li").hide();
//     }else{
//       $('#nav-img_1 video').eq(0).attr('controls','controls');
//     }
//   }
//   navHide();

//   	$('video').trigger('pause')
// 	$("#nav-menu>li>a").hover(function(e){
// 		e.preventDefault();
// 		$("#nav-img li").hide();
// 		$('video').trigger('pause')
// 		$('#' + $(this).attr('title')).stop().fadeIn();
// 		$("#nav-img").css({'background':'#f2f2f2'});
//     }/*,function(){
//         $('#' + $(this).attr('title')).stop().hide();
//     }*/);

// 	$("#nav-menu>li>div").hover(function(e){
// 		e.preventDefault();
// 		$("#nav-img li").hide();
// 		 $('#'+$(this).parent().find('a').attr('title')).stop().fadeIn();
// 		 $('video').trigger('pause')
// 		$('#' + $(this).attr('title')).stop().fadeIn();
// 		$("#nav-img").css({'background':'#f2f2f2'});
//     }/*,function(){
//         $('#'+$(this).parent().find('a').attr('title')).stop().hide();
//     }*/);

/************************내비 이동*********************/
	var li_a = $("#nav-menu>li>a");

	li_a.on('click',function(){
		$('#lnb').slideUp();
		$('header').css('background','');
		$('header a').css('color','#fff')
		$('.nav-btn').toggleClass('changed');
	});


/***********************롤링**************************/

	$("#topbullet .bullet1").toggleClass('workActive');
  let slide = 0;
  function b(){
	$('.bullet1').click(function(){
		slide = 0;
		console.log(slide)
		var work_width = $('.work-section-content').width();
		$('.slide').stop().animate({left: work_width*slide},600,function(){
			$('#bullet li a').attr('class','bullet-off');
			$('#bullet li a').eq(slide).attr('class','bullet-on');
			$("#topbullet a").removeClass('workActive');
			$("#topbullet a").eq(slide).toggleClass('workActive');
			
		  });
	  })
	  $('.bullet2').click(function(){
		slide = 1;
		console.log(slide)
		var work_width = $('.work-section-content').width();
		$('.slide').stop().animate({left: -work_width*slide},600,function(){
			$('#bullet li a').attr('class','bullet-off');
			$('#bullet li a').eq(slide).attr('class','bullet-on');
			$("#topbullet a").removeClass('workActive');
			$("#topbullet a").eq(slide).toggleClass('workActive');
		  });
	  })
	  $('.bullet3').click(function(){
		slide = 2;
		console.log(slide)
		var work_width = $('.work-section-content').width();
		$('.slide').stop().animate({left: -work_width*slide},600,function(){
			$('#bullet li a').attr('class','bullet-off');
			$('#bullet li a').eq(slide).attr('class','bullet-on');
			$("#topbullet a").removeClass('workActive');
			$("#topbullet a").eq(slide).toggleClass('workActive');
		  });
	  })
	$('.next').click(function(){
	  slide++;
	  console.log(slide)
	  if(slide == 3){
		slide = 0;
	  }
	  var work_width = $('.work-section-content').width();
	  $('.slide').stop().animate({left: -work_width*slide},600,function(){
		$('#bullet li a').attr('class','bullet-off');
		$('#bullet li a').eq(slide).attr('class','bullet-on');
		$("#topbullet a").removeClass('workActive');
		$("#topbullet a").eq(slide).toggleClass('workActive');
	  });
	});
  
	$('.prev').click(function(){
	  slide--;
	  console.log(slide)
	  if(slide == -1){
		slide = 2;
	  }
	  var work_width = $('.work-section-content').width();
	  $('.slide').stop().animate({left: -work_width*slide},600,function(){
		$('#bullet li a').attr('class','bullet-off');
		$('#bullet li a').eq(slide).attr('class','bullet-on');
		$("#topbullet a").removeClass('workActive');
		$("#topbullet a").eq(slide).toggleClass('workActive');
	  });
	  
	});
  }
  b()

  function a(){
	
  }
  


/**********************홈페이지 이동***********************/
	/*$('#work-section').click(function(e){
		var W_width = $(window).width();
		if($(window).width()>1200){
			e.preventDefault();
			$(this).css({
				'position':'fixed',
				'top':'324%',
				});
			$('.slide').css({
				'left':'',
				'right':W_width *slide
			})
			$(this).animate({
				width:'100%',
				height:'100%',
				},500);
			$(this).animate({height:'600px'},800)
			$('.work-section-conten_img img').animate({
				width:'40%',
				top:'50%',
				right:'6%'
				});
		$('.hide-img').hide();
			if(slide == 0){
			  setTimeout('window.location.href="work_1.html"',1300);
			}else if(slide == 1){
			  setTimeout('window.location.href="work_2.html"',1300);
			}
		}
	});*/
	/***********************내비 동영상*************************/
 /* $('video').trigger('pause');
  $(document).ready(function() {
    $("#nav-menu li a").hover(function(){
      //$('#'+$(this).attr('title')).find('video').trigger('play');
      $("#nav-img").css({'background':'#f2f2f2'});
    },function(){
      $('video').trigger('pause');
	  $("#nav-img").css({'background':'#fff'});
    });
  });*/

/************컨택트*******************/
	var smallImg = $('#contact-smallImg>li>a');
	var bigImg= $('#contact-bigImg>img');

	$(smallImg).click(function(e){
		e.preventDefault();
		var path = $(this).attr('href');
		bigImg.attr('src',path);
		bigImg.css({'opacity':'0'}).stop().animate({'opacity':'1'},1000);
	});

/**************라이트박스*********************/
	$(function(){
	  $('a[rel="lightBox"]').colorbox({slideshow:true});
     $('li[rel="my_p"]').colorbox({slideshow:true});
	});
	$(".youtube").colorbox({iframe:true});
  /*function youtube(){
		if($(window).width()>1200){
			$(".youtube").colorbox({iframe:true, innerWidth:750, innerHeight:750});
		}else if($(window).width()>700){
			$(".youtube").colorbox({iframe:true, innerWidth:500, innerHeight:500});
		}else if($(window).width()>0){
			$(".youtube").colorbox({iframe:true, innerWidth:300, innerHeight:300});
		}
	}
youtube();*/


	var L_img = $('#lightBox>a');
	L_img.each(function(){
		$(this).append('<div class="img-cpation"></div>')

		var captionColor = ['red','yellow','yellow','#fff','#fff','#000','#000','black','darkblue','darkblue']
		for(var i = 0; i<10; i++){
			$('.light_img1').find('div').css({'background':captionColor[0],'opacity':'0.5'});
      $('.light_img2').find('div').css({'background':captionColor[1],'opacity':'0.5'});
      $('.light_img3').find('div').css({'background':captionColor[2],'opacity':'0.5'});
    	$('.light_img4').find('div').css({'background':captionColor[3],'opacity':'0.5'});
    	$('.light_img5').find('div').css({'background':captionColor[4],'opacity':'0.5'});
    	$('.light_img6').find('div').css({'background':captionColor[5],'opacity':'0.5'});
    	$('.light_img7').find('div').css({'background':captionColor[6],'opacity':'0.5'});
    	$('.light_img8').find('div').css({'background':captionColor[7],'opacity':'0.5'});
      $('.light_img9').find('div').css({'background':captionColor[8],'opacity':'0.5'});
    	$('.light_img10').find('div').css({'background':captionColor[9],'opacity':'0.5'});
		}
	});
	$('#lightBox>a').click(function(){
		$(this).find('div').css({'display':'none'});
	});


});
