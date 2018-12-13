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

#Users
demoUser = User.create!(username: "demouser", email: "demo@user.com", password: "password")
nikki = User.create!(username: "nikki", email: "nikki@email.com", password: "password")

#Aritsts
daft_punk = Artist.create(name: "Daft Punk")
blink_182 = Artist.create(name: "Blink 182")

#Albums
dp_discovery = Album.create(title: "Discovery", year: 2001)
dp_ram = Album.create(title: "Random Access Memories", year: 2013)


#Songs
dp_aerodynamic = Song.create(title: "Aerodynamic", album_id: 1)
dp_one_more_time = Song.create(title: "One More Time", album_id: 1)