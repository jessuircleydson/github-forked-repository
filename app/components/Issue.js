import React from 'react';
import Form from './Form';
import List from './List';
import Github from './Github';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [],  userInfo:{}};
    this.searchIssue = this.searchIssue.bind(this);
    this.showInfoUser = this.showInfoUser.bind(this);
  }

  searchIssue(info) {
    Github.getIssues(info)
      .then(result=> {
        result.json().then(response=>{
          if(response.message){
            let message = response.message + ": Check if you're looking for the right names.";
            alert(message)
          } else {        
              this.setState({items:response});
          }
	});
      });
  }
  
  showInfoUser(info) {
    this.setState({userInfo:{name:info.username, repo:info.reponame}});
  }
  
  render() {
    let issues = this.state.items;
    return(
      <div>
	<h3>Search for issues in {this.state.userInfo.name}/{this.state.userInfo.repo}</h3>

        <Form getSearchValues={this.searchIssue} showInfoUser={this.showInfoUser}/>
        <List list={issues} type="issue"/>
      </div>
    ) 
  }
}

export default Issue;

