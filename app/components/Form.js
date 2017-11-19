import React from 'react';

const Form = ({getSearchValues, showInfoUser}) => {

  const getValues = (e) => {
    e.preventDefault();

    const info = {
      username: username.value,
      reponame: reponame.value
    };
    getSearchValues(info);
    showInfoUser(info);
  }

  let username, reponame;
  return (
    <form onSubmit={getValues}>
      <input ref={input => username = input} type="text" placeholder="Username"/>
      <input ref={input => reponame = input} type="text" placeholder="Repository name"/>
      <button>Search</button>
    </form>
  )
}

export default Form;
