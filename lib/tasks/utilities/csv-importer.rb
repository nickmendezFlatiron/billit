require 'csv'
require 'byebug'
require_relative '../app/models/timesheet'

# Change path according to desired the csv path
# Make sure to call the method at the end of the file
path = "/Users/nickmendez/Development/code/side-projects/giant-machines/billit/client/src/assets/GM_Coding_Exercise_Sample_Data_-_GM_Coding_Exercise_Sample_Data.csv"

def import path
  # (:billing_date, :client, :project, :project_code, :hours, :is_billable, :first_name, :last_name, :billable_rate)
    csv_file = File.read(path)
    csv = CSV.parse(csv_file, headers: true)
    csv.each do |row|
      billing_date = row["billing_date"]
      client = row["client"]
      project = row["project"]
      project_code = row["project_code"]
      hours = row["hours"].to_f
      is_billable = row["is_billable"].downcase == "yes" ? true : false 
      first_name = row["first_name"]
      last_name = row["last_name"]
      billable_rate = row["billable_rate"].to_f

      timesheet = Timesheet.create!(
        billing_date: billing_date, 
        client: client, 
        project: project, 
        project_code: project_code, 
        hours: hours, 
        is_billable: is_billable, 
        first_name: first_name, 
        last_name: last_name, 
        billable_rate:billable_rate
      )
      puts timesheet
    end
  
end

# import( path)