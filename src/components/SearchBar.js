import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    onFormSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Type here to search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
