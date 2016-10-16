$.fn.projectSquareRWDplugin = function() { 
    var row =$('.row');
    var cout=1;
    var slideChanger=$('.myButtonSquareRWD');
    var width= $(window).width();
    var bgImg='url("style/img/large-photo';
    function checkSize (width){
            if (width>319 && width<480) {
               bgImg='url("style/img/rlysmall-photo';
                console.log('rlysmall');
            }
            else if (width<600 && width>480) {
                bgImg='url("style/img/small-photo';
                console.log('small');
            }
            else if (width>600 && width<720) {
                bgImg='url("style/img/medium-photo';
                console.log('medium');
            }
            else if (width>=720 && width<=1023) {  
                bgImg='url("style/img/bigmedium-photo';
                console.log('bigmedium');
            }
            else if (width>=1024 && width<1125) {
                bgImg='url("style/img/semilarge-photo';
                console.log('semilarge');
            }
            else if (width>=1125) {
                bgImg='url("style/img/large-photo';
                console.log('large');
            }
    }
    checkSize(width);
    $(window).on('resize', function () {
        var resizeWidth= $(window).outerWidth();
        checkSize(resizeWidth);
        row.each(function(index, item) {
            $(item).css('background-image',bgImg+cout+'.png")')
        });
        console.log(bgImg);
        console.log(resizeWidth);
    })
    
    slideChanger.on('click', function () {
        var clickWidth= $(window).outerWidth();
        checkSize(clickWidth);
        if (cout<3){
            cout++;
        }
        else {
            cout=1;
        }
        var  tim = 30;
        row.sort(function() { return 0.5 - Math.random() });
        console.log(row)
        row.each(function(index, item) {
            tim=tim+60;
            $(item).animate({
               opacity:0.1  
             },tim, function () {
                 $(item).css('background-image',bgImg+cout+'.png")').animate({
                     opacity:1
                 },50);
            });
        });
    });
}
       