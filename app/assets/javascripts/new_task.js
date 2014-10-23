$(function() {
  var newTaskForm = $("form#new_task");
  var taskList = $("ul#incomplete-task-list");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var convo = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    convo.done(addTaskToList);
    convo.fail(onFailure);
    return false;
  };

  newTaskForm.submit(postTaskDataToServer);

  var onFailure = function(ajaxObject) {
    var html = ajaxObject.responseText;
    $("#errors").html(html);
  };

  var addTaskToList = function(task) {
    newTask = $(task);
    newTask.hide();
    taskList.prepend(newTask);
    newTask.fadeIn();
    $("#errors").html("");
    resetForm();
  };

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("#task_title").focus();
  };
});
