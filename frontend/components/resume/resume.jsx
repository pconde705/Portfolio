import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-container">
                <div className="resume-job-listing">
                    <div className="resume-left">
                        <p className="resume-job-name">Jewish Women's Theatre</p>
                        <p className="resume-job-dates">JAN 2015 - APR 2016</p>
                    </div>
                    <div className="resume-right">
                        <p className="resume-job-title">ASSOCIATE PRODUCER / SOCIAL MEDIA DIRECTOR</p>
                        <ul className="resume-ul">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
                <div className="resume-job-listing">
                    <div className="resume-left">
                        <p className="resume-job-name">Jewish Women's Theatre</p>
                        <p className="resume-job-dates">JAN 2015 - APR 2016</p>
                    </div>
                    <div className="resume-right">
                        <p className="resume-job-title">ASSOCIATE PRODUCER / SOCIAL MEDIA DIRECTOR</p>
                        <ul className="resume-ul">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;