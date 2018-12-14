class CreateArtistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_songs do |t|
      t.integer :artist_id, null: false
      t.integer :song_id, null: false 
      t.integer :ord, null: false 

      t.timestamps
    end

    add_index :artist_songs, :artist_id
    add_index :artist_songs, :song_id
  end
end
