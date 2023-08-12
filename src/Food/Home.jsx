import React from "react";
import './Home.css';
import Sandwich from '../../src/Images/sandwich.png'
import Burger from '../../src/Images/burger.png'
import ChickenPizza from '../../src/Images/pizza.png'
import ChickenFry from '../../src/Images/frenchfries.png'
import Buy from '../../src/Images/buy.png'


const Home =()=>{
    return(
        <div>
        <h1 className="food">All fast food is  <br/>  <br/>
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

            <div id="burger"><img src={Burger}/> <br/> <h3>Chicken Burger</h3>  <h4>Order Now</h4></div>
            <div id="pizza"><img src={ChickenPizza}/> <br/> <h3>Chicken Pizza</h3>  <h4>Order Now</h4></div>
            <div id="fry"><img src={ChickenFry}/> <br/> <h3>French Fries</h3>  <h4>Order Now</h4></div>

            <img src={Buy} id="buy"/>

        </div>

        </div>
    )

}

export default Home;