import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);           //UseState Hook is used here for Tracking the count and setting the count

  return (
    <>
    <div style={styles.body}> 
    <h1 style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', marginTop : 50, padding: 80}}>Counter App </h1>
    <div style={styles.container}>
      
      <h2> Count : {count} </h2>
      <div style={styles.buttons}>
        <button onClick={() => setCount(count - 1)} style={styles.button}>-</button>
        <button onClick={() => setCount(0)} style={styles.reset}>Reset</button>
        <button onClick={() => setCount(count + 1)} style={styles.button}>+</button>
      </div>
    </div>
    </div>
    </>
  );
};

const styles = {

    body: {
        backgroundColor: 'grey',
        height: 700,
    },
  container: {
    textAlign: 'center',
    padding: 30,
    marginTop: 70,
    fontFamily: 'Arial, sans-serif',
  },
 
  buttons: {
    marginTop: 10,
    display: 'flex',
    
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    padding: '10px 20px',
    fontSize: 18,
    backgroundColor: '#3498db',
    color: 'white',
    border: '2px solid black',
    borderRadius: 5,
    cursor: 'pointer',
  },
  reset: {
    padding: '10px 20px',
    fontSize: 18,
    backgroundColor: '#e74c3c',
    color: 'white',
    border: '2px solid black',
    borderRadius: 5,
    cursor: 'pointer',
  }
};

export default Counter;
