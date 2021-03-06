$(function() {
  var taskList = $("ul#completed-task-list");

  var deleteDataFromServer = function() {
    var button = $(this);
    var taskData = button.serialize();
    var convo = $.ajax({ url: button.attr("action") , type: "DELETE", data: taskData });
    $(this).parent("li").fadeOut();
   // convo.done(removeTaskFromList);
    return false;
  };

  var removeTaskFromList = function(task) {
    taskList.find("#task_" + task.data("id")).fadeOut();
  };

  //$("#completed-task-list").on("submit", ".delete", deleteDataFromServer);
  $("body").on("submit", ".delete", deleteDataFromServer);
});
