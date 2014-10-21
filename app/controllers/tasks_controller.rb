class TasksController < ApplicationController
  def index
    @task = current_user.tasks.new
    @tasks = current_user.tasks.all
  end

  def create
    task = current_user.tasks.new(task_params)
    if task.save
      redirect_to tasks_path
    else
      @task = task
      @tasks = current_user.tasks.all
      render :index
    end
  end

  private
  def task_params
    params.require(:task).permit(:title, :description)
  end
end
