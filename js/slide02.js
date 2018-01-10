// DOMを読み込んだら
$(function(){

    var slideImgs = ['img/igg.png','img/neko.png','img/akaiyo.png','img/m4.png','img/mhsr.png'];

    //  プリロード
    for(var i = 0; i< slideImgs.length; i++){
        $("<img>").attr("src", slideImgs[i]);
    }

    var clickCount = 0;

    //写真を全部消して、１番目をフェードイン
    $('#slideshow').find('li:eq(0)').addClass('fade-in');

    $('#circle').find('li').on('click',function(evt){
        clickCount++;
        var index = $('#circle li').index(this);

        console.log(index);

        slideShow(index)
    });



    // // スライドショー関数
    function slideShow(index){
        $('#slideshow').append('<li><img src="' + slideImgs[index] +'" alt=""></li>');
        $('#slideshow').find('li:last').css('opacity',0).addClass('fade-in');
        if(clickCount >= 2){
            $('#slideshow').find('li:first').remove();
        }
        $('#circle li').removeClass('select');
        $('#circle li').eq(index).addClass('select');
    }
});
