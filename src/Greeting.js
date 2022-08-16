// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getGreeting } from '../redux/greeting/greeting';

// function Greeting() {
//   const greeting = useSelector((state) => state.greeting);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!greeting.length) dispatch(getGreeting());
//   }, []);

//   return (
//     <>
//       <div className={classes.container}>
//         <h1>Hello there</h1>
//         <p>
//           {greeting.length
//             ? greeting
//             : 'Loading Hello...'}
//         </p>
//       </div>
//     </>
//   );
// }

// export default Greeting;
