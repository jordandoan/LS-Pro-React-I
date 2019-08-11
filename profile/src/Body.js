import React, { Component } from 'react';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Information birthday="June 11th 2019" gender="Male" zodiac="Gemini"/>
                <Education college="UW" degree="Meteorology"/>
            </div>
        );
    }
}

class Information extends Component {
    constructor(props){
        super(props);
        this.birthday = props.birthday;
        this.gender = props.gender;
        this.zodiac = props.zodiac;

    }
    render() {
        return (
            <>
                <p>Birthday: {this.birthday}</p>
                <p>Gender: {this.gender}</p>
                <p>Zodiac Sign: {this.zodiac}</p>
            </>
        );
    }
}

class Education extends Component {
    constructor(props){
        super(props);
        this.college = props.college;
        this.degree = props.degree;
    }
    render() {
        return (
                <p>Graduated at {this.college} with a degree in {this.degree}</p>
        );
    }
}

export default Body;