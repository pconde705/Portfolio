import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="about-title">
                    <p>
                        Hello, I'm Patrick Conde!
                    </p>
                </div>
                <div className="about-growth">
                    <p>A little history of myself. I grew up in the US, Sweden, Spain, and Japan. English and Swedish I speak fluently,
                    Spanish, I can hold a minor conversation, and my Japanese has faded somewhat, but I'm still studying it part-time.
                    </p>
                </div>
                <div className="about-growth">
                    <p>
                    My programming education began primarily when I was living in Denmark, diving into the Rails scene.
                    Ruby was my first love, and Rails along with it. It became the foundation of my career, and I used my Ruby and Rails skills,
                    along with the HTML, CSS, JavaScript and jQuery knowledge I had accumulated, to make the move to San Francisco.
                    </p>
                </div>
                <div className="about-sf">
                    <p>
                    I moved to San Francisco, where I've spent the last year harnessing my skills in React, Redux and React Native.
                    I'm currently in the bay area, and open to getting in touch for more.
                    </p>
                </div>
                <div className="about-connect">
                    <p>
                    Let's Connect: LinkedIn
                    </p>
                </div>
            </div>
        )
    }
}

export default About;