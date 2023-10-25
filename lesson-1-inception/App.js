/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am H1 Tag</h1>
 *      </div>
 *      <div id="child2">
 *          <h1>I am H1 Tag</h1>
 *      </div>
 * </div>
 */



const parent = React.createElement("div",
   {id: "parent"},
 [    React.createElement(
    "div",{ id: "child"}, 
React.createElement(
    "h1",{},"I am an h1 tag")),    React.createElement(
        "div",{ id: "child2"}, 
    React.createElement(
        "h1",{},"I am an h1 tag Child 2"))]
);



const heading = React.createElement(
    "h1",
    {id: "heading"}, 
    "Hello World from React");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);

