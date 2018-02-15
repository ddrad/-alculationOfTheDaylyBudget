import React, { Component } from 'react';
import ExperienceDescription from './ExperienceDescription'
import ExperienceResponsibility from './ExperienceResponsibility';

class Experience extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (
            <div className="row mt-5">
                <div className="row">
                    <h3>{product.company}</h3>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {product.description.map((item, index) => (
                            <ExperienceDescription title={item.title} content={item.content} key={index} />
                        ))}
                        <ExperienceResponsibility resposibility={product.resposibility} />
                        <div className="row">
                            <p><span className="font-weight-bold">Technologies/tools: </span>
                                {product.stack.map((item, index) => (
                                    item + '; '
                                ))}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 pl-5">
                        {product.images.map((item, index) => (     
                        <div className="row mb-3" key={index}>
                            <a href={product.url[index]}>
                            <img className="company-logo-img" src={item} alt={product.company}/>
                            </a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;