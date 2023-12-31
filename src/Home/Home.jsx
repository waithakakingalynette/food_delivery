import React from "react";
import './Home.css';
import Sandwich from '../../src/Images/sandwich.png'
import Burger from '../../src/Images/burger.png'
import ChickenPizza from '../../src/Images/pizza.png'
import ChickenFry from '../../src/Images/fries-clipart.png'
import Buy from '../../src/Images/buy.png'
import GrillSandwich from '../../src/Images/grill.png'
import Tacos from '../../src/Images/tacos.png'
import Ramen from '../../src/Images/ramen.png'
import MenuItem from "../Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";



const Home =()=>{
    const menuItems = [
        {
          imageUrl: Burger,
          name: "Chicken Burger",
          ratings: 4.5,
          price: 7.99,
        },
        {
          imageUrl: ChickenPizza,
          name: "Margherita Pizza",
          ratings: 4.8,
          price: 12.99,
        },
        {
          imageUrl: ChickenFry,
          name: "Drumsticks",
          ratings: 4.8,
          price: 12.99,
        },
        {
          imageUrl: GrillSandwich,
          name: "Grilled Sandwich",
          ratings: 4.8,
          price: 12.99,
        },
        {
          imageUrl: Tacos,
          name: "Tacos",
          ratings: 4.8,
          price: 12.99,
        },
        {
          imageUrl: Ramen,
          name: "Rame",
          ratings: 4.8,
          price: 12.99,
        },
      ];
    
    return(
        <div>
        <h1 className="food">All fast food is  <br/>
        Available at Foodle</h1>

        <img src={Sandwich} id="image"/>

        <h3 className="delicacy">We Are Just A Click Away When You  <br/> <br/>
        Crave For Delicious Fast Food</h3>
        <button className="buy">Buy Now</button>
        <h3 className="order">How To Order</h3>
        <div className="deliver">
        <div className="fast">
            <h1>Fast Delivery</h1>
            <p className="f">The Food Will Be Delivered To <br/> Your Home Within 1-2 Hours Of <br/> Your Ordering</p>
        </div>
        
        <div className="fresh">
            <h1 >Fresh Food</h1>
            <p className="f">Your Food Will Be Delivered To <br/> 100% Fresh To Your Home.We <br/> Do not Deliver Stale Food</p>
        </div>

        <div className="free">
            <h1>Free Delivery</h1>
            <p className="f">Your Food  Delivery Is <br/> Absolutely Free. No cost<br/> Just Order And Enjoy.</p>
        </div>
        </div>

        <div>
            <h1 className="best">Best Delivered <br/> Categories</h1>

            <h2 className="category">Here Are Some Of Our Best Distributed <br/> Categories.If You Want You Can Order <br/> From Here.</h2>

            <div id="burger"><img src={Burger}/> <br/> <h3 id="chick">Chicken Burger</h3>  <h4 id="order">Order Now <FontAwesomeIcon className="icons" icon={faGreaterThan} /></h4> </div>
            <div id="pizza"><img src={ChickenPizza}/> <br/> <h3 id="chick">Chicken Pizza</h3>  <h4 id="order">Order Now <FontAwesomeIcon className="icons" icon={faGreaterThan}/></h4> </div>
            <div id="fry"><img src={ChickenFry}/> <br/> <h3 id="chicks">French Fries</h3>  <h4 id="orders">Order Now <FontAwesomeIcon className="icons" icon={faGreaterThan}/></h4></div>

            <h1 className="our"> Our <span style={{ color: "rgb(255, 30, 0" }}>Regular</span> Menu<div/></h1>   
      <div className="header">
        <p className="menu">These Are Our Regular Menus. You Can  <br/> Order Anything You Like.</p>   
              {/* <button className="see-all">See All</button> */}
      </div>

      <div className="menu-item-container">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            imageUrl={menuItem.imageUrl}
            name={menuItem.name}
            ratings={menuItem.ratings}
            price={menuItem.price}
          />
        ))}
      </div>
      </div>

      <img src={Buy} id="buy"/>

        </div>

    )

}

export default Home;