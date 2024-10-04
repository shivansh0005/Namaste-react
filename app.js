const heading=React.createElement("div",{id:"c"},[React.createElement("h1",{id:"h1"},"H1 tag from react"),React.createElement("h2",{id:"h2"},"H2 tag from react")]);
//"h1"->type of element which is being created
// {}->This is used to give attribute to tags
// children of that tag
console.log(heading)
// heading is basically javascript object

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
// convert object(heading)->html and putting it inside root