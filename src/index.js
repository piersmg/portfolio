import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

darkSwitch.addEventListener('click', (e)=>{
  let theme = localStorage.theme;
  theme === 'dark' ? themeChange('light') : themeChange('dark');
});


