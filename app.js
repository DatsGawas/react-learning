import React from "react";
import ReactDOM from "react-dom/client"; 

const parent = React.createElement("h1",{id:'parent'},'Welcome React');
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);