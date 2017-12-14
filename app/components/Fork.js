import React from 'react';
import Form from './Form';
import List from './List';
import ResultsList from './Results';
import Github from './services/Github';

class Fork extends ResultsList {
  constructor(props) {
    super(props, Github.getForks, "fork");
  }
 }

export default Fork;
