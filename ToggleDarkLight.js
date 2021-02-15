import React from 'react';
import logo from './logo.svg';
import {ThemeContext} from './theme-context';

function ToggleDarkLight(){
    const {theme, toggle, dark } = React.useContext(ThemeContext)
	
	
	  return (
		<div className="App">
		  <header className="App-header" style = {{backgroundColor: theme.backgroundColor, color: theme.color}} >
			<button
			type = "button"
			onClick = {toggle}
			style = {{backgroundColor: theme.backgroundColor, color: theme.color}}
			>
			  Click here to toggle to {!dark ? 'dark': 'light'} theme
			  </button>
	
			<img src={logo} className="App-logo" alt="logo" />
		  </header>
		</div>
	  );
}

export default ToggleDarkLight;