class Timesheet < ApplicationRecord
  # (:billing_date, :client, :project, :project_code, :hours, :is_billable, :first_name, :last_name, :billable_rate)
  validates :client , presence: true
  validates :project, presence: true
  validates :project_code, presence: true
  validates :is_billable, inclusion: [true, false]
  validates :hours, presence: true , numericality: {greater_than_or_equal_to: 0}
  validates :billable_rate, presence: true , numericality: {greater_than_or_equal_to: 0}
  validates :first_name, presence: true, format: {with: /[a-zA-z]/ , message: "Enter only the first name using letters."} 
  validates :last_name, presence: true , format: {with: /[a-zA-z]/ , message: "Enter only the last name using letters."} 
end
