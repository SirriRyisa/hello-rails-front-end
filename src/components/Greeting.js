/*eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetings';

function Greeting() {
  // @ts-ignore
  const dispatch = useDispatch();
  const greetings = useSelector((state) => state.greetings);
  useEffect(() => {
    // @ts-ignore
    dispatch(getGreetings());
  }, []);
  return (
    <div>
      <h1>Greeting</h1>
      <h2>{greetings.text}</h2>
    </div>
  );
}

export default Greeting;
