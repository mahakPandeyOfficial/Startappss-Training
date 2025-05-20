import ErrorBoundary from './ErrorBoundary.jsx';

function App() {

  return (
    
    <ErrorBoundary>
       <Alert message="Hello Dost"> </Alert>
    </ErrorBoundary>
   
  )
}

//This Alert Message is wrapped in ErrorBoundary
// If the Alert component throws an error, the ErrorBoundary will catch it and display the fallback UI instead of crashing the entire app.
function Alert({ message }) {
  if (typeof message !== 'string' || !message) {
    throw new Error('Message is not a string');
  }
  return <h1>{message}</h1>;
}

export default App
