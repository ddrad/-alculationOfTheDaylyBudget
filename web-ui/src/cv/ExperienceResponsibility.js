import React, { Component } from 'react';

class ExperienceResponsibility extends Component {

    render() {
        const { resposibility } = this.props;
        return (
            <div>
                <div className="row">
                    <p className="font-weight-bold">Personal responsibility:</p>
                </div>
                <div className="row">
                    <ul className="list-group list-group-flush">
                        {resposibility.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ExperienceResponsibility;