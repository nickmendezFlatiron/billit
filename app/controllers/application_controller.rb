class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  private

  def render_not_found error
    render json: "#{error.model} Not Found", status: :not_found
  end

  def render_unprocessable_entity invalid
    render json: invalid.record.errors.full_messages , status: :unprocessable_entity
  end
end
