import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>Hello {this.props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{this.props.count}</h3>
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let count = 0;
root.render(
  <StrictMode>
    <App name="Elbehairy" count={count} />
  </StrictMode>,
);
