$(function() {
  window.newTaskForm = $("form#new_task");
  window.taskList = $("ul#incomplete-task-list");
  newTaskForm.submit(postTaskDataToServer);
});


var postTaskDataToServer = function() {
  var taskData = newTaskForm.serialize();
  var convo = $.ajax({ url: "/tasks", type: "POST", data: taskData });
  convo.done(addTaskToList);
  resetForm();
  return false;
};
var addTaskToList = function(task) {
  taskList.prepend(task);
};

var resetForm = function() {
 newTaskForm.find("#task_title, #task_description").val("");
 newTaskForm.find("#task_title").focus();
};
