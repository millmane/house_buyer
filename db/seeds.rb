House.delete_all
User.delete_all

User.create!(
  username: "guest",
  password: "password"
)

User.create!(
  username: "eric",
  password: "password"
)

picture_urls = [
  "http://res.cloudinary.com/millmane/image/upload/v1475257973/house_buyer/seed/pexels-photo-106399_lw3pku.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258033/house_buyer/seed/pexels-photo_evpobd.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258318/house_buyer/seed/pexels-photo-89184_cuhrp6.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258145/house_buyer/seed/country-house-building-home-architecture-40219_qxqltd.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258116/house_buyer/seed/landing-stage-sea-sky-night_xns1m8.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258216/house_buyer/seed/pexels-photo_hogojy.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258205/house_buyer/seed/pexels-photo-105829_rosvvt.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258096/house_buyer/seed/pexels-photo-129112_kfyhqi.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475257993/house_buyer/seed/pexels-photo-164516_fi6bvt.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258265/house_buyer/seed/pexels-photo-168608_mgb7nu.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475258298/house_buyer/seed/pexels-photo-60774_sbyze8.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262090/house_buyer/seed/mountains-village-forest-trees.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262082/house_buyer/seed/pexels-photo-140019.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262062/house_buyer/seed/pexels-photo-136713.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262052/house_buyer/seed/pexels-photo-24639.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262028/house_buyer/seed/wood-nature-forest-trees.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262020/house_buyer/seed/forest-house-lake-idyllic.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475262006/house_buyer/seed/pexels-photo.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475261992/house_buyer/seed/pexels-photo-104367.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475261983/house_buyer/seed/bench-flowers-house-courtyard.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475261975/house_buyer/seed/pexels-photo-96396.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475261964/house_buyer/seed/pexels-photo-25483.jpg",
  "http://res.cloudinary.com/millmane/image/upload/v1475261952/house_buyer/seed/pexels-photo-42152.jpg"
]
(0...picture_urls.length).each do |i|
  House.create!(
    # description: "House#{i}",
    description: Faker::Lorem.paragraph(4, false, 4),
    lat: rand(37.735050..37.782629),
    lng: rand(-122.509815..-122.390710),
    price: rand(1000..10000),
    picture_url: picture_urls[i],
    user_id: 1,
    beds: rand(1..10),
    baths: rand(1..10),
    area: rand(1000..10000)
  )
end
# lat37.782629, 37.735050
# lng  -122.509815, -122.390710
# House.create!(
#   description: "House1",
#   lat: 37.775769,
#   lng: -122.434960,
#   price: 100.00,
#   picture_url: picture_urls[0],
#   user_id: 1
# )
#
# House.create!(
#   description: "House2",
#   lat: 37.779760,
#   lng: -122.413820,
#   price: 200.00,
#   picture_url: picture_urls[1],
#   user_id: 1
# )
#
# House.create!(
#   description: "House3",
#   lat: 37.769996,
#   lng: -122.511281,
#   price: 300.00,
#   picture_url: picture_urls[2],
#   user_id: 1
# )
# House.create!(
#   description: "House4",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 100.00,
#   picture_url: picture_urls[3],
#   user_id: 1
# )
#
# House.create!(
#   description: "House5",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 200.00,
#   picture_url: picture_urls[4],
#   user_id: 1
# )
#
# House.create!(
#   description: "House6",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 300.00,
#   picture_url: picture_urls[5],
#   user_id: 1
# )
# House.create!(
#   description: "House7",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 100.00,
#   picture_url: picture_urls[6],
#   user_id: 1
# )
#
# House.create!(
#   description: "House8",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 200.00,
#   picture_url: picture_urls[7],
#   user_id: 1
# )
#
# House.create!(
#   description: "House9",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 300.00,
#   picture_url: picture_urls[8],
#   user_id: 1
# )
# House.create!(
#   description: "House10",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 100.00,
#   picture_url: picture_urls[9],
#   user_id: 1
# )
#
# House.create!(
#   description: "House11",
#   lat: rand(37.735050..37.782629),
#   lng: rand(-122.509815..-122.390710),
#   price: 200.00,
#   picture_url: picture_urls[10],
#   user_id: 1
# )
