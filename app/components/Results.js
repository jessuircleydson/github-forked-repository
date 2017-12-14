import React from 'react';
import Form from './Form';
import List from './List';
import Github from './services/Github';

class ResultsList extends React.Component {
  constructor(props, githubApiMethod, listType) {
    super(props);
    this.state = { items: [],  userInfo:{}};
    this.githubApiMethod = githubApiMethod;
    this.listType = listType;
    this.searchResults = this.searchResults.bind(this);
    this.showInfoUser = this.showInfoUser.bind(this);
  }

  searchResults(info) {
    this.githubApiMethod(info)
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
	<h3>Search for {this.listType} in {this.state.userInfo.name}/{this.state.userInfo.repo}</h3>

        <Form getSearchValues={this.searchResults} showInfoUser={this.showInfoUser}/>
        <List list={issues} type={this.listType}/>
      </div>
    ) 
  }
}

export default ResultsList ;

