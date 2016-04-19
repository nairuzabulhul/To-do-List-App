$(document).ready(function() {

  
  //Add click listener to all lis the one that existing and the ones that are going to be created
  $("ul").on("click", "li", function() {

    $(this).toggleClass("completed");

  });

  //Delete the line 
  $("ul").on("click","span", function() {

    //Click on one specific span and fade out first then remove it 
    $(this).parent().fadeOut(500, function() {

      $(this).remove();
    });

    //Event Click
    event.stopPropagation();

  });
  
  
  //add Task to the list 
  $("input[type='text']").keypress("click", function(event){
 
    if(event.which === 13 && $(this).val() != ""){
      
      var newTask = $(this).val();
      $(this).val(""); 
      
      $("ul").append("<li><span> <i class='fa fa-trash'></i></span>" + newTask +"</li>");
    }
    
  });
  
  
  //Edit button to fade out the input
  $(".fa-pencil-square-o").on("click", function(){
    $("input[type='text']").fadeToggle();
    
  });
  
});