$(function() {
  var makeEdit = function(){
    $(this).attr("contenteditable", true).focus();
  };
  var isEnter = function(event) {
    if(event.keyCode === 13) {
      var updatedData = $(this);
      updatedData.attr("contenteditable", false);
      updateTaskData(updatedData) 
    }
  };

  var updateTaskData = function(updatedData) {
    var key = updatedData.attr("class");
    var data = {};
    data[key] = updatedData.text();
    var convo = $.ajax({ 
      url: "/tasks/"+updatedData.parent().data("id"), 
      type: "PATCH", 
      data: {task: data}
    });
    convo.done(updatedData.highlight());
    return false; 
  };


  $(document).on("keydown", ".title, .description", isEnter);
  $("body").on("click", ".title, .description", makeEdit);
});
