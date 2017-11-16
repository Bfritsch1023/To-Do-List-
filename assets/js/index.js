
// did exercise using Udemy Exercises 
//I have been using to learn
$("ul").on("click", "li", function(){
	$(this).toggleClass('completed');
});


$("ul").on("click", 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type = 'text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-times'></i></span>" + todoText + "</li>");
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type = 'text'").fadeToggle();
});

  $( function() {
    $( "#sortList" ).sortable({
      revert: true
    });
    $( "#move" ).draggable({
      connectToSortable: "#sortList",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
  } );
