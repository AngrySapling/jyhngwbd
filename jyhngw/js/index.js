// const glide = new Glide(".glide")

// glide.mount()
$(document).ready(function(){
    let a = false
    $(".burger").click(function(){
        a = !a;
        if(a){
            $(".nav").slideDown()
            $(".bg").show()
        }else{
            $(".nav").slideUp()
            $(".bg").hide()
        }
    })
    $(".bg").click(function(){
        $(".nav").slideUp()
    })
    //轮播
    var swiper = new Swiper('.swiper-container', {
        loop : true,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    //吸顶条
    //产品导购条距离顶部距离
    let pruTop = $(".pro-header").offset().top
    $(document).scroll(function(){
        let scrollTop = $(document).scrollTop()
        console.log(pruTop,scrollTop)
        if(pruTop <= scrollTop){
            $(".pro-header").css({position:"fixed",top:0,})
            $("scrollTopBox").show()
        }else{
            $(".pro-header").css({position:"",})
            $("scrollTopBox").hide()
        }
    });

    //点击切换商品介绍
    $(".pro-menu-list").click(function(){
        $(".pro-menu-list").each(function(){
            $(this).children().css("color","#969696")
        })
        $(".pro-menu-list").eq(2).children().css("color","#16befb")
        $(this).children().css("color","#fff")
        let index = $(".pro-menu-list").index(this)
        //滚动对应的距离
        $(document).scrollTop(pruTop)
        $(".shows").each(function(){
            $(this).hide()
        })
        $(".shows").eq(index).css("display","block")
    })
})
