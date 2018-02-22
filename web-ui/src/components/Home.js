import React, { Component } from 'react';
import Experience from './cv/Experience';
import Contact from './Contact';
import fetchExperienceData from './cv/ExperienceStore';

class Home extends Component {

    constructor(props) {
        super(props);
        console.log(this);
    }

    render() {
        const experienceList = fetchExperienceData();
        return (
            <div>
                <div className="container mt-6">
                    <section id="greating">
                        <header>
                            <h1>Dmitrii Azarov - Software Developer</h1>
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <p className="font-italic">7 years of practical experience as software developer. 4 years experience of web software development using Java, Spring Framework.</p>
                                    <p className="font-italic">Participated in different projects for e-commerce, operation support system for telecommunication companies.</p>
                                    <p className="font-italic">Undersanding Front-end side: Angular 5, React, Redux, Webpack.</p>
                                </div>
                                <div className="col-md-4">
                                    <img src="/photo.png" className="avatar" />
                                </div>
                            </div>
                        </header>
                        <main>
                        </main>
                    </section>
                </div>
                <div className="row mt-5">
                </div>
                <Contact />
                <div className="row mt-5">
                </div>
                <div className="white-block">
                    <div className="container">
                        <section id="experience">
                            <header>
                                <h1>Experience:</h1>
                            </header>
                            <main>
                                {experienceList.map((item, index) => (
                                    <Experience product={item} key={index} />
                                ))}
                            </main>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;