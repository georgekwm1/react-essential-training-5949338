import './App.css'

function Header({name, surname, year}){
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copywrite {year}</p>
    </header>
    );
}
const items = [
  "Macaroni and Cheese",
  "Salmon with Potatoes",
  "Garri and Egusi Soup"
]
  
const dishObjects = items.map((dish, i) => (
  {
    id: i,
    title: dish
  }
));

function Main({dishes}){
  return(
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{listStyleType:'none'}}>{dish.title}</li>
        ))}
    </ul>
  )
}

function App() {

  return (
    <div>
      <Header name="George" surname="Ekwueme" year= {new Date().getFullYear()}/>
      <Main dishes={dishObjects}/>
    </div>
    
  );
}

export default App
