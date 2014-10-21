class TasksController < ApplicationController
  def index
    @task = current_user.tasks.new
    @tasks = current_user.tasks.incomplete
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      redirect_to tasks_path
    else
      @tasks = current_user.tasks.incomplete
      render :index
    end
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
