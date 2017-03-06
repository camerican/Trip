class CreateJourneys < ActiveRecord::Migration[5.0]
  def change
    create_table :journeys do |t|
      t.integer :duration
      t.string :start_address
      t.string :end_address

      t.timestamps
    end
  end
end
