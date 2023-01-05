class TimesheetsController < ApplicationController

  def index
    timesheets = Timesheet.all
    render json: timesheets, status: :ok
  end

  def create
    timesheet_entry = Timesheet.create(timesheet_params)
    render json: timesheet_entry, status: :created
  end

  private

  def timesheet_params
    params.permit(:billing_date, :client, :project, :project_code, :hours, :is_billable, :first_name, :last_name, :billable_rate)
  end
end
