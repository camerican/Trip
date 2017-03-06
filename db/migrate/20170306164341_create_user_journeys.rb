class CreateUserJourneys < ActiveRecord::Migration[5.0]
  def change
    create_table :user_journeys do |t|

      t.timestamps
    end
  end
end
