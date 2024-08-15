import React from 'react'
import ReactDOM from 'react-dom/client'
const Navbar=()=>{
    return (
        <div className="navbar">
            <img className='image' src="https://tse3.mm.bing.net/th?id=OIP.M7Ykm1ZZVBlnK64p_TiIqgHaH_&pid=Api&P=0&h=180"/>
            <nav className='nav-items'>
            <ul>
                <li><a src="#">Home</a></li>
                <li><a src="#">Restaurants</a></li>
                <li><a src="#">Top Offers</a></li>
                <li><a src="#">Contact Us</a></li>
            </ul>
            </nav>
            <button className="login-button">SignUp</button>
        </div>
    )
}
const ResCards=(props)=>{
return(
    <div className='res-card-container'>
        <img className='"res-image"' src="https://tse4.mm.bing.net/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&P=0&h=180"/>
        <h1 className='res-text'>{props.resName}</h1>
        <p>Burger King, Naubasta Road Barra</p>
        <p>45 minutes away</p>
        <button className='res-button'>View Restaurant</button>
    </div>
)
}
const Body=(props)=>{
    return(
        <div className='body'>
          <div className='search'>Search</div>
          <div className='rescards'>
            <ResCards resName="Meghna Foods"/>
            <ResCards resName="KFC"/>
            <ResCards resName="XYZ"/>
            <ResCards resName="ABC"/>
            <ResCards/>
          </div>
          </div>
    )
}
const MainPage=()=>{
    return(
        <div className='app'>
          <Navbar/>
          <Body/>
          </div>
        )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<MainPage/>)