import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false}
    }

    //This is used used for setting the state , so that the next render will show the fallback UI
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return { hasError: true };  //set the error to true
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Error caught in ErrorBoundary: ", error, errorInfo);
    } 

    //And here we are using the render method to show the fallback UI
    render() {
        if(this.state.hasError) {
            // Can render any custom fallback UI
            return <h1> Something Went Wrong!!</h1>
        }
        return this.props.children;
        // Render children components
    }

   
}

export default ErrorBoundary;