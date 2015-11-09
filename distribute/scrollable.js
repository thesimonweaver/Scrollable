//Scrollable 1.0

////////////////////////////////////////////////////////////////////////////Settings
// Acceptable Variables "vertical" and "horizontal"
var scrollType = "vertical";

//Use Single Element Scrolling or Array List
//Acceptable Veriables "solo" and "array"
var SoloOrArray = "solo";

//Solo Element to Apply Scrollable to.
//Element ID is: $("#Element Name Here");
//Class Name is: $(".Class Name Here"); 
var scrollableElemet = $("");

//Array of Elements to Apply Scrollable to.
//Add Infinate Elements as $("#"), or classes $(".")
var scrollableElemetsArray = [
	$("#ElementID1"), // Note Again Element ID has # between Quotation Marks.
	$("#"),
	$("#"),
	$("#"), //Final Array Element Does Not Have a Comma.
	$(".ClassName1") //Class Element Example, Note Class Name Special Character is a Full Stop.
	];

// Scrollable Distance in Pixels.		
var scrollableDistance = 120;


////////////////////////////////////////////////////////////////////////////Actual Scrollable	
//Execute Scrollable On Document Ready.
//Uncomment the Following for Scrollable to Load when Page is Ready.
//$(document).ready(scrollable());

function scrollable(){
	var selectedElementsType;
	if(SoloOrArray == "solo"){
		selectedElementsType = scrollableElemet;
	}
	else if(SoloOrArray == "array"){
		selectedElementsType = scrollableElemetsArray;
	};	
	$.each(selectedElementsType, function(){
		$(this).hover(function(){
			//Hover In Element
			$(this).unbind('mousewheel DOMMouseScroll'); //Just to Make Sure the Event is Unbound		
			$(this).bind('mousewheel DOMMouseScroll', function(event){
				if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
					if(scrollType == "vertical"){
						$(this).scrollTop($(this).scrollTop() - scrollableDistance );
					}
					else if(scrollType == "horizontal"){
						$(this).scrollLeft($(this).scrollTop() - scrollableDistance );						
					};
				}
				else {
					if(scrollType == "vertical"){
						$(this).scrollTop($(this).scrollTop() + scrollableDistance );
					}
					else if(scrollType == "horizontal"){
						$(this).scrollLeft($(this).scrollTop() + scrollableDistance );
					};
				}
			});			
		}, function(){
			//Hover Out of Element
			$(this).unbind('mousewheel DOMMouseScroll');
		});
	});	
}

/* 
Author: Simon Weaver 2015
Description: 
My Appologies if there is too much commenting happening.
I just wanted to be througher with explainaions, because the script 
is simple enough for advanced jQuery users.
If you are using this code please leave me a thanks or something,
either on your website or in github.
Really Makes Me Smile That I Helped Out!
*/
