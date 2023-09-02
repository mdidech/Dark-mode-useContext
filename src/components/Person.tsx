import React from 'react';
import { personProps } from './Person.types';

const Person = (props: personProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}{' '}
    </div>
  );
};

export default Person;
