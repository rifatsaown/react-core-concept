import './App.css';

const name = "Rifat";
const rifat = {
  name: "Rifat",
  age: 23,
  job: "Web Developer",
};
const rifatStyle  = {
  color: "white",
  backgroundColor: "salmon",
  borderRadius: "20px",
  margin: "20px",
  padding: "20px",
  display: "inline-block",
};


function App() {
  return (
    <div className="App">
      <h1>JSX</h1>
      <div className="container">
        <h3>Hello this is react</h3>
      </div>
      <br />
      <div style={rifatStyle} className="rifat">
          <p style={{textTransform:"uppercase",fontWeight:"bold"}}>My name is {name}</p>
          <p>My name is {rifat.name}</p>
          <p>My age is {rifat.age}</p>
          <p>My job is {rifat.job}</p>
        </div>
    </div>
  );
}

export default App;
