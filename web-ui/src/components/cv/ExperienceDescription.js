import React, { Component } from 'react';


class ExperienceDescription extends Component {

    render() {
        const { title, content } = this.props;

        return (
            <div className="row">
                <p> <span className="font-weight-bold">{title}</span> {content}</p>
            </div>
        );
    }
}

export default ExperienceDescription;