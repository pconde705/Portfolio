import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div className="footer-div">
                <p>Contact: <a className="footer-link" href="mailto:patrick.conde.costas@gmail.com">patrick.conde.costas@gmail.com</a></p>
                <p>GitHub: <a className="footer-link" href="https://github.com/pconde705">github.com/pconde705</a></p>
                <p>LinkedIn: <a className="footer-link" href="https://www.linkedin.com/in/patrick-conde/">linkedin.com/in/patrick-conde/</a></p>
            </div>
        )
    }
}

export default Footer;
