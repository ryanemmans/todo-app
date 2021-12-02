// import React, { useEffect, useState } from 'react';
// import './list.scss';

// const [list, setList] = useState([]);

// function addItem(item) {
//   console.log(item);
//   item.id = uuid();
//   item.complete = false;
//   setList([...list, item]);
// }

// function deleteItem(id) {
//   const items = list.filter(item => item.id !== id);
//   setList(items);
// }

// function toggleComplete(id) {

//   const items = list.map(item => {
//     if (item.id === id) {
//       item.complete = !item.complete;
//     }
//     return item;
//   });

//   setList(items);
// }

// function List() {
//   const { handleChange, handleSubmit } = useForm(addItem);

//   return (
//     <>
//       {list.map(item => (
//         <div key={item.id}>
//           <p>{item.text}</p>
//           <p><small>Assigned to: {item.assignee}</small></p>
//           <p><small>Difficulty: {item.difficulty}</small></p>
//           <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
//           <hr />
//         </div>
//       ))}
//     </>
//   );
// }

// export default List;
