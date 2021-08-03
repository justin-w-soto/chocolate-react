import pizza from './assets/choco-pizza.png';
import React, { Component } from 'react';
import './home.css';
import list from './assets/list-bg.png'
import printIcon from './assets/print-icon.png';
class Body extends Component {
    render() { 
        return ( 
            <main>
                <section id="pizza">
                <section>
                    <h1>Choclolate Pizza</h1>
                    <h2>POSTED ON 15 DEC 2013 / DESSERTS</h2>
                </section>

                <section>
                    <h2>PRINT</h2>
                        <img class="print-img"src={printIcon} alt="print"/>
                </section>
                <section class="pizza-img">
                        <img class="pizza" src={pizza} alt="desert-pizza"/>
                </section>
                </section>
                <section class="p-section">
        <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
        <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
        <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown sugar and stir to dissolve. halve all of the figd and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
    </section>
    <section>
        <img class="ingredients" src={list} alt="ingredients-list">
        </img>
    </section>
            </main>
         );
    }
}
 
export default Body;
