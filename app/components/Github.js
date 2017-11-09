
class Github {
 
  static getForks(info) {

    return fetch(`https://api.github.com/repos/${info.username}/${info.reponame}/forks`, {
        headers: {
	  'Accept': 'application/vnd.github.v3+json'
        }
    });
  }

  
}

export default Github;
