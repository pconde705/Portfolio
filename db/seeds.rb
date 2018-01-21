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
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1516488995/Screen_Shot_2018-01-20_at_2.46.22_PM_zvrkho.png",
    live_url: "https://wellspring-pconde705.herokuapp.com/#/",
    github_url: "https://github.com/pconde705/wellspring"
)

Project.create(
    title: "BlindDate", 
    subtitle: "A mobile app written in React Native with Ruby on Rails as backend, aimed at bringing people together by connecting over personal descriptions rather than images.",
    description: "A description",
    technologies: "React, Redux, React Native, JavaScript, Ruby, Rails, Heroku, PostgreSQL",
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1516488950/Screen_Shot_2018-01-20_at_2.47.07_PM_eqwx90.png",
    live_url: "https://andrewopes789.github.io/blinddate-website/",
    github_url: "https://github.com/pconde705/BlindDate"
)

Project.create(
    title: "Student Infographic", 
    subtitle: "An animated statistical infographic of App Academy's Fall 2017 class built in D3.",
    description: "A description",
    technologies: "React, JavaScript, HTML, CSS, D3",
    img_url: "https://res.cloudinary.com/lopopoa2/image/upload/v1516489026/Screen_Shot_2018-01-20_at_2.45.49_PM_agdp8r.png",
    live_url: "https://pconde705.github.io/Fall-2017-Infographic/",
    github_url: "https://github.com/pconde705/Fall-2017-Infographic"
)

