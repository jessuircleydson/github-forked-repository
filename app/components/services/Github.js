class Github {
 
  static getForks(info) {
    return fetch(`https://api.github.com/repos/${info.username}/${info.reponame}/forks`, {
      headers: {
	'Accept': 'application/vnd.github.v3+json'
      }
    });
  }

   static getIssues(info) {
    return fetch(`https://api.github.com/repos/${info.username}/${info.reponame}/issues`, {
      headers: {
	'Accept': 'application/vnd.github.v3+json'
      }
    });
  }
  
  static getUserRepos(info) {
    return fetch(`https://api.github.com/users/${info.username}/repos`, {
      headers: {
	'Accept': 'application/vnd.github.v3+json'
      }
    });
  }

}

export default Github;
