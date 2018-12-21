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
demoUser = User.create(username: "demouser", email: "demo@user.com", password: "password")
nikki = User.create(username: "nikki", email: "nikki@email.com", password: "password")


#Daft Punk 
daft_punk = Artist.create(name: "Daft Punk")
dp_artist_photo = File.open("app/assets/images/daft_punk_artist.jpg")
daft_punk.photo.attach(io: dp_artist_photo, filename: 'daft_punk_artist.jpg')

dp_discovery = Album.create(title: "Discovery", year: 2001)
dp_discovery_photo = File.open("app/assets/images/daft_punk_discovery.png")
dp_discovery.cover_photo.attach(io: dp_discovery_photo, filename: 'dp_discovery.png')

dp_aerodynamic = Song.create(title: "Aerodynamic", album_id: dp_discovery.id)
dp_aerodynamic_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Daft+Punk+-+Aerodynamic.mp3")
dp_aerodynamic.audio.attach(io: dp_aerodynamic_audio, filename: 'dp_aerodynamic.mp3')

dp_digital_love = Song.create(title: "Superheroes", album_id: dp_discovery.id)
dp_digital_love_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Daft+Punk+-+Digital+Love.mp3")
dp_digital_love.audio.attach(io: dp_digital_love_audio, filename: 'dp_digital_love.jpg')

dp_harder_better_faster_stronger = Song.create(title: "Harder Better Faster Stronger", album_id: dp_discovery.id)
dp_harder_better_faster_stronger_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Daft+Punk+-+Harder%2C+Better%2C+Faster%2C+Stronger.mp3")
dp_harder_better_faster_stronger.audio.attach(io: dp_harder_better_faster_stronger_audio, filename: 'dp_harder_better_faster_stronger.jpg')

dp_one_more_time = Song.create(title: "One More Time", album_id: dp_discovery.id)
dp_one_more_time_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Daft+Punk+-+One+more+time.mp3")
dp_one_more_time.audio.attach(io: dp_one_more_time_audio, filename: 'dp_one_more_time.mp3')

dp_voyager = Song.create(title: "Voyager", album_id: dp_discovery.id)
dp_voyager_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Daft+Punk+-+Voyager.mp3")
dp_voyager.audio.attach(io: dp_voyager_audio, filename: 'dp_voyager.mp3')

#dp songs & albums  
dp_song_1 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_aerodynamic.id, ord: 1)
dp_song_2 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_digital_love.id, ord: 1)
dp_song_3 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_harder_better_faster_stronger.id, ord: 1)
dp_song_4 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_one_more_time.id, ord: 1)
dp_song_5 = ArtistSong.create(artist_id: daft_punk.id, song_id: dp_voyager.id, ord: 1)

dp_album_1 = ArtistAlbum.create(artist_id: daft_punk.id, album_id: dp_discovery.id)


#Bruno Mars
bruno_mars = Artist.create(name: "Bruno Mars")
bm_artist_photo = File.open("app/assets/images/bruno_mars_artist.jpg")
bruno_mars.photo.attach(io: bm_artist_photo, filename: 'bruno_mars_artist.jpg')

#Doo Wops & Hooligans
bm_doo_wops_hooligans = Album.create(title: "Doo-Wops & Hooligans", year: 2010)
bm_doo_wops_hooligans_photo = File.open("app/assets/images/bruno_mars_doo_wops_hooligans.png")
bm_doo_wops_hooligans.cover_photo.attach(io: bm_doo_wops_hooligans_photo, filename: 'bm_doo_wops_hooligans.png')

bm_grenade = Song.create(title: "Grenade", album_id: bm_doo_wops_hooligans.id)
bm_grenade_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars+%2C+Doo-Wops+%26+Hooligans+-+Grenade.mp3")
bm_grenade.audio.attach(io: bm_grenade_audio, filename: 'bm_grenade.mp3')

bm_just_the_way_you_are = Song.create(title: "Just The Way You Are", album_id: bm_doo_wops_hooligans.id)
bm_just_the_way_you_are_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars+%2C+Doo-Wops+%26+Hooligans+-+Just+The+Way+You+Are.mp3")
bm_just_the_way_you_are.audio.attach(io: bm_just_the_way_you_are_audio, filename: 'bm_just_the_way_you_are.mp3')

