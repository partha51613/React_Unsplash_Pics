import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar';

class App extends React.Component {

  state={images : []};
  //Binding a method
  onSearchSubmit = this.onSearchSubmit.bind(this);

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers: {
        
        Authorization : 'Client-ID ftIHjZPAM3MlWZgx0TJSu7LrCUd3C7CaYYcJMQCiXwg'
      }
    });
   // console.log(response.data.results);
   this.setState({images : response.data.results});
  }

  render() {
    return ( 
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;

//API KEY ftIHjZPAM3MlWZgx0TJSu7LrCUd3C7CaYYcJMQCiXwg