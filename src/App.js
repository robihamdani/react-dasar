import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: "28" },
      { id: 2, name: "Manu", age: "29" },
      { id: 3, name: "Stephanie", age: "26" }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    this.setState({
      persons: [
        { name: "Max", age: "28" },
        { name: event.target.value, age: "29" },
        { name: "Stephanie", age: "27" }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    let classes = [""];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p className={classes.join(" ")}>this is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