bm_lazy_song = Song.create(title: "The Lazy Song", album_id: bm_doo_wops_hooligans.id)
bm_lazy_song_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars+%2C+Doo-Wops+%26+Hooligans+-+The+Lazy+Song.mp3")
bm_lazy_song.audio.attach(io: bm_lazy_song_audio, filename: 'bm_lazy_song.mp3')

bm_marry_you = Song.create(title: "Marry You", album_id: bm_doo_wops_hooligans.id)
bm_marry_you_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars%2C+Doo-Wops+%26+Hooligans+-+Marry+You.mp3")
bm_marry_you.audio.attach(io: bm_marry_you_audio, filename: 'bm_marry_you.mp3')

#24K Magic
bm_24k_magic = Album.create(title: "24K Magic", year: 2016)
bm_24k_magic_photo = File.open("app/assets/images/bruno_mars_24k_magic.png")
bm_24k_magic.cover_photo.attach(io: bm_24k_magic_photo, filename: 'bm_24k_magic.png')

bm_finesse = Song.create(title: "Finesse", album_id: bm_doo_wops_hooligans.id)
bm_finesse_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars%2C+24K+Magic+-+Finesse.mp3")
bm_finesse.audio.attach(io: bm_finesse_audio, filename: 'bm_finesse.mp3')

bm_thats_what_i_like = Song.create(title: "That's What I Like", album_id: bm_doo_wops_hooligans.id)
bm_thats_what_i_like_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Bruno+Mars%2C+24K+Magic+-+That's+What+I+Like.mp3")
bm_thats_what_i_like.audio.attach(io: bm_thats_what_i_like_audio, filename: 'bm_thats_what_i_like.mp3')

#bm songs & albums 
bm_song_1 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_grenade.id, ord: 1)
bm_song_2 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_just_the_way_you_are.id, ord: 1)
bm_song_3 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_lazy_song.id, ord: 1)
bm_song_4 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_marry_you.id, ord: 1)
bm_song_5 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_just_the_way_you_are.id, ord: 1)
bm_song_6 = ArtistSong.create(artist_id: bruno_mars.id, song_id: bm_lazy_song.id, ord: 1)

bm_album_1 = ArtistAlbum.create(artist_id: bruno_mars.id, album_id: bm_doo_wops_hooligans.id)
bm_album_2 = ArtistAlbum.create(artist_id: bruno_mars.id, album_id: bm_24k_magic.id)


#Linkin Park
linkin_park = Artist.create(name: "Linkin Park")
lp_artist_photo = File.open("app/assets/images/linkin_park_artist.jpg")
linkin_park.photo.attach(io: lp_artist_photo, filename: 'linkin_park_artist.jpg')

lp_minutes_to_midnight = Album.create(title: "Minutes to Midnight", year: 2007)
lp_minutes_to_midnight_photo = File.open("app/assets/images/linkin_park_minutes_to_midnight.png")
lp_minutes_to_midnight.cover_photo.attach(io: lp_minutes_to_midnight_photo, filename: 'lp_minutes_to_midnight.png')

# lp_hybrid_theory = Album.create(title: "Minutes to Midnight", year: 2007)
# lp_hybrid_theory_photo = File.open("app/assets/images/linkin_park_hybrid_theory.png")
# lp_hybrid_theory.cover_photo.attach(io: lp_hybrid_theory_photo, filename: 'lp_hybrid_theory.png')

lp_leave_out_all_the_rest = Song.create(title: "Leave Out All The Rest", album_id: lp_minutes_to_midnight.id)
lp_leave_out_all_the_rest_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+03+Leave+Out+All+The+Rest.mp3")
lp_leave_out_all_the_rest.audio.attach(io: lp_leave_out_all_the_rest_audio, filename: 'lp_leave_out_all_the_rest.mp3')

lp_shadow_of_the_day = Song.create(title: "Shadow of The Day", album_id: lp_minutes_to_midnight.id)
lp_shadow_of_the_day_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+05+Shadow+Of+The+Day.mp3")
lp_shadow_of_the_day.audio.attach(io: lp_shadow_of_the_day_audio, filename: 'lp_shadow_of_the_day.mp3')

