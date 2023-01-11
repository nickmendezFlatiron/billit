class TimesheetsController < ApplicationController

  def index
    timesheets = Timesheet.all
    render json: timesheets.order(project: :asc), status: :ok
  end

  def create  
    if Timesheet.find_by(timesheet_params)
      render json: ["Duplicate entry found in the database."] , status: :unprocessable_entity
    else
      timesheet_entry = Timesheet.create!(timesheet_params)
      render json: timesheet_entry, status: :created
    end
  end

  private

  def timesheet_params
    params.permit(:billing_date, :client, :project, :project_code, :hours, :is_billable, :first_name, :last_name, :billable_rate)
  end

end
