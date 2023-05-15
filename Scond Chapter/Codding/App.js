// const Header = document.createElement("h3");
// Header.innerHTML = "hello world";
// const root = document.getElementById("root")

// root.appendChild(Header)


const Header1 = React.createElement("h1",{id:"Title"},"hellow world");
const Header2 = React.createElement("h2",{id:"Title"},"hellow world");
const Header3 = React.createElement("h3",{id:"Title"},"hellow world");

const MainHeader = React.createElement("div",{id:"Main"},[Header1, Header2, Header3])
const roots = ReactDOM.createRoot(document.getElementById('root'));

roots.render(MainHeader)


