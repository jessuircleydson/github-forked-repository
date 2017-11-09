import React from 'react';
import Form from './Form';
import Github from './Github';

class Fork extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [],  userInfo:{}};
    this.searchForked = this.searchForked.bind(this);
    this.showInfoUser = this.showInfoUser.bind(this);
  }

  searchForked(info) {
    Github.getForks(info)
      .then(result=> {
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

          <Form getSearchValues={this.searchForked} showInfoUser={this.showInfoUser}/>
	  <ul>
  	   {
	     forkers.map(item => {
	    	return(
		  <li key={item}>
                    <a href={item.owner.html_url} target="_blank">
                      <img src={item.owner.avatar_url} width="50px"/>
                      {item.owner.login}
                    </a>
                  </li>
		) 
 	     })
	   }
	  </ul>
        </div>
    ) 
  }
}

export default Fork;
