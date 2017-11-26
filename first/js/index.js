$(function(){


		  //       $.ajax({
				// 	url:  "http://192.168.199.249:8080/index.php?c=api&a=doComment",
				// 	type: "post",
				// 	data:{
				// 		// id: window.location.search.split("=")[1]
				// 			content
				// 			user_id
				// 			blog_id
				// 	},
				// 	dataType: "json",
				// })
					var result=
						{
							"status" : true,
							"data"   : {
								"commentInfo" :{
										"id": 999,
										"title":"5555",
										"userId":"1111",
									},
							}
						}
					
					// success:function(result){

							 var saystr = "<span class='nickname fl'>"+result.data.commentInfo.title+"</span>";
						   $(".global").html(saystr);
				 //    }
				
			})