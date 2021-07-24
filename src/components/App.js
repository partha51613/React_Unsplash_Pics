import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers: {
        Authorization : 'Client-ID ftIHjZPAM3MlWZgx0TJSu7LrCUd3C7CaYYcJMQCiXwg'
      }
    }).then((response)=>{
      console.log(response.data.results);
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

//API KEY ftIHjZPAM3MlWZgx0TJSu7LrCUd3C7CaYYcJMQCiXwg