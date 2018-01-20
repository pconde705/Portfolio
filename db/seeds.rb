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

Project.create(
    title: "BlindDate", 
    subtitle: "A mobile app written in React Native with Ruby on Rails as backend, aimed at bringing people together by connecting over personal descriptions rather than images.",
    description: "A description",
    technologies: "React, Redux, React Native, JavaScript, Ruby, Rails, Heroku, PostgreSQL",
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1516478523/Screen_Shot_2018-01-19_at_2.30.45_PM_e8350q.png"
)

Project.create(
    title: "Fall 2017 Student Infographic", 
    subtitle: "An animated statistical infographic of App Academy's Fall 2017 class built in D3.",
    description: "A description",
    technologies: "React, JavaScript, HTML, CSS, D3",
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1512762458/Screen_Shot_2017-12-08_at_11.42.06_AM_copy_e4yww8.png"
)

