class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render :index
  end

  def show
  end

  def create
  end

  def update
    
  end

  def destroy
    
  end

  private
  def project_params
    
  end
end
