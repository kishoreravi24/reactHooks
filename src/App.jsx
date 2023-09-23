import React,{useState, useReducer} from 'react';
import ClassContextConsumer from './classContextConsumer';
import FunctionalContextConsumer from './FunctionalContextConsumer';

export const ThemeContext = React.createContext();

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {count: state.count+1}
    case 'decrement':
      return {count: state.count-1}
    default:
      return state
  }
}

function App(){
  //useContext
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme(){
    setDarkTheme(darkThemeValue => !darkThemeValue)
  }

  //useReducer
  const [state, dispatch] = useReducer(reducer, {count: 0})
  function increment(){
    dispatch({type: 'increment'})
  }

  function decrement(){
    dispatch({type: 'decrement'})
  }

  return(
    <div>
      {/* useContext */}
      <h2>use context</h2>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextConsumer/>
        <FunctionalContextConsumer/>
      </ThemeContext.Provider>

      {/* useReducer */}
      <h2> use reducer</h2>
      <button onClick={decrement}>-</button>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}
export default App;
