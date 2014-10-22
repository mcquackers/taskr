$(function() {
  window.newTaskForm = $("form#new_task");
  window.taskList = $("ul#incomplete-task-list");
  newTaskForm.submit(postTaskDataToServer);
});


var postTaskDataToServer = function() {
  var taskData = newTaskForm.serialize();
  var convo = $.ajax({ url: "/tasks", type: "POST", data: taskData });
  convo.done(addTaskToList);
  convo.fail(onFailure);
  return false;
};
var onFailure = function(ajaxObject) {
  var html = ajaxObject.responseText;
  $("#errors").html(html);
};

var addTaskToList = function(task) {
  taskList.prepend(task);
  $("#errors").html("");
  resetForm();
};

var resetForm = function() {
 newTaskForm.find("#task_title, #task_description").val("");
 newTaskForm.find("#task_title").focus();
};
