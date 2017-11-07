import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.getValues = this.getValues.bind(this);
  }

  getValues(e) {
    e.preventDefault();
    const info = {username: this.username.value, reponame:this.reponame.value};
    this.props.getSearchValues(info);
    this.props.showInfoUser(info);
  }

  render() {
    return (
      <form onSubmit={this.getValues}>
        <input ref={input => this.username = input} type="text" placeholder="Username"/>
        <input ref={input => this.reponame = input} type="text" placeholder="Repository name"/>
        <button>Search</button>
      </form>
    )
  }
}

export default Form;