lp_what_ive_done = Song.create(title: "What I've Done", album_id: lp_minutes_to_midnight.id)
lp_what_ive_done_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+06+What+I've+Done.mp3")
lp_what_ive_done.audio.attach(io: lp_what_ive_done_audio, filename: 'lp_what_ive_done.mp3')

lp_hands_held_high = Song.create(title: "Hands Held High", album_id: lp_minutes_to_midnight.id)
lp_hands_held_high_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+07+Hands+Held+High.mp3")
lp_hands_held_high.audio.attach(io: lp_hands_held_high_audio, filename: 'lp_hands_held_high.mp3')

lp_in_pieces = Song.create(title: "In Pieces", album_id: lp_minutes_to_midnight.id)
lp_in_pieces_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+11+In+Pieces.mp3")
lp_in_pieces.audio.attach(io: lp_in_pieces_audio, filename: 'lp_in_pieces.mp3')

lp_in_the_end = Song.create(title: "In The End")
lp_in_the_end_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Linkin+Park+-+08+In+The+End.mp3")
lp_in_the_end.audio.attach(io: lp_in_the_end_audio, filename: 'lp_in_the_end.mp3')

#numb / encore !!

# #Linkin Park / Jay Z Songs 
# lp_in_the_end = Song.create(title: "In The End", album_id: lp_hybrid_theory.id)
# jz_numb_encore = Song.create(title: "Numb/Encore")

#lp songs & albums 
lp_song_1 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_leave_out_all_the_rest.id, ord: 1)
lp_song_2 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_shadow_of_the_day.id, ord: 1)
lp_song_3 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_what_ive_done.id, ord: 1)
lp_song_4 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_hands_held_high.id, ord: 1)
lp_song_5 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_in_pieces.id, ord: 1)
lp_song_6 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_in_the_end.id, ord: 1)

lp_album_1 = ArtistAlbum.create(artist_id: linkin_park.id, album_id: lp_minutes_to_midnight.id)


#Porter Robinson
porter_robinson = Artist.create(name: "Porter Robinson")
pr_artist_photo = File.open("app/assets/images/porter_robinson_artist.png")
porter_robinson.photo.attach(io: pr_artist_photo, filename: 'porter_robinson_artist.jpg')

pr_worlds = Album.create(title: "Worlds", year: 2014)
pr_worlds_photo = File.open("app/assets/images/porter_robinson_worlds.png")
pr_worlds.cover_photo.attach(io: pr_worlds_photo, filename: 'pr_worlds.png')

pr_divinity = Song.create(title: "Divinity", album_id: pr_worlds.id)
pr_divinity_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+01+Divinity.mp3")
pr_divinity.audio.attach(io: pr_divinity_audio, filename: 'pr_divinity.mp3')

pr_sad_machine = Song.create(title: "Sad Machine", album_id: pr_worlds.id)
pr_sad_machine_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+02+Sad+Machine.mp3")
pr_sad_machine.audio.attach(io: pr_sad_machine_audio, filename: 'pr_sad_machine.mp3')

pr_years_of_war = Song.create(title: "Years of War", album_id: pr_worlds.id)
pr_years_of_war_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+03+Years+Of+War+(feat.+Breanne+Duren+%26+Sean+Caskey).mp3")
pr_years_of_war.audio.attach(io: pr_years_of_war_audio, filename: 'pr_years_of_war.mp3')

pr_lionhearted = Song.create(title: "Lionhearted", album_id: pr_worlds.id)
pr_lionhearted_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+09+Lionhearted+(feat.+Urban+Cone).mp3")
pr_lionhearted.audio.attach(io: pr_lionhearted_audio, filename: 'pr_lionhearted.mp3')

pr_sea_of_voices = Song.create(title: "Sea of Voices", album_id: pr_worlds.id)
pr_sea_of_voices_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+10+Sea+of+Voices.mp3")
pr_sea_of_voices.audio.attach(io: pr_sea_of_voices_audio, filename: 'pr_sea_of_voices.mp3')

pr_goodbye_to_a_world = Song.create(title: "Goodbye To A World", album_id: pr_worlds.id)
pr_goodbye_to_a_world_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson%2C+Worlds+-+12+Goodbye+To+A+World.mp3")
pr_goodbye_to_a_world.audio.attach(io: pr_goodbye_to_a_world_audio, filename: 'pr_goodbye_to_a_world.mp3')

