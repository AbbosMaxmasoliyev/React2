import React, {Component } from 'react'
import { CardList } from './components/card-lis/card-list';
import './App.css';
 import Searchbox from './components/SearchBox/Searchbox';
import Card from './components/Card/Card';



class App extends Component {

  constructor(){
    super();

    this.state = {
      avatars: [],
      searchField: ""
    };

this.handleChange = this.handleChange.bind(this);

  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ avatars: users}));

}


handleChange(e){
  this.setState({ 
    searchField:e.target.value
        })
}
   
  render() {
    const { avatars, searchField } = this.state;

    const  filterAvatar = avatars.filter(avatars =>
      avatars.name.toLowerCase().includes(searchField.toLowerCase())
      )

    // const  avatars = this.state.avatars;
    // const searchField = this.state.searchField;

    return ( 

      <div className='App'>
      <h1> Pretty avatar girls</h1>
    < Searchbox
     placeholder="Search Avatar"handleChange={this.handleChange}
       
     />
 
 

 < CardList avatars={filterAvatar}>
 

 </CardList>

  
     </div>
    );
  }

}

export default App;
