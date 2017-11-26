$(window).scroll(function(){
	var textHeight = $(".logo").height();
	var bodyHeight = $("body").height();        
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();	
	if((scrollHeight + windowHeight) <= (windowHeight + textHeight )) {                         
          $(".logo").addClass("haha");
        }else {        
	      $(".logo").removeClass("haha"); 
	}
	var header =$(".header").height();
	var make =$(".time-text").height();
	var liHeight = $(".blog-box").height();
    if((scrollHeight + windowHeight) >= (header + liHeight)) {
           $(".time-text").addClass("agatime");
	}else {
		$(".time-text").removeClass("agatime");
	}
	var haha =$(".little-text .flag")
	console.log(haha)
	
    $(".text-text").mouseover(function(){
		$(this).children(".comment-btn").css("opacity","1");
        $(this).parent().css("background","#fef6f6");
	})
	$(".text-text").mouseleave(function(){
		$(this).children(".comment-btn").css("opacity","0");
        $(this).parent().css("background","#fff");
	})
	$(".click-right").click(function(){
		$(".fun-little").animate({"marginLeft":"-120px"})
	})
	$(".click-left").click(function(){
		$(".fun-little").animate({"marginLeft":"0"})
	})
	// $(".prop").mouseover(function(){
	// 	$(".box-lun").show();
	// })
	// $(".prop").mouseleave(function(){
	// 	$(".box-lun").hide();
	// })
})
$(function(){
	var result = {
		"status" : true,
		"data" : {
			"lists" : [
				{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
				{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
				{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
				{
					"id": "1",
					"title": "131313",
					"content": "qqqqqqqqqq",
					"image": "./public/upload/img_1508636446641043.png",
					"classify_id": "5",
					"status": "1",
					"createtime": "2017-10-21 10:38:57",
					"updatetime": "2017-10-22 09:40:46",
					"createdate": "2017/10/21"
				},
			]
		}
	}
	$.ajax({
		url: "index.php?c=api&a=bloglist",
		type: "get",
		dataType: "json",
		success: function(res){

		},
		error: function(res){

		}
	});
	var str = "";
	for(var i=0;i<result.data.lists.length;i++){
		str+='<li class="clearfix"><div class="now-time">'+result.data.lists[i].createdate+'</div><div class="time-btn"></div><div class="time-text"><h2><a href="javascript:void(0)">'+result.data.lists[i].title+'</a></h2><div class="time-img clearfix"><span class="blog-img"><a href="javascript:void(0)"><img src="./image/f5af.jpg" alt=""></a></span><span class="blog-html"><p>'+result.data.lists[i].content+'</p><p><a href="javascript:void(0)">原创个人博客模板</a><a href="./read.html?id='+result.data.lists[i].id+'" class="read-all">阅读全文>></a></p></span></div></div></li>'
	}
	$(".time-box ul").html(str);
})