pr_shelter = Song.create(title: "Shelter")
pr_shelter_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Porter+Robinson+-+Shelter.mp3")
pr_shelter.audio.attach(io: pr_shelter_audio, filename: 'pr_shelter.mp3')

#pr songs & albums 
pr_song_1 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_divinity.id, ord: 1)
pr_song_2 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_sad_machine.id, ord: 1)
pr_song_3 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_years_of_war.id, ord: 1)
pr_song_4 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_lionhearted.id, ord: 1)
pr_song_5 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_sea_of_voices.id, ord: 1)
pr_song_6 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_goodbye_to_a_world.id, ord: 1)
pr_song_7 = ArtistSong.create(artist_id: porter_robinson.id, song_id: pr_shelter.id, ord: 1)

pr_album_1 = ArtistAlbum.create(artist_id: porter_robinson.id, album_id: pr_worlds.id)


#Tycho 
tycho = Artist.create(name: "Tycho")
tycho_artist_photo = File.open("app/assets/images/tycho_artist.jpg")
tycho.photo.attach(io: tycho_artist_photo, filename: 'tycho_artist.jpg')

tycho_dive = Album.create(title: "Dive", year: 2011)
tycho_dive_photo = File.open("app/assets/images/tycho_dive.png")
tycho_dive.cover_photo.attach(io: tycho_dive_photo, filename: 'tycho_dive.png')

ty_a_walk = Song.create(title: "A Walk", album_id: tycho_dive.id)
ty_a_walk_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Tycho+-+01+A+Walk.mp3")
ty_a_walk.audio.attach(io: ty_a_walk_audio, filename: 'ty_a_walk.mp3')

ty_daydream = Song.create(title: "Daydream", album_id: tycho_dive.id)
ty_daydream_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Tycho+-+03+Daydream.mp3")
ty_daydream.audio.attach(io: ty_daydream_audio, filename: 'ty_daydream.mp3')

ty_dive = Song.create(title: "Dive", album_id: tycho_dive.id)
ty_dive_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Tycho+-+04+Dive.mp3")
ty_dive.audio.attach(io: ty_dive_audio, filename: 'ty_dive.mp3')

ty_coastal_brake = Song.create(title: "Coastal Break", album_id: tycho_dive.id)
ty_coastal_brake_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Tycho+-+05+Coastal+Brake.mp3")
ty_coastal_brake.audio.attach(io: ty_coastal_brake_audio, filename: 'ty_coastal_brake.mp3')

ty_melanine = Song.create(title: "Melanine", album_id: tycho_dive.id)
ty_melanine_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Tycho+-+07+Melanine.mp3")
ty_melanine.audio.attach(io: ty_melanine_audio, filename: 'ty_melanine.mp3')

#tycho songs & albums 
tycho_song_1 = ArtistSong.create(artist_id: tycho.id, song_id: ty_a_walk.id, ord: 1)
tycho_song_2 = ArtistSong.create(artist_id: tycho.id, song_id: ty_daydream.id, ord: 1)
tycho_song_3 = ArtistSong.create(artist_id: tycho.id, song_id: ty_dive.id, ord: 1)
tycho_song_4 = ArtistSong.create(artist_id: tycho.id, song_id: ty_coastal_brake.id, ord: 1)
tycho_song_5 = ArtistSong.create(artist_id: tycho.id, song_id: ty_melanine.id, ord: 1)

tycho_album_1 = ArtistAlbum.create(artist_id: tycho.id, album_id: tycho_dive.id)



#Odesza
odesza = Artist.create(name: "Odesza")
odesza_artist_photo = File.open("app/assets/images/odesza_artist.jpg")
odesza.photo.attach(io: odesza_artist_photo, filename: 'odesza_artist.jpg')

od_in_return = Album.create(title: "In Return", year: 2014)
od_in_return_photo = File.open("app/assets/images/odesza_in_return.png")
od_in_return.cover_photo.attach(io: od_in_return_photo, filename: 'odesza_in_return.png')

