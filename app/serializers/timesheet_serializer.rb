class TimesheetSerializer < ActiveModel::Serializer
  attributes :id , :billing_date, :client, :project, :project_code, :hours, :is_billable, :first_name, :last_name, :billable_rate
end
