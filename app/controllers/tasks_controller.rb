class TasksController < ApplicationController
  def index
    @task = current_user.tasks.new
    @incomplete_tasks = current_user.tasks.incomplete.order("created_at DESC")
    @completed_tasks = current_user.tasks.completed.order("created_at DESC")
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      render @task
    else
      render partial: "error_messages",
        locals: {target: @task},
        status: 422
    end
  end

  def update
    task = Task.find(params[:id])
    task.update(task_params)
    render task
  end

  def destroy
    task = Task.find(params[:id])
    Task.destroy(params[:id])
    render json: { id: task.id }
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
