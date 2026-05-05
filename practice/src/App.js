
//User input dega → hum usko state me store karenge → aur fir UI me show karenge.
//import { useState } from 'react';

// function App() {
//   const [text, setText] = useState('');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='kuch likho...'
//         onChange={handleChange}
//       />
//       <h2>output:{text}</h2>
//     </div>
//   )
// }


//Button click → count increase

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={increaseCount}>
//         Increase
//       </button>
//     </div>
//   );
// }




//Input + Button combine karo

// function App() {
//     const [count, setCount] = useState(0);
//     const [input, setInput] = useState("");

//     function handleChange(e) {
//         setInput(e.target.value);
//     }

//     function handleAdd() {
//         setCount(count + Number(input));
//     }

//     return (
//         <div>
//             <h2>Count:{count}</h2>

//             <input type="text"
//                 placeholder='Number Likho'
//                 onChange={handleChange}
//             />

//             <button onClick={handleAdd}>
//                 Add
//             </button>
//         </div>
//     )
// }


// import Child1 from "./Component/child1";
// import Child2 from "./Component/child2";

// function App() {
//     const name = "Ritik";
//     const age = 22;

//     return (
//         <div>
//             <h1>Parent Component</h1>

//             <Child1 name={name} />
//             <Child2 age={age} />
//         </div>
//     );
// }

// same child ko multiple props pass karne hote hain (name + age)


// import Child from "./Component/child1";

// function App() {
//     const name = 'ritik';
//     const age = 22;

//     return (
//         <div>
//             <h1>parent component </h1>
//             <Child name={name} age={age} />
//         </div>
//     )
// }


//3 cards bana different title ke saath


// import Card from "./Card";

// function App() {
//     return (
//         <div>
//             <h1>My Cards</h1>

//             <Card title="React Basics" />
//             <Card title="JavaScript Mastery" />
//             <Card title="MERN Stack" />
//         </div>
//     );
// }

// Page load pe console me "Hello" print 

// import { useEffect } from "react";
// function App() {
//     useEffect(() => {
//         console.log("Hello");
//     }, []);
//     return <div>
//         <h1>page load</h1>
//     </div>
// };


// Button click → count change, count change pe console print

// import { useState, useEffect } from "react";
// function App() {
//     const [count, setcount] = useState(0)
//     function handleClick() {
//         setcount(count + 1);
//     }
//     useEffect(() => {
//         console.log("Count changed ", count);

//     }, [count])

//     return (
//         <div>
//             <h2>count: {count}</h2>
//             < button onClick={handleClick}>
//                 Increse
//             </button>
//         </div>
//     );
// };


//Fake API fetch karke data show kar


// import { useState, useEffect } from "react";

// function App() {
//     Step 1: State banao
//     const [data, setData] = useState([]);

// 🔹 Step 2: useEffect me fetch karo
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(result => setData(result));
//     }, []);

//     return (
//         <div>
//             <h1>Posts</h1>
// 🔹 Step 3: UI me show karo (map use karke)
//             {data.map((item) => (
//                 <div key={item.id}>
//                     <h3>{item.title}</h3>
//                     <p>{item.body}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// Input ek component me Display dusre me

// import { useState } from 'react';
// import InputComponent from "./InputComponent";
// import DisplayComponent from "./DisplayComponent";

// function App() {
//     const [text, setText] = useState("");
//     return (
//         <div>
//             <h1>Parent</h1>
//             <InputComponent setText={setText} />
//             <DisplayComponent text={text} />
//         </div>
//     );
// };


// Button click ek component me 👉 Count dusre me show

// import { useState } from "react";
// import ButtonComponent from "./ButtonComponent";
// import DisplayComponent from "./DisplayComponent";

// function App() {
//     const [count, setCount] = useState(0);

//     function increaseCount() {
//         setCount(prev => prev + 1);
//     }

//     return (
//         <div>
//             <h1>Parent</h1>

//             <ButtonComponent increase={increaseCount} />
//             <DisplayComponent count={count} />
//         </div>
//     );
// }


// 2 inputs → ek summary component me show

// import { useState } from "react";
// import InputComponent from "./InputComponent";
// import SummaryComponent from "./SummaryComponent";

// function App() {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");

//     return (
//         <div>
//             <h1>Parent</h1>

//             <InputComponent setName={setName} setAge={setAge} />
//             <SummaryComponent name={name} age={age} />
//         </div>
//     );
// }


//Name input + show


// import { useState } from "react"

// function App() {
//     const [name, setName] = useState("");
//     function handleChange(e) {
//         setName(e.target.value);
//     }

//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="somthing write "
//                 onChange={handleChange}
//             />
//             <h2>Name:{name}</h2>
//         </div>
//     );
// }




//Email + Password form



// import { useState } from "react";

// function App() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     function handleChange(e) {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         console.log(formData);
//     }

//     return (
//         <div>
//             <h2>Login Form</h2>

//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     onChange={handleChange}
//                 />

//                 <br /><br />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter Password"
//                     onChange={handleChange}
//                 />

//                 <br /><br />

//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }



//Submit pe console me data print

// import { useState } from "react";

// function App() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     function handleChange(e) {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }

//     function handleSubmit(e) {
//         e.preventDefault(); // reload rokta hai
//         console.log(formData); // 👉 yaha data print hoga
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 onChange={handleChange}
//             />

//             <br /><br />

//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 onChange={handleChange}
//             />

//             <br /><br />

//             <button type="submit">Submit</button>
//         </form>
//     );
// }






// Loader + Data 

// import { useState, useEffect } from "react";

// function App() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);

//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(data => {
//                 setData(data);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <h1>Loading...</h1>;

//     return (
//         <div>
//             {data.map(item => (
//                 <p key={item.id}>{item.title}</p>
//             ))}
//         </div>
//     );
// }


//API fetch + data show


// import { useState, useEffect } from "react";

// function App() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//             .then(response => response.json())
//             .then(data => setUsers(data));
//     }, []);

//     return (
//         <div>
//             <h1>User List</h1>

//             {users.map((user) => (
//                 <div key={user.id}>
//                     <h2>{user.name}</h2>
//                     <p>{user.email}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }



// import { useState } from "react";

// function App() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     function handleChange(e) {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();

//         const response = await fetch("https://reqres.in/api/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formData)
//         });

//         const data = await response.json();

//         console.log(data);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 onChange={handleChange}
//             />

//             <br /><br />

//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 onChange={handleChange}
//             />

//             <br /><br />

//             <button type="submit">Login</button>
//         </form>
//     );
// }



// Token Save in LocalStorage 

// import { useState } from "react";

// function App() {
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     async function handleSubmit(e) {
//         e.preventDefault();

//         const response = await fetch("url", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(formData)
//         });
//     }

//     return <div>Hello</div>;
// }


//STEP 6: POST request (Login/Register)
// function submitHandler(e) {
//   e.preventDefault();

//   fetch("/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }



///Error handling (IMPORTANT)

// fetch("/api")
//   .then(res => res.json())
//   .then(data => setData(data))
//   .catch(err => console.log("Error:", err));
// export default App;


// LocalStorage use
// localStorage.setItem("token", data.token);