$(document).ready(function(){

    // Slide effect
    var _parentSlide = 'div.slide-block1';
    var _linkSlide = '.open-close1';
    var _slideBlock = 'div.block1';
    var _openClassS = 'active1';
    //var _textOpenS = 'Показать';
    //var _textCloseS = 'Скрыть';
    var _durationSlide = 200;
    
    $(_parentSlide).each(function(){
	if (!$(this).is('.'+_openClassS)) {
	    $(this).find(_slideBlock).css('display','none');
	}
    });
    $(_linkSlide,_parentSlide).click(function(){
	if ($(this).parents(_parentSlide).is('.'+_openClassS)) {
	    $(this).parents(_parentSlide).removeClass(_openClassS);
	    $(this).parents(_parentSlide).find(_slideBlock).slideUp(_durationSlide);
	    $(this).text(_textOpenS);
	} else {
	    $(this).parents(_parentSlide).addClass(_openClassS);
	    $(this).parents(_parentSlide).find(_slideBlock).slideDown(_durationSlide);
	    $(this).text(_textCloseS);
	}
	return false;
    });
    
});
