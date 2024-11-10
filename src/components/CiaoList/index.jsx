import React, { Component } from "react";
import Ciao from "../Ciao/index";

class CiaoList extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: "Frederico",
          age: 83,
          isMale: true,
        },
        { id: 2, name: "Bread", age: 42, isMale: true },
        { id: 3, name: "Anna", age: 67, isMale: false },
      ],
      isUpSortByAge: true,
      isUpSortByName: true,
    };
  }

  sortUsersByName = () => {
    const { users, isUpSortByName } = this.state;
    const copyName = JSON.parse(JSON.stringify(users));
    copyName.sort((nameA, nameB) => {
      if (nameA.name < nameB.name) {
        return isUpSortByName ? -1 : 1;
      }
      if (nameA.name > nameB.name) {
        return isUpSortByName ? 1 : -1;
      }
      return 0;
    });
    this.setState({ users: copyName, isUpSortByName: !isUpSortByName });
  };

  sortUsersByAge = () => {
    const { users, isUpSortByAge } = this.state;
    const userCopy = JSON.parse(JSON.stringify(users));
    userCopy.sort((userA, userB) =>
      isUpSortByAge ? userA.age - userB.age : userB.age - userA.age
    );
    this.setState({ users: userCopy, isUpSortByAge: !isUpSortByAge });
  };

  mapUsers = ({ id, name, age, isMale }) => (
    <Ciao key={id} name={name} age={age} isMale={isMale} />
  );
  render() {
    const { users, isUpSortByAge,isUpSortByName } = this.state;
    return (
      <>
        {" "}
        <button onClick={this.sortUsersByAge}>
          sort {isUpSortByAge ? "Up" : "Down"} by age
        </button>
        <button onClick={this.sortUsersByName}>sort{isUpSortByName ? 'Sh':'Lon'} by name</button>
        <section>{users.map(this.mapUsers)}</section>
      </>
    );
  }
}

export default CiaoList;
