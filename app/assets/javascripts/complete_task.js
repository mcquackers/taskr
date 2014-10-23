$(function() {
  // console.log(editTaskForms);
  var incompleteTaskList = $("#incomplete-task-list");
  var completedTaskList = $("#completed-task-list");

  var patchTaskDataToServer = function() {
    var theForm = $(this);
    var taskData = theForm.serialize();
    var convo = $.ajax({ url: theForm.attr("action"), type: "PATCH", data: taskData });
    convo.done(updateFunctionForElement(theForm));
    return false;
  };

  var updateFunctionForElement = function(element) {
    return function(updatedTask) {
      element.parent().fadeOut();
      eTask = $(updatedTask);
      eTask.hide();
      if(element.hasClass("incomplete")){
        completedTaskList.append(eTask);
        eTask.fadeIn();
      } else {
        incompleteTaskList.prepend(eTask);
        eTask.fadeIn();
      }
    };
  };

  // var moveToComplete(id)
  $("body").on("submit", ".incomplete, .completed", patchTaskDataToServer);
});