od_say_my_name = Song.create(title: "Say My Name", album_id: od_in_return.id)
od_say_my_name_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+02+Say+My+Name+(feat.+Zyra).mp3")
od_say_my_name.audio.attach(io: od_say_my_name_audio, filename: 'od_say_my_name.mp3')

od_all_we_need = Song.create(title: "All We Need", album_id: od_in_return.id)
od_all_we_need_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+04+All+We+Need+(feat.+Shy+Girls).mp3")
od_all_we_need.audio.attach(io: od_all_we_need_audio, filename: 'od_all_we_need.mp3')

od_its_only = Song.create(title: "Its Only", album_id: od_in_return.id)
od_its_only_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+09+Its+Only+(feat.+Zyra).mp3")
od_its_only.audio.attach(io: od_its_only_audio, filename: 'od_its_only.mp3')

od_memories_that_you_call = Song.create(title: "Memories That You Call", album_id: od_in_return.id)
od_memories_that_you_call_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+11+Memories+That+You+Call+(feat.+Monsoonsiren).mp3")
od_memories_that_you_call.audio.attach(io: od_memories_that_you_call_audio, filename: 'od_memories_that_you_call.mp3')

od_sun_models = Song.create(title: "Sun Models", album_id: od_in_return.id)
od_sun_models_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+12+Sun+Models+(feat.+Madelyn+Grant).mp3")
od_sun_models.audio.attach(io: od_sun_models_audio, filename: 'od_sun_models.mp3')

od_light = Song.create(title: "Light", album_id: od_in_return.id)
od_light_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+14+Light+(feat.+Little+Dragon).mp3")
od_light.audio.attach(io: od_light_audio, filename: 'od_light.mp3')

od_line_of_sight = Song.create(title: "Line of Sight")
od_line_of_sight_audio = EzDownload.open("https://s3-us-west-1.amazonaws.com/pandamonium-resources/Odesza+-+Line+Of+Sight+(feat.+WYNNE+%26+Mansionair).mp3")
od_line_of_sight.audio.attach(io: od_line_of_sight_audio, filename: 'od_line_of_sight.mp3')

#odesza songs & albums 
odesza_song_1 = ArtistSong.create(artist_id: odesza.id, song_id: od_say_my_name.id, ord: 1)
odesza_song_2 = ArtistSong.create(artist_id: odesza.id, song_id: od_all_we_need.id, ord: 1)
odesza_song_3 = ArtistSong.create(artist_id: odesza.id, song_id: od_its_only.id, ord: 1)
odesza_song_4 = ArtistSong.create(artist_id: odesza.id, song_id: od_memories_that_you_call.id, ord: 1)
odesza_song_5 = ArtistSong.create(artist_id: odesza.id, song_id: od_sun_models.id, ord: 1)
odesza_song_6 = ArtistSong.create(artist_id: odesza.id, song_id: od_light.id, ord: 1)
odesza_song_7 = ArtistSong.create(artist_id: odesza.id, song_id: od_line_of_sight.id, ord: 1)

odesza_album_1 = ArtistAlbum.create(artist_id: odesza.id, album_id: od_in_return.id)



# od_line_of_sight = Song.create(title: "Line of Sight", album_id: od_a_moment_apart.id)
# od_falls = Song.create(title: "Falls", album_id: od_a_moment_apart.id)
# od_across_the_room = Song.create(title: "Across The Room", album_id: od_a_moment_apart.id)
# od_higher_ground = Song.create(title: "Higher Ground", album_id: od_a_moment_apart.id)







#Playlists 
playlist1 = Playlist.create(name: "Chill Vibes", creator_id: demoUser.id, public: false)
playlist1.photo.attach(io: File.open("app/assets/images/sleepy_panda.jpg"), filename: 'playlist1_photo.jpg')

playlist2 = Playlist.create(name: "Workout", creator_id: demoUser.id, public: true)
playlist2.photo.attach(io: File.open("app/assets/images/hello_panda.jpg"), filename: 'playlist1_photo.jpg')

playlist3 = Playlist.create(name: "Study", creator_id: demoUser.id, public: false)
playlist3.photo.attach(io: File.open("app/assets/images/unicorn_panda.jpgg"), filename: 'playlist1_photo.jpg')

