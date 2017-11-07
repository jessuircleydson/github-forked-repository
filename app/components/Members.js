import React from 'react';
import Form from './Form';

class Fork extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [],  userInfo:{}};
    this.searchFor = this.searchFor.bind(this);
    this.showInfoUser = this.showInfoUser.bind(this);
  }

  searchFor(info) {
  
   fetch(`https://api.github.com/repos/${info.username}/${info.reponame}/forks`, {
     headers: {
	'Accept': 'application/vnd.github.v3+json'
     }
    }).then(result=> {
        result.json().then(response=>{
           this.setState({items:response});
	})
    });

  }

  showInfoUser(info) {
    this.setState({userInfo:{name:info.username, repo:info.reponame}});
  }
  
  render() {
    let forkers = this.state.items;
    return(
	<div>
	  <h3>Search for forked repositories in {this.state.userInfo.name} : {this.state.userInfo.repo}</h3>

          <Form getSearchValues={this.searchFor} showInfoUser={this.showInfoUser}/>
	  <ul>
  	   {
	     forkers.map(item => {
	    	return(
		 <li key={item}> <a href={item.owner.html_url} target="_blank"><img src={item.owner.avatar_url} width="50px"/> {item.owner.login}</a></li>
		) 
 	     })
	   }
	  </ul>
        </div>
    ) 
  }
}

export default Fork;
