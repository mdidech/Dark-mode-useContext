import { name } from './Person.types';
type PersonsProps = {
  persons: name[];
};

const PersonList = (props: PersonsProps) => {
  return (
    <div>
      {props.persons.map((person) => {
        return (
          <h2 key={person.first}>
            {person.first} {person.last}{' '}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
