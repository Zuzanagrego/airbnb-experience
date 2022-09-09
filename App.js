import "./App.css";
import data from "./data";
import Card from "./Card";

function App() {
  const cardData = data.map((data) => {
    return <Card key={data.id} {...data} />;
  });
  return (
    <div className="main">
      <div className="hero">
        <img src="./images/img-grid.png" alt="Image grid" />
        <div className="hero-text">
          <h1>Online Experinces</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts and
            all without leaving your home.
          </p>
        </div>
      </div>
      <div className="card-holder">{cardData}</div>
    </div>
  );
}

export default App;
