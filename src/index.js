import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import ScrollToTop from "./components/ScrollToTop";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const darkSwitch = document.getElementById('darkLightSwitch');

function themeChange(colour) {
  if (colour === 'light') {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
  }
}

window.addEventListener('load', (e) => {
  let theme = localStorage.theme;
  themeChange(theme);
});

darkSwitch.addEventListener('click', (e) => {
  let theme = localStorage.theme;
  theme === 'dark' ? themeChange('light') : themeChange('dark');
});


