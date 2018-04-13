import React, {Component} from 'react';

class AthleteList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul style={{display: 'flex', flexWrap: 'wrap', listStyle: 'none'}}>
                {this.props.athletes.map(({ firstName, lastName, grade, sports }) => (
                    <li key={firstName + lastName} style={{border: '1px solid #eaeaea', boxShadow: '4px 4px #eaeaea', margin: 5, width:'180px'}}>
                        <ul>
                            <li>{firstName} {lastName}</li>
                            <li>{grade}th Grade</li>
                            <li>{sports.map((sport) => sport + '<br/>')}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        )
    }

};

export default AthleteList;