import React, {Component} from 'react';

class About extends Component{
    render(){
        return (
            <div className="content-about">
                <div className="jumbotron">
                    <h1>About me!</h1>
                    <p className="lead">
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus,
                        tellus
                        ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;