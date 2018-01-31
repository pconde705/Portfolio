import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="resume-container">
                <p className="skill-titles resume-top">Experience</p>
                <div className="resume-job-listing">
                    <div className="resume-left">
                        <p className="resume-job-name">JEWISH WOMEN'S THEATRE</p>
                        <p className="resume-job-dates">JAN 2015 - APR 2016</p>
                    </div>
                    <div className="resume-right">
                        <p className="resume-job-title">ASSOCIATE PRODUCER / SOCIAL MEDIA DIRECTOR</p>
                        <ul className="resume-ul">
                            <li>Designed and engineered the JWT’s website via WordPress</li>
                            <li>Produced and edited theatre performances, video promos, and commercials
                                with Final Cut Pro and Adobe Premiere Pro</li>
                            <li>Increased exposure of JWT by creating an online presence, marketing the
                                theatre and acquiring new clients through Twitter, Facebook, and Instagram engagement</li>
                        </ul>
                    </div>
                </div>
                <div className="span-color">
                    <div className="resume-job-listing">
                        <div className="resume-left">
                            <p className="resume-job-name">DIVISON OF UNIVERSITY HOUSING <br /> (UNIVERSITY OF WISCONSIN-MADISON)</p>
                            <p className="resume-job-dates">MAY 2011 - AUG 2014</p>
                        </div>
                        <div className="resume-right">
                            <p className="resume-job-title">FRONT DESK SUPERVISOR</p>
                            <ul className="resume-ul">
                                <li>Interviewed and hired employees</li>
                                <li>Supervised a team of diverse staff members and trained them in administration tasks and professional customer conduct</li>
                                <li>Evaluated employees based on stipulated University guidelines and personal merit</li>
                                <li>Handled financial transactions, room and key management, mail sorting and delivery, troubleshooting with technological issues, customer and telephone service</li>
                                <li>Handled credit card transactions, checked guests in and out, operated a cash register, wrote and charged bills during summer conferences</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="skill-titles">Education</p>
                <div className="resume-job-listing">
                    <div className="resume-left">
                        <p className="resume-job-name">APP ACADEMY</p>
                        <p className="resume-job-dates">OCT 2017 - JAN 2018</p>
                    </div>
                    <div className="resume-right">
                        <p className="resume-job-title">CERTIFICATE</p>
                        <ul className="resume-ul">
                            <li>1000-hour full-stack programming boot camp with less than 3% acceptance rate</li>
                            <li>Topics include: TDD, scalability, OOP, algorithms, REST, security, single-page apps</li>
                            <li>Skills: React.js, Redux, JavaScript, Ruby, Rails, RSpec, SQL, ActiveRecord, Git, HTML5, CSS3</li>
                          </ul>
                    </div>
                </div>
                <div className="span-color">
                    <div className="resume-job-listing">
                        <div className="resume-left">
                            <p className="resume-job-name">UNIVERSITY OF WISCONSIN-MADISON</p>
                            <p className="resume-job-dates">SEP 2010 - MAY 2014</p>
                        </div>
                        <div className="resume-right">
                            <p className="resume-job-title">BA in HISTORY. BA in COMMUNICATION ARTS</p>
                            <ul className="resume-ul">
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="skill-titles">Download</p>
                <div className="resume-job-listing download">
                    <p className="resume-download">Click this link to download a pdf of my Resume: <a href="https://res.cloudinary.com/lopopoa2/image/upload/v1516744334/patrick_conde_resume_fya8hi.pdf" download="patrick_conde_resume">[RESUME]</a></p>
                </div>
            </div>
        )
    }
}

export default Resume;
