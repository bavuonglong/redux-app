//const is quite similar to var, but it is used to declared final variable
//jsx allows us to write code like html, but behind it actually is javascript

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <div>hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'))