import React from 'react';
import './App.css';
import restaurant from "./restaurant.jpg"

function Header(props){

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
      <img src={restaurant} height={200} alt=""/>
      <h3>List of Menus</h3>
      <ul style={{textAlign:"left"}}>
      {
        props.dishes.map((dish)=>(
        <li key={dish.id}>{dish.title}</li>
        ))
      }
      </ul>
      <h3>List of Chefs</h3>
      <ul style={{textAlign:"left"}}>
      {
        props.chefList.map((chef)=>(
        <li key={chef.idss}> {chef.chef}</li>
        ))
      }
      </ul>

      <h3>List of Deserts</h3>
      <ul style={{textAlign:"left"}}>
        {

          props.desert.map((des)=>(
            <li id={des.ide}>{des.itemList}</li>
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

const chefList=["Anurag","Manisha","Amarsingh","Akriti"]

const chefListObject = chefList.map((name,i)=>({idss:i,chef:name}));

const desert =["Glab Jamun","Rass Maali","Kheer"]
const desertObject= desert.map((item,i)=>({itemList:item,ide:i}));

function App() {
  return (
    <div className="App">
    <Header name="Anurag Kumar"/>
    <Main dishes={disheObjects} chefList={chefListObject}  desert={desertObject}/>
    <Footer year={new Date().getFullYear()}/>
      
    </div>
  );
}

export default App;
