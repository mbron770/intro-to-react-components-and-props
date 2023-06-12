import photo from "../images/photo.jpeg"
import '../css/App.css';
import Cake from "./Cake.js"
import cakes from "../data/data.js"

function App() {
  console.log(cakes)
  const style={width:"50%",borderRadius:"5px"}
  const cakeDivs=cakes.map(cake=><Cake key={cake.id} name={cake.name} price={cake.price} image={cake.image} description={cake.description} />)
  return (
    <>
      <header>
        <h1>
          My First App
        </h1>
      </header>
      <main>
        <p>
          Welcome to My Bakery
        </p>
        <img src={photo} alt="something" style={style} />
        <div className="cakes">
          {cakeDivs}
        </div>
      </main>
    </>
  );
}

export default App;
