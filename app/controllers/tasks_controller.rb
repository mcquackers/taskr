class TasksController < ApplicationController
  def index
    @task = current_user.tasks.new
    @incomplete_tasks = current_user.tasks.incomplete
    @completed_tasks = current_user.tasks.completed
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      render @task
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

  def destroy
    Task.destroy(params[:id])
    redirect_to tasks_path
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
