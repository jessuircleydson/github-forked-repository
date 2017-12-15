import React from 'react';
import Github from './services/Github';
import ResultsList from './Results';

const Layout = () => {
  return(
    <div>
      <ResultsList githubApiMethod={Github.getForks} listType="fork"  />
      <ResultsList githubApiMethod={Github.getIssues} listType="issue"  />
      <ResultsList githubApiMethod={Github.getUserRepos} listType="userRepos"  />
    </div>
  )
}

export default Layout;

