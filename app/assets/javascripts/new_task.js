$(function() {
  window.newTaskForm = $("form#new_task");
  window.taskList = $("ul#task-list");
  newTaskForm.submit(postTaskDataToServer);
});


var postTaskDataToServer = function() {
  var taskData = newTaskForm.serialize();
  var convo = $.ajax({ url: "/tasks", type: "POST", data: taskData });
  convo.done(addTaskToList);
  $("input[type=text]").val("");
  return false;
};
var addTaskToList = function(task) {
  taskList.prepend(task);
};

