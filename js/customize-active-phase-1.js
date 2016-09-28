/*************************/
/***** AUTHOR : GTL#CODE#3759
/***** DATE : 10-27-2015 : (DF mm-dd-yyyy)
/*************************/

$(document).ready(function(){
	$(function () {
		$megaMenuMasonary=$('.mega-sub-menu-main');
		var thisLiWidth;
		var thisLiHeight;
		var totalHeight=0;
		var totalColumn=2;
		var i=0;
		var biggestHeight=0;
		$megaMenuMasonary.find('> li').each(function(){
			
			/*leftPosition=i*(100/totalColumn);			
			$this=$(this);			
			thisLiWidth=$this.width();
			thisLiHeight=$this.height();	
			
			//ulHeight=$this.parents('ul').height();			
			//$this.parents('ul').height(totalHeight);
			//$this.css({ top:ulHeight,left:leftPosition+'%'});
			
			/*if(biggestHeight<thisLiHeight)
				biggestHeight=thisLiHeight; */
			
			//totalHeight+=thisLiHeight;
			
			/*$array[i]=thisLiHeight;
			// FIND THE SMALLEST NUMBER
			$this.css({ top:$array[i],left:leftPosition+'%'});
			// SET NEXT ELEMENT TOP POSITION THAT.
			*/
			/*i++;
			$this.addClass(' '+i);
			if(i%totalColumn==0)
			{			
				i=0;
			}
			*/
			//console.log($this.parents('ul').height());
		});	
		i=0;
		var column=[];		
		liHeight=0;
		nextliHeight=0;
		smallestNumber=0;
	
		
		coloneHeight=0;
		coltwoHeight=0;
		$megaMenuMasonary.find('> li').each(function(){
			$this=$(this);			
			liHeight=$this.height();
			if($('.col-1').height()<=$('.col-2').height())			
			{
				$this.css({
					top:coloneHeight
				});
				coloneHeight+=liHeight;
				$('.col-1').height(coloneHeight);
				$this.appendTo('.col-1');
			}
			else
			{
				$this.css({
					top:coltwoHeight
				});
				coltwoHeight+=liHeight;
				$('.col-2').height(coltwoHeight);
				$this.appendTo('.col-2');
			}
		});	
		$megaMenuMasonary.find('> li').each(function(){
			leftPosition=i*(100/totalColumn);	
			//$this.css({ top:smallestNumber,left:leftPosition+'%'});
			i++;
			if(i%totalColumn==0)
			{			
				i=0;
			}
		});
		//console.log($this.parents('ul').height());
	});
	var getLastPartOfUrl =function() {		
	}
});


