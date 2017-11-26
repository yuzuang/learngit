  
$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
     paginationClickable: true,
            speed: 500,
            loop: true,
            observer:true,
            observeParents:true,
            autoplayDisableOnInteraction : false,
            autoplay:2000

  })  
	var result = {
            "show_download_bar":true,
            "app":"0",
		 "health_news":[
        {
            "favor_num":1,
            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/0665/98166e4491e0_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "title":"不涂口红没法出门，那需要担心口红中的铅吗？",
            "date_str":"2小时前",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/0665/98166e4491e0_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "news_id":114223,
            "channel_id":9,
            "view_times":2177,
            "type":"news",
            "id":114223,
            "digest":"人体的铅摄入量确实可能因为使用口红而增加，但摄入量比起其他来源微不足道。能不能接受，就看你自己的选择了。不买三无产品，跟着FDA的检测买口红，是一个避免碰到铅超标产品的好法子。",
            "channel_name":"女性"
        },
        {
            "favor_num":0,
            "img":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/42ea/c603c58b4141_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "title":"站着说话不腰疼？不，告诉你怎么才不腰疼",
            "date_str":"2小时前",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/42ea/c603c58b4141_w180_h150_.jpg?imageView2/1/w/120/h/116",
            "news_id":114219,
            "channel_id":21,
            "view_times":1587,
            "type":"news",
            "id":114219,
            "digest":"站着比坐着或坐着弯腰说话出现腰痛的几率更小。不过，站着说话，腰椎还是受力的，长时间站立，仍然会造成腰部肌肉疲劳，所以还是可能产生腰痛的！",
            "channel_name":"生活"
        },
        {
            "description":"",
            "title":"市面上缓解眼疲劳的蒸汽眼罩有用吗？",
            "url":"https://media2.chunyuyisheng.com/@/media/video/99ce33d1vodtransgzp1252638726/93aa6ca64564972818489796916/v.f20.mp4",
            "type":"video_segment",
            "image":"https://media2.chunyuyisheng.com/@/media/images/2017/11/23/38ff/48ee12e0aa19_w855_h676_.png",
            "lecture_status":"已结束",
            "play_count":0,
            "seconds":"01:10",
            "room_id":440,
            "duration":"01:10",
            "lecture_id":479,
            "date_str":"20小时前",
            "id":3020,
            "subject":"有请大医生"
        }
    ],
}
	var str = "";
	for (var j = 0; j < result.health_news.length; j++) {
		str +="<div class='every_universal'><img str='"+result.health_news[j].image+"' alt=''><div class='universal_right'><p>"+result.health_news[j].title+"</p><span>"+result.health_news[j].date_str+"</span></div></div></div>";


	};
	$(".universal").html(str);

    var result = {
            "show_logo":true,
            "hot_problems":[
        {
            "ask":"腰肌劳损怎么办，吃什么药（男，25岁）",
            "answer":"您好，一般建议局部热敷，按摩治疗，口服舒筋活血的药物，我们常用活血止痛胶囊，效果不错",
            "title":"腰肌劳损怎么办，吃什么药？",
            "id":"C_Y1BWkIahZRwCP33fR2hA",
            "doctor":{
                "hospital":"辽宁中医药大学附属第四医院",
                "name":"李圣"
            }
        },
        {
            "ask":"牙齿矫正 建议拔牙吗？拔牙有什么危害？（女，16岁）",
            "answer":"您好！一般牙列拥挤时，要想排齐牙齿，多半需要拔牙，一般拔第四颗牙，因为这颗牙齿相对作用不大（前...",
            "title":"矫正牙齿拔牙有什么不好的？",
            "id":"YsfsCQY_DfVbPafwMTjZ-Q",
            "doctor":{
                "hospital":"中国人民解放军第四军医大学口腔医院",
                "name":"陆斌"
            }
        },
        {
            "ask":"生殖性疱疹，反复发作，时间不定，有时隔几周，有时隔几个月，内服阿昔洛韦片，外用阿昔洛韦膏。现在已结疤！每次复发的地方不一样！没有不洁的性生活！（男，26岁）",
            "answer":"你好，忌酒及辛辣刺激食物及牛羊肉很重要，平时适当清淡饮食",
            "title":"生殖性疱疹，反复发作，内服阿昔洛韦片，外用阿昔洛韦膏，怎么办？",
            "id":"FJSZb_fjydngdDPn3V5zlQ",
            "doctor":{
                "hospital":"中国人民解放军陆军总医院",
                "name":"沙万雷"
            }
        }
    ],
    }
    var astr = "";
    for (var i = 0; i < result.hot_problems.length; i++) {
       
        astr +="<a href='#' class='hot-qa-list first'><h6 class='title' style='font-size:15px;color: #323232;'><span class='title-tag'>问</span>"+result.hot_problems[i].ask+"</h6><p class='hot-qa-user'>"+result.hot_problems[i].answer+"</p></a>";


    };
    $(".hot-qa-warp").html(astr);
    var result = {
         "popular_diseases":[
        {
            "id":237446,
            "name":"感冒"
        },
        {
            "id":264890,
            "name":"过敏"
        },
        {
            "id":243779,
            "name":"湿疹"
        },
        {
            "id":246581,
            "name":"痤疮"
        },
        {
            "id":273362,
            "name":"阴道炎"
        },
        {
            "id":273218,
            "name":"痔疮"
        },
        {
            "id":222110,
            "name":"包皮"
        },
        {
            "id":273242,
            "name":"糖尿病"
        },
        {
            "id":229808,
            "name":"宫颈糜烂"
        },
        {
            "id":273383,
            "name":"高血压"
        },
        {
            "id":273296,
            "name":"肺炎"
        },
        {
            "id":271667,
            "name":"鼻炎"
        },
        {
            "id":229727,
            "name":"宫外孕"
        },
        {
            "id":216869,
            "name":"乙肝"
        },
        {
            "id":273341,
            "name":"艾滋病"
        },
        {
            "id":268796,
            "name":"颈椎病"
        },
        {
            "id":273236,
            "name":"盆腔炎"
        },
        {
            "id":233339,
            "name":"尖锐湿疣"
        }
    ],
    }
    var bstr ="";
    for (var k = 0; k <result.popular_diseases.length; k++) {
        bstr +="<li class='block-list'><a href='/m/disease/237446/' title='感冒'>"+result.popular_diseases[k].name+"</a></li>";
    };
    $(".block-list-wrap").html(bstr);
})

           