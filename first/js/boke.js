	$(function(){
		        
		        $.ajax({
					url:  "http://192.168.199.249:8080/index.php?c=api&a=bloglist",
					type: "get",
					dataType: "json",
					success:function(result){
						var str = "";
						for(var i=0;i<result.data.lists.length;i++) {
							str += "<li><time class='cbp_tmtime'><span>09-08</span><span>2017</span></time><div class='cbp_tmicon'></div><div class='cbp_tmlabel'><h2><a href='#' style='color:white;'>"+result.data.lists[i].title+"</a></h2><p>"+result.data.lists[i].content+"</p><p><a href='./readMore.html?id="+result.data.lists[i].id+"' class='readmore'>阅读全文</a><a href='#' class='classname'>原创个人博客模板</a></p></div></li>";
							
					   };
					   $(".cbp_tmtimeline").html(str);
					}
				    
	})
				// var result =  
				// 	 {
				// 		"status" : true,
				// 		"data"   : {
				// 			"lists" : [
				// 				{
				// 					"id": "1",
				// 					"title": "131313",
				// 					"content": "qqqqqqqqqq",
				// 					"image": "./public/upload/img_1508636446641043.png",
				// 					"classify_id": "5",
				// 					"status": "1",
				// 					"createtime": "2017-10-21 10:38:57",
				// 					"updatetime": "2017-10-22 09:40:46",
				// 					"createdate": "2017/10/21"
				// 				},
				// 				{
				// 					"id": "1",
				// 					"title": "131313",
				// 					"content": "qqqqqqqqqq",
				// 					"image": "./public/upload/img_1508636446641043.png",
				// 					"classify_id": "5",
				// 					"status": "1",
				// 					"createtime": "2017-10-21 10:38:57",
				// 					"updatetime": "2017-10-22 09:40:46",
				// 					"createdate": "2017/10/21"
				// 				},
				// 			],
				// 		}
				// 	}
		    //     		var str = "";
						// for(var i=0;i<result.data.lists.length;i++) {
						// 	str += "<li><time class='cbp_tmtime'><span>09-08</span><span>2017</span></time><div class='cbp_tmicon'></div><div class='cbp_tmlabel'><h2><a href='#' style='color:white;'>"+result.data.lists[i].title+"</a></h2><p>"+result.data.lists[i].content+"</p><p><a href='#' class='readmore'>阅读全文</a><a href='#' class='classname'>原创个人博客模板</a></p></div></li>";
							
					 //   };
					 //   $(".cbp_tmtimeline").html(str);
		})
				    
