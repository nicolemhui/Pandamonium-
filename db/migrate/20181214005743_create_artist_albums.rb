class CreateArtistAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_albums do |t|
      t.integer :artist_id, null: false
      t.integer :album_id, null: false 

      t.timestamps
    end

    add_index :artist_albums, :artist_id
    add_index :artist_albums, :album_id
  end
end
