/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2016 : (DF mm-dd-yyyy)
/*************************/
$(document).ready(function(){
	(function ($) {
		$cstSticky=$('.cst-sticky-position');
		$stickyPinUnpin = $('.sticky-pin-unpin');
	    //console.log('h' + stkHeight);
		$('<div class="temp"></div>').insertAfter($cstSticky);
		$('.temp').height($cstSticky.height());
		childHeightTotal=0;
		var StcikyElement =function(){
			var stickyTopPosition=0;
			stickyElementHeight=$cstSticky.height();
			stickyPrevElementHeight=$cstSticky.prev().height();
			stickyPrevPostionTop=$cstSticky.prev().position().top;
			return {
			 getPrevPostionTop:function(){
				 return stickyPrevPostionTop;
			 },
			 getHeight:function(){
				return stickyElementHeight;
			 },
			 getPrevHeight:function(){
				return stickyPrevElementHeight;
			 }
			}
		}	
		var waitForFinalEvent = (function () {
		  var timers = {};
		  return function (callback, ms, uniqueId) {
			if (!uniqueId) {
			  uniqueId = "P&#d6%2S^L3&Z";
			}
			if (timers[uniqueId]) {
			  clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		  };
		})();
		windowHeight = $('.testmain').height();
		var stickyCalcPos = function() {	
			var stikcyobject=new StcikyElement();			
			stkHeight = stikcyobject.getHeight();
            
			
			stkPrevHeight=stikcyobject.getPrevHeight();		
			stkPrevPostionTop=stikcyobject.getPrevPostionTop();
			stkCurrentPostion=stkPrevPostionTop+stkPrevHeight;
			stickyCalcResult=(stkPrevHeight);			
		}
		var stickySetPos = function(){
		    windowScrollPixel = $('.testmain').scrollTop();
		    
			if(windowScrollPixel>=stickyCalcResult) {
				$cstSticky.css({ position:'fixed', 'top':0 });				
			} else {				
				$cstSticky.css({ position:'absolute', 'top':stkCurrentPostion });				
			}
		}
		$('.testmain').scroll(function () {
		    console.log(1);
			stickySetPos();
		});
		$(window).resize(function () {	
		    windowHeight = $('.testmain').height();
			waitForFinalEvent(function(){
			  stickyCalcPos();
			  stickySetPos();
			}, 500, "P&#d6%2S^L3&Z");
		});
		
		stickyCalcPos();
		stickySetPos();
	})( jQuery );
});