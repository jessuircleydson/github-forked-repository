import React from 'react';
import Form from './Form';
import List from './List';
import ResultsList from './Results.js';
import Github from './services/Github';

class Issue extends ResultsList {
  constructor(props) {
    super(props, Github.getIssues, "issue");
  }
 }

export default Issue;

