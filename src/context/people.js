import React, { useState } from 'react';
import '../components/people/people.scss';

export const PeopleContext = React.createContext();

function PeopleProvider({ children }) {

  let [currentPerson, setCurrentPerson] = useState({});
  const [people, setPeople] = useState([]);

  const values = {
    currentPerson,
    people,
    setCurrentPerson: ({ name, role }) => {
      if (!name || !role) {
        throw new Error('Invalid person submitted');
      } else {
        setCurrentPerson({ name, role });
      }
    },
    addPerson: ({name, role}) => {
      if (!name || !role) {
        throw new Error('Invalid person submitted');
      } else {
        setPeople([...people, {name, role}]);
      }
    }
  };

  return (
    <PeopleContext.Provider value={values}>
      {children}
    </PeopleContext.Provider>
  );
}

export default PeopleProvider;
