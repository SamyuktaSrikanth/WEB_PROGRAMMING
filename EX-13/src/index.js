import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Fruits from "./Fruits.js";
import SumOfSq from "./SumOfSq.js";
import Greeting from './TimelyGreeting.js';
import PrimeNo from "./PrimeNo.js";
import Convert from "./TempConvert.js";
import Palindrome from "./Palindrome.js";
import GenRandomNumber from './GenRandomNum.js';
import LeapYear from './LeapYear.js';
import Greetings from './Greeting.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Greetings first="Sam" last="Sri"/>
);

