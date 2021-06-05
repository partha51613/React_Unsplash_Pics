import React from 'react';

class SearchBar extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input type="text" placeholder="Type here to search"/>
                </form>
            </div>
        );
    }
}


export default SearchBar;