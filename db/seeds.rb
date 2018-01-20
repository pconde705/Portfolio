# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(
    title: "WellSpring", 
    subtitle: "A single-page application with a React/Redux frontend and Ruby on Rails backend.",
    description: "A description",
    technologies: "React, Redux, JavaScript, Ruby, Rails, HTML, CSS, jQuery, Heroku, PostgreSQL, SQL",
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1512163320/Screen_Shot_2017-12-01_at_1.20.09_PM_rdmyl1.png"
)
