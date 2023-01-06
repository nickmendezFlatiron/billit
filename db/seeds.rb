require 'csv'
require 'byebug'

path = "db/GM_Coding_Exercise_Sample_Data_-_GM_Coding_Exercise_Sample_Data.csv"

puts "seeding csv file..."

csv_file = File.read(path)
csv = CSV.parse(csv_file, headers: true)
csv.each do |row|
  split = row["billing_date"].split("/")

  billing_date = "#{split[2].to_i + 2000}/#{split[0]}/#{split[1]}"
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
  
end
  


puts "seeding completed!"