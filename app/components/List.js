import React from 'react';


const List = ({list, type}) => {

  const typeList = {
      fork: 'fork',
      issue: 'issue'
  }

  const forkList  = (item) => {
    return (
      <li key={item}>
        <a href={item.owner.html_url} target="_blank">
          <img src={item.owner.avatar_url} width="50px"/>
          {item.owner.login}
        </a>
      </li>
    )
  }

  const issueList = (item) => {
    console.log(item)
    return (
      <li key={item.id}>
          Title:{item.title}<br />
          Created by: 
            <a href={item.user.html_url} target="_blank"><img src={item.user.avatar_url} width="32px"/> {item.user.login}</a><br/>
          State: {item.state}<br />
         <a href={item.html_url} target="_blank">Abrir issue</a>
      </li>        
    )
      console.log(item)
  }

  const verifyList = (item) => {
    if(typeList[type] === "fork") {
      console.log("i'm fork")
      return forkList(item)
    } else if(typeList[type] === "issue") {
        console.log("i'm issue")
        return issueList(item)
    }
  }

  return (
    <ul>
      {
        list.map(verifyList)
      }
    </ul>
  )
}


export default List;
