# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Artist.destroy_all
Album.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all
ArtistAlbum.destroy_all
ArtistSong.destroy_all

#Users
demoUser = User.create!(username: "demouser", email: "demo@user.com", password: "password")
nikki = User.create!(username: "nikki", email: "nikki@email.com", password: "password")


#Aritsts
daft_punk = Artist.create!(name: "Daft Punk")
dp_artist_photo = File.open("app/assets/images/daft_punk_artist_pic.jpg")
daft_punk.photo.attach(io: dp_artist_photo, filename: 'daft_punk_artist.jpg')

linkin_park = Artist.create(name: "Linkin Park")
lp_artist_photo = File.open("app/assets/images/linkin_park_group.jpg")
linkin_park.photo.attach(io: lp_artist_photo, filename: 'linkin_park_artist.jpg')

jay_z = Artist.create(name: "Jay-Z")
odesza = Artist.create(name: "Odesza")


#Albums
dp_discovery = Album.create!(title: "Discovery", year: 2001)
dp_discovery_photo = File.open("app/assets/images/daft_punk_discovery.png")
dp_discovery.cover_photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')


dp_ram = Album.create(title: "Random Access Memories", year: 2013)
dp_discovery_photo = File.open("app/assets/images/daft_punk_discovery.png")
dp_ram.cover_photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')

lp_hybrid_theory = Album.create(title: "Hybrid Theory", year: 2000)
dp_discovery_photo = File.open("app/assets/images/daft_punk_discovery.png")
lp_hybrid_theory.cover_photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')

od_a_moment_apart = Album.create(title: "A Moment Apart", year: 2017)
dp_discovery_photo = File.open("app/assets/images/daft_punk_discovery.png")
od_a_moment_apart.cover_photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')


#Daft Punk - Discovery Songs
dp_aerodynamic = Song.create(title: "Aerodynamic", album_id: dp_discovery.id)
# dp_discovery_photo = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-dev/daft_punk_discovery.png")
# dp_aerodynamic.photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')

dp_superheroes = Song.create(title: "Superheroes", album_id: dp_discovery.id)
# dp_discovery_photo = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-dev/daft_punk_discovery.png")
# dp_superheroes.photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')

dp_one_more_time = Song.create(title: "One More Time", album_id: dp_discovery.id)
# dp_discovery_photo = EzDownload.ospen("https://s3-us-west-1.amazonaws.com/pandamonium-dev/daft_punk_discovery.png")
# dp_one_more_time.photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')


#Linkin Park / Jay Z Songs 
lp_in_the_end = Song.create(title: "In The End", album_id: lp_hybrid_theory.id)
jz_numb_encore = Song.create!(title: "Numb/Encore")


#Odesza Songs
od_line_of_sight = Song.create(title: "Line of Sight", album_id: od_a_moment_apart.id)
od_falls = Song.create!(title: "Falls", album_id: od_a_moment_apart.id)
od_across_the_room = Song.create!(title: "Across The Room", album_id: od_a_moment_apart.id)
od_higher_ground = Song.create!(title: "Higher Ground", album_id: od_a_moment_apart.id)


#Playlists 
playlist1 = Playlist.create(name: "Chill Vibes", creator_id: demoUser.id, public: false)
playlist2 = Playlist.create(name: "Workout", creator_id: demoUser.id, public: true)
playlist3 = Playlist.create(name: "Study", creator_id: demoUser.id, public: false)
playlist4 = Playlist.create(name: "Jammin ~", creator_id: demoUser.id, public: false)
playlist5 = Playlist.create(name: "Rainy days", creator_id: demoUser.id, public: false)

playlist6 = Playlist.create(name: "Happy days", creator_id: nikki.id, public: true)
playlist7 = Playlist.create(name: "Carefree weeeeee", creator_id: nikki.id, public: false)


#PlaylistSongs 
playlist_song_1 = PlaylistSong.create(playlist_id: playlist1.id, song_id: od_across_the_room.id)
playlist_song_2 = PlaylistSong.create(playlist_id: playlist1.id, song_id: od_falls.id)
playlist_song_3 = PlaylistSong.create(playlist_id: playlist1.id, song_id: dp_one_more_time.id)

playlist_song_4 = PlaylistSong.create(playlist_id: playlist2.id, song_id: lp_in_the_end.id)
playlist_song_5 = PlaylistSong.create(playlist_id: playlist2.id, song_id: jz_numb_encore.id)
playlist_song_6 = PlaylistSong.create(playlist_id: playlist2.id, song_id: dp_one_more_time.id)


#ArtistSongs
artist_song_1 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_aerodynamic.id, ord: 1)
artist_song_2 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_superheroes.id, ord: 1)
artist_song_3 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_one_more_time.id, ord: 1)

artist_song_4 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_in_the_end.id, ord: 1)
artist_song_5 = ArtistSong.create(artist_id: linkin_park.id, song_id: jz_numb_encore.id, ord: 2)

artist_song_6 = ArtistSong.create(artist_id: jay_z.id, song_id: jz_numb_encore.id, ord: 1)

artist_song_7 = ArtistSong.create(artist_id: odesza.id, song_id: od_higher_ground.id, ord: 1)
artist_song_8 = ArtistSong.create(artist_id: odesza.id, song_id: od_across_the_room.id, ord: 1)
artist_song_9 = ArtistSong.create(artist_id: odesza.id, song_id: od_falls.id, ord: 1)
artist_song_10 = ArtistSong.create(artist_id: odesza.id, song_id: od_line_of_sight.id, ord: 1)

#ArtistAlbums
artist_album_1 = ArtistAlbum.create(artist_id: daft_punk.id, album_id: dp_discovery.id)
artist_album_2 = ArtistAlbum.create(artist_id: linkin_park.id, album_id: lp_hybrid_theory.id)
artist_album_3 = ArtistAlbum.create(artist_id: odesza.id, album_id: od_a_moment_apart.id)
