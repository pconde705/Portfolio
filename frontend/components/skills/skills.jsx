import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills-container">
              <div className="span-color">
                <p className="skill-tldr"><span className="tldr">tl;dr</span> - React, Redux, JavaScript, HTML, CSS, D3, jQuery, Ruby, Ruby on Rails, React Native, SQL, PostgreSQL, Heroku, Git, RSpec, Babel, Webpack</p>
              </div>
                <p className="skill-titles">FrontEnd</p>
                <div className="skills-frontend group-divs">
                    <div>
                        <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png" alt="" />
                        <p>React</p>
                    </div>
                    <div>
                        <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt="" />
                        <p>Redux</p>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                        <p>HTML</p>
                    </div>
                    <div>
                        <img src="http://code.naustud.io/code-guide/img/css-logo.svg" alt="" />
                        <p>CSS</p>
                    </div>
                    <div>
                        <img src="https://avatars3.githubusercontent.com/u/1562726?s=400&v=4" alt="" />
                        <p>D3</p>
                    </div>
                    <div>
                        <img src="https://js.foundation/wp-content/uploads/sites/33/2017/02/jquery.png" alt="" />
                        <p>jQuery</p>
                    </div>
                </div>
                <div className="span-color">
                  <p className="skill-titles">Backend</p>
                  <div className="skills-backend group-divs">
                      <div>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png" alt="" />
                          <p>Ruby</p>
                      </div>
                      <div>
                          <img src="https://eventil.s3.amazonaws.com/uploads/event/logo/60/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png" alt="" />
                          <p>Ruby on Rails</p>
                      </div>
                  </div>
                </div>
                <p className="skill-titles">Mobile</p>
                <div className="skills-mobile group-divs">
                    <div>
                        <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt=""/>
                        <p>React Native</p>
                    </div>
                </div>
                <div className="span-color">
                <p className="skill-titles">Database</p>
                <div className="skills-database group-divs">
                    <div>
                        <img src="https://azure.microsoft.com/svghandler/sql-database/?width=600&height=615" alt="" />
                        <p>SQL</p>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" />
                        <p>PostgreSQL</p>
                    </div>
                </div>
                </div>
                <p className="skill-titles">Other</p>
                <div className="skills-other group-divs">
                    <div>
                        <img src="https://png.icons8.com/color/540/heroku.png" alt="" />
                        <p>Heroku</p>
                    </div>
                    <div>
                        <img src="http://haraldbregu.com/assets/gitlogo.png" alt="" />
                        <p>Git</p>
                    </div>
                    <div>
                        <img src="http://rspec.info/images/logo_ogp.png" alt="" />
                        <p>RSpec</p>
                    </div>
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/567000326444556290/-1wfGjNw.png" alt="" />
                        <p>Babel</p>
                    </div>
                    <div>
                        <img src="https://webpack.js.org/assets/icon-square-big.svg" alt="" />
                        <p>Webpack</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;
