	$(function(){


		        $.ajax({
					url:  "http://192.168.199.249:8080/index.php?c=api&a=info",
					type: "get",
					data:{
						id: window.location.search.split("=")[1]
					},
					dataType: "json",
					success:function(result){

							 var readstr = "<h4 class='title'><span>2017-09-08</span>"+result.data.info.title+"</h4>";
						   $(".about-1").html(readstr);
						   var commentList = result.data.commentList;
						   var commentStr="";
						   for (var i = 0; i <commentList.length; i++) {
						  commentStr+='<div class="list-item"><div class="user clearfix"><div class="user-img fl"><img src="./img/tou.png"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">AAAAA</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">2017年9月29日 11:36</span></p><p class="saying-w">'+commentList[i].content+'</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>';
							}
						   $(".hot-list").html(commentStr);
						},
						error: function(res){

						}    
			});


		$(".header-login").click(function(){
				$(".header-login-chl").show()
		})
		$(".submit").click(function(){
				var username = $(".username").val();
                var password = $(".userpassword").val();  
			$.ajax({
					url:  "http://192.168.199.249:8080/index.php?c=api&a=doLogin",
					type: "post",
					dataType: "json",
					data:{
						email: username,
						password: password,
					},
                success:function(res){
                		console.log(res);
                		if(res.status) {
                			alert("登陆成功");
                			$(".header-login-chl").hide();
                			localStorage.setItem("user_id",res.data.id)                 
                		}
                	},
                    error: function(res){

                	}                
			})
		});
		$(".issue fr").click(function(){
			var blogId = window.location.search.split("=")[1];
        	var userId = localStorage.getItem("user_id");
        	var contentText = $("textarea").val();
			$.ajax({
				url:"http://192.168.199.249:8080/index.php?c=api&a=doComment",
				type:"post",
				dataType:"json",
				data:{
					content:contentText,
					user_id:userId,
					blog_id:blogId,
				},
				success:function(res){
					if (res.status) {
						alert("成功");

						var str ='<div class="list-item"><div class="user clearfix"><div class="user-img fl"><img src="./img/tou.png"></div><div class="user-present fl"><p class="global clearfix"><span class="nickname fl">AAAAA</span><span class="address fl">[山西省太原市网友]</span><span class="user-time fr">2017年9月29日 11:36</span></p><p class="saying-w">'+contentText+'</p></div></div><div class="action-click"><div class="btns-bar"><i class="gap-gw"></i><span class="click-report"><a href="javascript:void(0)"><i class="icon-gw icon-flag"></i><em>举报</em></a></span><i class="gap-gw"></i><span class="click-reply"><a href="javascript:void(0)">回复</a></span><i class="gap-gw"></i><span class="click-ding"><a href="javascript:void(0)"><i class="icon-gw icon-ding"></i><em class="icon-number">2</em></a></span><i class="gap-gw"></i><span class="click-cai"><a href="javascript:void(0)"><i class="icon-gw icon-cai"></i></a></span><i class="icon-gw"></i><span class="click-prop"><a href="javascript:void(0)"></a></span></div></div></div>';
						 $(".list-item").append(str);
					}
				},
				error:function(){

           		}
			})
		})
	})
				
		// 			var result=
		// 				{
		// 					"status" : true,
		// 					"data"   : {
		// 						"commentInfo" :{
		// 								"id": 999,
		// 								"title":"5555",
		// 								"userId":"1111",
		// 							},
		// 					}
		// 				}
					
					

		// 				var saystr = "<span class='nickname fl'>"+result.data.commentInfo.title+"</span>";
		// 				$(".global").html(saystr);
				    
		
	
			
		        
		
				    
