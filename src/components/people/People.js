import React from 'react';
import { PeopleContext } from '../../context/people.js';
import { Button } from '@blueprintjs/core';
import './people.scss';

class People extends React.Component {

  static contextType = PeopleContext;

  handlePerson = () => {
    let payload = {
      name: 'Ryan',
      role: 'Dev',
    };

    this.context.addPerson(payload);
  }

  render() {
    return (
      <section className="people">
        <Button icon="add" large="large" intent="warning" onClick={this.handlePerson} text="Add Person" />
        <div className="person">
          {this.context.people.map(person => {
            return <p>{person.name}: {person.role}</p>;
          })}
        </div>
      </section >
    );
  }
}

export default People;