playlist4 = Playlist.create(name: "Jammin ~", creator_id: demoUser.id, public: false)
playlist4.photo.attach(io: File.open("app/assets/images/new_playlist.png"), filename: 'playlist1_photo.jpg')

playlist5 = Playlist.create(name: "Rainy days", creator_id: demoUser.id, public: false)
playlist5.photo.attach(io: File.open("app/assets/images/new_playlist.png"), filename: 'playlist1_photo.jpg')

playlist6 = Playlist.create(name: "Happy days", creator_id: nikki.id, public: true)
playlist6.photo.attach(io: File.open("app/assets/images/new_playlist.png"), filename: 'playlist1_photo.jpg')

playlist7 = Playlist.create(name: "Carefree weeeeee", creator_id: nikki.id, public: false)
playlist7.photo.attach(io: File.open("app/assets/images/new_playlist.png"), filename: 'playlist1_photo.jpg')


#PlaylistSongs 
playlist1_song_1 = PlaylistSong.create(playlist_id: playlist1.id, song_id: od_say_my_name.id)
playlist1_song_2 = PlaylistSong.create(playlist_id: playlist1.id, song_id: od_line_of_sight.id)
playlist1_song_3 = PlaylistSong.create(playlist_id: playlist1.id, song_id: ty_dive.id)
playlist1_song_4 = PlaylistSong.create(playlist_id: playlist1.id, song_id: ty_melanine.id)
playlist1_song_5 = PlaylistSong.create(playlist_id: playlist4.id, song_id: pr_shelter.id)
playlist1_song_6 = PlaylistSong.create(playlist_id: playlist4.id, song_id: bm_lazy_song.id)

playlist2_song_1 = PlaylistSong.create(playlist_id: playlist2.id, song_id: lp_in_the_end.id)
playlist2_song_2 = PlaylistSong.create(playlist_id: playlist2.id, song_id: lp_what_ive_done.id)
playlist2_song_3 = PlaylistSong.create(playlist_id: playlist2.id, song_id: dp_one_more_time.id)
playlist2_song_3 = PlaylistSong.create(playlist_id: playlist2.id, song_id: dp_harder_better_faster_stronger.id)

playlist3_song_1 = PlaylistSong.create(playlist_id: playlist3.id, song_id: ty_a_walk.id)
playlist3_song_2 = PlaylistSong.create(playlist_id: playlist3.id, song_id: od_light.id)
playlist3_song_3 = PlaylistSong.create(playlist_id: playlist3.id, song_id: dp_digital_love.id)

playlist4_song_1 = PlaylistSong.create(playlist_id: playlist4.id, song_id: od_line_of_sight.id)
playlist4_song_2 = PlaylistSong.create(playlist_id: playlist4.id, song_id: dp_aerodynamic.id)
playlist4_song_3 = PlaylistSong.create(playlist_id: playlist4.id, song_id: lp_hands_held_high.id)
playlist4_song_4 = PlaylistSong.create(playlist_id: playlist4.id, song_id: pr_lionhearted.id)
playlist4_song_5 = PlaylistSong.create(playlist_id: playlist4.id, song_id: pr_shelter.id)



# #ArtistSongs


# artist_song_4 = ArtistSong.create(artist_id: linkin_park.id, song_id: lp_in_the_end.id, ord: 1)
# artist_song_5 = ArtistSong.create(artist_id: linkin_park.id, song_id: jz_numb_encore.id, ord: 2)

# artist_song_6 = ArtistSong.create(artist_id: jay_z.id, song_id: jz_numb_encore.id, ord: 1)

# artist_song_7 = ArtistSong.create(artist_id: odesza.id, song_id: od_higher_ground.id, ord: 1)
# artist_song_8 = ArtistSong.create(artist_id: odesza.id, song_id: od_across_the_room.id, ord: 1)
# artist_song_9 = ArtistSong.create(artist_id: odesza.id, song_id: od_falls.id, ord: 1)
# artist_song_10 = ArtistSong.create(artist_id: odesza.id, song_id: od_line_of_sight.id, ord: 1)

# #ArtistAlbums
# artist_album_2 = ArtistAlbum.create(artist_id: linkin_park.id, album_id: lp_hybrid_theory.id)
# artist_album_3 = ArtistAlbum.create(artist_id: odesza.id, album_id: od_a_moment_apart.id)
