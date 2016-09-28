/*************************/
/***** AUTHOR : GTL#CODE#3759
/***** DATE : 10-27-2015 : (DF mm-dd-yyyy)
/*************************/

$(document).ready(function(){
	$(function () {
		$megaMenuMasonary=$('.mega-sub-menu-main');
		var totalColumn=2;
		var i=0;
		var column=[];		
		liHeight=0;
		oldarrayKey=0;
		leftPosition=0;
		column[0]=0;
		column[1]=0;
		$megaMenuMasonary.find('> li').each(function(){
			$this=$(this);			
			liHeight=$this.height();
			arrayKey=column.indexOf(Math.min.apply(Math, column));
			if(oldarrayKey!=arrayKey)			
				leftPosition=i*(100/totalColumn);
				
			oldarrayKey=arrayKey;			
			$this.css({
				top:column[arrayKey],
				left:leftPosition+'%'
			});
			column[arrayKey]+=liHeight;		
			i++;
			if(i%totalColumn==0)
			{			
				i=0;
			}	
		});	
	});
});


