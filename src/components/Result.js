import React from "react";
import Response from "./response";
import './result.css'

class Result extends React.Component {
  constructor() {
    super();
    this.state = {
      searchItems: Response
    };
  }
  render() {
    const resultList = this.state.searchItems.map(item => (
      <div className="search--result">
        <a href="/">
          <p className="search--result__link">{item.link}</p>
        </a>

        <a href="/">
          <h3 className="search--result__title">{item.title}</h3>
        </a>

        <p className="search--result__info">{item.info}</p>
      </div>
    ));

    return <div>{resultList}</div>;
  }
}
export default Result;
