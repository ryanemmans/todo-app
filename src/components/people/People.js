import React from 'react';
import { PeopleContext } from '../../context/people.js';
import { Button } from '@blueprintjs/core';
import './people.scss';

class People extends React.Component {

  static contextType = PeopleContext;

  handlePerson = () => {
    let payload = {
      name: 'Ryan',
      role: 'student',
    };

    this.context.addPerson(payload);
  }

  render() {
    return (
      <section className="people">
        <div className="person">
          <Button large="large" intent="primary" onClick={this.handlePerson} text="Add Person" />
          {this.context.people.map(person => {
            return <p>{person.name}</p>;
          })}
        </div>
      </section >
    );
  }
}

export default People;
