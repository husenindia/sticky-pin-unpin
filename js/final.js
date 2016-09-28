/*************************/
/***** AUTHOR : HUSENTELWALA
/***** DATE : 01-06-2016 : (DF mm-dd-yyyy)
/*************************/

$(document).ready(function(){
	$(function () {
		$cstMasonry=$('.mega-sub-menu-main');
		var totalColumn=3;
		var columnDividerCounter=0;
		var arrayKeyCounter=0;
		var arrOfColumn=[0];		
		var liHeight=0;
		var oldarrayKey=0;
		var leftPosition=0;				
		while(totalColumn>arrayKeyCounter)
		{
			arrOfColumn[arrayKeyCounter]=0;
			arrayKeyCounter++;
		}		
		$cstMasonry.find('> li').width(100/totalColumn+'%'); 
			$cstMasonry.find('> li').each(function(){			
			$this=$(this);			
			liHeight=$this.height();
			arrayKey=arrOfColumn.indexOf(Math.min.apply(Math, arrOfColumn)); // FIND WHICH COLUMN HAS SPACE IN COMPARISION TO OTHER COLUMN
			if(oldarrayKey!=arrayKey)			
				leftPosition=arrayKey*(100/totalColumn);				
			oldarrayKey=arrayKey; // CHECK WHETHER SAME COLUMN HAVE SPACE
			$this.css({
				top:arrOfColumn[arrayKey],
				left:leftPosition+'%'
			});
			arrOfColumn[arrayKey]+=liHeight; // ADDING COLUMN HEIGHT FOR NEXT LI POSITION
			columnDividerCounter++; 
			if(columnDividerCounter%totalColumn==0)
				columnDividerCounter=0;
			});		
		
	});
});



