class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :user_id
      t.integer :saveable_id
      t.string :saveable_type
      t.references :saveable, polymorphic: true, index: true

      t.timestamps
    end
  end
end

