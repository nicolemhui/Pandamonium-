class ChangeColumnSongs < ActiveRecord::Migration[5.2]
  def change
    remove_index :songs, :album_id
  end
end
