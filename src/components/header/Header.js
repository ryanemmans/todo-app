// import { useEffect, useState } from 'react';
// import './header.scss';

// function Header() {

//   const [list, setList] = useState([]);
//   const [incomplete, setIncomplete] = useState([]);

//   useEffect(() => {
//     let incompleteCount = list.filter(item => !item.complete).length;
//     setIncomplete(incompleteCount);
//     document.title = `To Do List: ${incomplete}`;
//   }, [list]);

//   return (
//     <header>
//       <h1 id="title">To Do List: {incomplete} items pending</h1>
//     </header>
//   );
// }

// export default Header;
