import React, { useState } from 'react'

import Button from '@material-ui/core/Button'

const Increment = () => {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {counter} times</p>
      <Button onClick={() => setCount(counter + 1)}>
        Click me
      </Button>
    </div>
  );
}
export default Increment