import React from 'react';
import Form from './Form';
import List from './List';
import Github from './services/Github';

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
          if(response.message){
            let message = response.message + ": Check if you're looking for the right names."
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
    let forkers = this.state.items;
    return(
      <div>
	<h3>Search for forked repositories in {this.state.userInfo.name}/{this.state.userInfo.repo}</h3>

        <Form getSearchValues={this.searchForked} showInfoUser={this.showInfoUser}/>
        <List list={forkers} type="fork"/>
      </div>
    ) 
  }
}

export default Fork;
