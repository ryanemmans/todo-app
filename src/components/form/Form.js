// import React, { useEffect, useState } from 'react';
// import './form.scss';

// import { v4 as uuid } from 'uuid';

// const useForm = (callback) => {

//   const [values, setValues] = useState({});
//   const [list, setList] = useState([]);

//   function addItem(item) {
//     console.log(item);
//     item.id = uuid();
//     item.complete = false;
//     setList([...list, item]);
//   }

//   function deleteItem(id) {
//     const items = list.filter(item => item.id !== id);
//     setList(items);
//   }

//   const handleSubmit = (event) => {
//     if (event) event.preventDefault();
//     callback(values);
//   };

//   const handleChange = (event) => {
//     event.persist();
//     setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//   };
// };

// function Form() {
//   const { handleChange, handleSubmit } = useForm(addItem);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>

//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
//         </label>

//         <label>
//           <span>Assigned To</span>
//           <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
//         </label>

//         <label>
//           <span>Difficulty</span>
//           <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
//         </label>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>
//       ))
//     </>
//   );
// }

// export default Form;
