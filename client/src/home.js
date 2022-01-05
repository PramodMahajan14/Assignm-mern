import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'
import './index.css'
const Home = ()=>{
    return(<>

<header class="header" role="banner" aria-label="The Top">
  <div class="header__wrapper">
    <h1 class="header__logo">TheTOP</h1>
    <nav class="[ nav ] [ flow ]" aria-role="navigation">
      <ul class="nav__list" role="list">
        <li class="nav__item"><a class="active" href="#">Home</a></li>
     
        <li class="nav__item"><Link to={'/registration'}><a href="#">Registration</a></Link></li>
        <li class="nav__item"><Link to={'/login'}><a href="#">Login</a></Link></li>
      
      </ul>
    </nav>
  </div>
</header>

<div class="container">
  <div class="row">
    <div class="col-sm-6">
    <img src="https://cdn.pixabay.com/photo/2017/02/26/00/13/athlete-2099162_1280.png" className="svgimg" />
  
    </div>
    <div class="col-sm-6 other">
    <main class="[ flow ] [ main ]" id="gle">
  <h2 class="main__heading">Bring Yourself To The Top</h2>
  <p class="main__sub">Stop looking for a secret trick and recognise that the best version of yourself should be your vision, not anybody else’s</p>
  <button class="main__button">Explore</button>
</main>
    </div>
  </div>
</div>


    </>)
}
export default Home;

{/* <section class="section__img">
<img src="https://cdn.pixabay.com/photo/2016/10/29/20/25/beard-1781443_1280.png" className="svgimg" />
</section>

<main class="[ flow ] [ main ]">
  <h2 class="main__heading">Bring Yourself To The Top</h2>
  <p class="main__sub">Stop looking for a secret trick and recognise that the best version of yourself should be your vision, not anybody else’s</p>
  <button class="main__button">Explore</button>
</main> */}