import React, {useState} from 'react'

const Increment = () => {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <button onClick={() => setCount(counter + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Increment