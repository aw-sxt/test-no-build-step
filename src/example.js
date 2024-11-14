function Counter() {
	const [count, setCount] = React.useState(0);
  
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);
  
	return React.createElement(
	  'div',
	  null,
	  React.createElement('h1', null, `Counter: ${count}`),
	  React.createElement(
		'button',
		{ onClick: increment },
		'Increment'
	  ),
	  React.createElement(
		'button',
		{ onClick: decrement },
		'Decrement'
	  )
	);
  }
  
  export {
	  Counter
  }