    var t = 0; 
    var n = 0;
    var count
  
    $(document).ready(function(){   
        count=$("#banner_list a").length;
        // count赋值为a长度 为4
        $("#banner_list a:not(:first-child)").hide();
        // 隐藏后面所有的a图片
        $("#banner_info").html($("#banner_list a:first-child").find("img").attr('title'));
        // 找到id为banner_info的html标签 设置为 a img 的title属性值

        $("#banner_info").click(function(){window.open($("#banner_list a:first-child").attr('href'), "_blank")});
        //点击info栏 在新窗口打开href为list 的属性 的页面
        
        
        //添加前后翻页按钮
        $('.slider-page').hide();

        $('#banner').hover(function() {
            $('.slider-page').show();
        },function(){
            $('.slider-page').hide();
        });

         
        $('.slider-prev').bind('click', function() {
            prev();
        });

        $('.slider-next').bind('click', function() {
            next();
        })


             
                                    
                                  
        $("#banner li").click(function() {  // 以上为初始化函数 这里开始为循环体函数
            var i = $(this).text() - 1;//获取Li元素内的值，即1，2，3，4
            n = i;

          
          
            $("#banner_info").html($("#banner_list a").eq(i).find("img").attr('title'));
            //根据下标修改info
            $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
            //移除原有的点击事件 修改为新事件｛地址改为图片href｝
            $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
            // 返回显示的图片 消失 返回 下标为i的a 链接图片 显示
            $('#banner ul li').removeClass('on');
            $('#banner ul li').eq(i).addClass('on');
        });
        t = setInterval("showAuto()", 2000);
        $("#banner").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 2000);});
    })
    

         
          function prev() {
            if(n > 0) {
                n = n-1;
            } else {
                n = count-1;
            }

            $("#banner_info").html($("#banner_list a").eq(n).find("img").attr('title'));
            //根据下标修改info
            $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(n).attr('href'), "_blank")})
            //移除原有的点击事件 修改为新事件｛地址改为图片href｝
            $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(n).fadeIn(1000);
            // 返回显示的图片 消失 返回 下标为i的a 链接图片 显示
            $('#banner ul li').removeClass('on');
            $('#banner ul li').eq(n).addClass('on');
            
            

        };

         function next() {
            if(n < count-1) {
                n = n+1;
            } else {
                n = 0;
            }
            

            $("#banner_info").html($("#banner_list a").eq(n).find("img").attr('title'));
            //根据下标修改info
            $("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(n).attr('href'), "_blank")})
            //移除原有的点击事件 修改为新事件｛地址改为图片href｝
            $("#banner_list a").filter(":visible").fadeOut(500).parent().children().eq(n).fadeIn(1000);
            // 返回显示的图片 消失 返回 下标为i的a 链接图片 显示
            $('#banner ul li').removeClass('on');
            $('#banner ul li').eq(n).addClass('on');
            //点击切换图片
            
            

        };




   function showAuto()   // 定义循环函数 n自增
    {
        n = n >=(count - 1) ? 0 : ++n;  
        $("#banner li").eq(n).trigger('click');  //触发事件 开始执行内循环

       
    }