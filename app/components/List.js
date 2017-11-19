import React from 'react';

const List = ({list, type}) => {

  const forkedList = (item) =>  (
    <li key={item}>
      <a href={item.owner.html_url} target="_blank">
        <img src={item.owner.avatar_url} width="50px"/>
        {item.owner.login}
      </a>
    </li>
  )
  
  const issueList = (item) => (
    <li key={item.id}>
      Title:{item.title}<br />
      Created by: 
      <a href={item.user.html_url} target="_blank"><img src={item.user.avatar_url} width="32px"/> {item.user.login}</a><br/>
      State: {item.state}<br />
      <a href={item.html_url} target="_blank">Abrir issue</a>
    </li>        
  )

  const listTypes = {
      fork: forkedList,
      issue: issueList
  }

  const getListType = (item) => {
    if(listTypes[type]) {
      return listTypes[type](item)
    }
  }

  return (
    <ul>
      {
        list.map(getListType)
      }
    </ul>
  )
}


export default List;
