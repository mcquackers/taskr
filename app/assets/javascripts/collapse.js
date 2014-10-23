$(function() {
  var toggleList = function() {
    var header = $(this);
    var list = $("#" + header.data("list-id"));
    header.toggleClass("collapsed");
    list.toggle();
  };
  $("body").on("click", "#incomplete-task-header, #completed-task-header", toggleList);
})
