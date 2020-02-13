import React from 'react'
import SuggestionInputSearch from 'suggestion-react-input-search'; 
class suggestion extends React.Component {
 
  handleOnSubmit(term) {
      // Do whatever you need i.e. calling API
  }
 
  render() {
    const recentSearches = ['star wars', 'star wars IV', 'star trek', 'star wars I'];
    const placeholder = 'Search films...';
    const inputPosition = 'center';
    return (
      <div className="App">
        
        <SuggestionInputSearch
          onSubmitFunction={this.handleOnSubmit}
          recentSearches={recentSearches}
          placeholder={placeholder}
          inputPosition={inputPosition}
        />
      </div>
    );
  }
}
 
export default suggestion;