import { useEffect, useState } from 'react'
import './App.css'
import counterRawJSX from './example?raw'
import counterRawNoJSX from './exampleNoJSX?raw'
import * as Babel from '@babel/standalone'

// get around issues with imports
import React from 'react'
window.React = React;

const loadComponentNoJSX = async () => {
  const blob = new Blob([counterRawNoJSX], {type: 'text/javascript'});
  const url = URL.createObjectURL(blob);
  const module = await import(url);
  return module
}

const loadComponentJSX = async () => {
  const compiledCode = Babel.transform(counterRawJSX, { presets: ['react'] }).code;
  const blob = new Blob([compiledCode], {type: 'text/javascript'});
  const url = URL.createObjectURL(blob);
  const module = await import(url);
  return module
}

function App() {
  const [Component, setComponent] = useState(null);
  const [Component2, setComponent2] = useState(null);

  useEffect(() => {
    loadComponentNoJSX()
      .then((module) => {
        const Component = module.Counter;
        setComponent(<Component />)
      })

    loadComponentNoJSX()
      .then((module) => {
        const Component = module.Counter;
        setComponent2(<Component />)
      })
    
  }, [])

  return (
    <>
      {Component}
      {Component2}
    </>
  )
}

export default App
