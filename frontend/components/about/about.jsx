import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className="about-top">
                    <p id="about-title">Hello, I'm Patrick!</p>
                </div>
                <div className="about-growth">
                    <div className="flags">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png" alt=""/>
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png" alt=""/>
                    </div>
                    <p>I grew up in the US, Sweden, Spain, and Japan. I speak fluent English and Swedish. During my free-time I study Spanish and Japanese.
                    </p>
                </div>
                <div className="about-rails">
                    <p>
                    My programming education began primarily when I was living in Denmark. I became enamored with Ruby and Rails.
                    After continous study I used my Ruby and Rails skills, along with the HTML, CSS,
                    JavaScript knowledge I had attained, to make the move to San Francisco.
                    </p>
                    <div className="flags-rails">
                        <img src="https://cdn-images-1.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png" alt="" />
                    </div>
                </div>
                <div className="about-sf">
                    <div className="flags-react">
                        <img src="https://cdn-images-1.medium.com/max/800/1*wjlfZatDlTnqfgYJ9iKnKQ.png" alt=""/>
                    </div>
                    <p>
                    In San Francisco, I mastered React, Redux and React Native, which are technologies I utilize for my full stack projects with great relish.
                    I'm currently still in the SF bay area, looking for career opportunities.
                    </p>
                </div>
                <div className="about-connect">
                    <p>Let's Connect: <a className="linkedin-icon" target="_blank" href="https://www.linkedin.com/in/patrick-conde/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></p>
                </div>
            </div>
        )
    }
}

export default About;
