import './App.css';

function Header(props){
  console.log(props)
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p> We serve the most amazing food around St.Louis.</p>
      <ul style={{textAlign:"left"}}>
      {
        props.dishes.map((dish)=>(
        <li key={dish.id}>{dish.title}</li>
        ))
      }
      </ul>
      </section>
  )
}

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes=[
  "Butter Chicken",
  "Chicken Korma",
  "Palak Panner",
  "Caulifower curry"
]

const disheObjects = dishes.map((dish,i)=>({id:i,title:dish}))

console.log(disheObjects)

function App() {
  return (
    <div className="App">
    <Header name="Anurag Kumar"/>
    <Main adjective="amazing" dishes={disheObjects}/>
    <Footer year={new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
