class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.boolean :public, default: false
      
      t.timestamps
    end

    add_index :playlists, :name
    add_index :playlists, :creator_id
  end
end
