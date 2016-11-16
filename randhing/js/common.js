	//画像スイッチ　切り替え
	$(function(){
	  var $setElem = $('.switch'),
	  pcName = '_pc',//PC版のファイル名
	  spName = '_sp',//スマホ版のファイル名
	  replaceWidth = 500;//切り替える画面サイズ
	 
	  $setElem.each(function(){
	    var $this = $(this);
	    function imgSize(){
	    var windowWidth = parseInt($(window).width());
	      if(windowWidth >= replaceWidth) {
	        $this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
	      } else if(windowWidth < replaceWidth) {
	        $this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
	      }
	    }
	    $(window).resize(function(){imgSize();});
	    imgSize();
	  });
	});


	// 高さ揃える
	$(function(){
    	$('.list_case_outer').tile();
	});