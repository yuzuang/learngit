$(function(){
    //详情页面页面初始化
    $.ajax({
        url: "http://192.168.199.249:8080/index.php?c=api&a=info",
        type: "get",
        dataType: "json",
        data: {
            id: window.location.search.split("=")[1],
        },
        success:function(result){
            var articleInfo = '<p>'+result.data.info.title+'</p><p>'+result.data.info.content+'</p><p>静态页面请直接点击下面的蓝色按钮</p>'
            $(".article-info").html(articleInfo);
            var commentList = result.data.commentList;
            var commentStr = "";
            for(var i= 0; i<commentList.length;i++){
                commentStr+='<div class="comment-text"><a href="javascript:void(0)"><img src="./image/facjpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">火锅底料</a></span><span class="comment-city"> [天津市网友]</span><span class="comment-time"> 今日10:43</span></div><div class="comment-about"><p>'+commentList[i].content+'</p></div><div class="comment-btn"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>1</a></span></div></div></div>'
            }
            $(".comment-list").html(commentStr)
        },
        error: function(res){

        }
    });

    //点击登陆显示登陆弹窗
    $(".header-login").click(function(){
        $(".tip").show();
    })
    //登陆功能
    $(".user-login").click(function(){
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();
        $.ajax({
            url:"http://192.168.199.249:8080/index.php?c=api&a=doLogin",
            type:"post",
            dataType:"json",
            data: {
                email:username,
                password:password,
            },
            success:function(res){
                if(res.status){
                    $(".tip").hide();
                    localStorage.setItem("user_id",res.data.id)
                }
            },
            error:function(res){

            }
        })
    });

    //发表评论
    $(".happy").click(function(){
        var blogId = window.location.search.split("=")[1]; //文章id
        var userId = localStorage.getItem("user_id");  //用户id
        var contentText = $("textarea").val();  //用户输入的评论内容
        $.ajax({
            url:"http://192.168.199.249:8080/index.php?c=api&a=doComment",
            type:"post",
            dataType:"json",
            data:{
                content:contentText,
                user_id:userId,
                blog_id:blogId,
            },
            success:function (res) {
                if(res.status){
                    alert("成功");
                    var str = '<div class="comment-text"><a href="javascript:void(0)"><img src="./image/facjpg.jpg" alt=""></a><div class="comment-every clearfix"><div class="comment-head"><span class="comment-name"><a href="javascript:void(0)">火锅底料</a></span><span class="comment-city"> [天津市网友]</span><span class="comment-time"> 今日10:43</span></div><div class="comment-about"><p>'+contentText+'</p></div><div class="comment-btn"><span class="flag"><a href="javascript:void(0)"><i></i>举报</a></span><span class="reply"><a href="javascript:void(0)">回复</a></span><span class="good"><a href="javascript:void(0)"><i></i></a></span><span class="no-good"><a href="javascript:void(0)"><i></i>1</a></span></div></div></div>';
                    $(".comment-list").append(str)
                }
            },
            error:function(){

            }
        })
    })



})