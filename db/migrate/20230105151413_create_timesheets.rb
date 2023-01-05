class CreateTimesheets < ActiveRecord::Migration[7.0]
  def change
    create_table :timesheets do |t|
      t.date :billing_date
      t.string :client
      t.string :project
      t.string :project_code
      t.float :hours
      t.boolean :is_billable
      t.string :first_name
      t.string :last_name
      t.float :billable_rate

      t.timestamps
    end
  end
end
