// import React, { useState } from "react";
// import Avatar from "./assets/—Pngtree—student glyph black icon_4008235.png";

////////////////////////////////////////////////////////////////////

// const Card = (props) => {
//   return (
//     <div className="  shadow-xl bg-[#d9d8d8] hover:bg-[#e9543d] hover:text-white p-[20px] rounded-2xl cursor-pointer grid gap-[10px] w-[350px]">
//       <div className="flex items-center gap-4">
//         <img src={Avatar} alt="avatar" className="w-[50px]  " />
//         <h1 className=" text-2xl ">{props.name || "Inconu"}</h1>
//         <h2 className=" text-2xl ">{props.fullname || "Inconu"} </h2>
//       </div>
//       <p>{props.status || "Inconu"}</p>
//       <p>{props.age || "Inconu"}</p>
//       <p>{props.gmail || "Inconu"}</p>
//       <p className=" italic ">{props.paragraphe || "Inconu"}</p>
//     </div>
//   );
// };

// // /////////////////////////////////////////////////////////////////////

// const Cards = () => {
//   const students = [
//     {
//       name: "Rachid",
//       fullname: "karym",
//       age: 21,
//       gmail: "rachid@gmail.com",
//       status: "Student",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },
//     {
//       name: "Omar",
//       fullname: "#####",
//       age: 20,
//       gmail: "Omar@gmail.com",
//       status: "Student",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },

//     {
//       name: "Hafsa",
//       fullname: "#####",
//       age: 24,
//       gmail: "hafsa@gmail.com",
//       status: "Student",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },
//     {
//       name: "Meriem",
//       fullname: "#####",
//       age: 36,
//       gmail: "Meriem@gmail.com",
//       status: "Student",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },
//     {
//       name: "Yassine",
//       fullname: "#####",
//       age: 25,
//       gmail: "Yassine@gmail.com",
//       status: "Teacher",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },
//     {
//       name: "",
//       fullname: "",
//       age: "",
//       status: "",
//       paragraphe:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat.",
//     },
//   ];

//   return (
//     <div className=" grid grid-cols-4 m-[20px] gap-5">
//       {students.map((item, index) => (
//         <Card
//           age={item.age}
//           fullname={item.fullname}
//           name={item.name}
//           status={item.status}
//           paragraphe={item.paragraphe}
//           gmail={item.gmail}
//         />
//       ))}
//     </div>
//   );
// };



// const Card = ({ name, fullname, status, age, gmail, paragraphe, children }) => {
//   return (
//     <div className="  shadow-xl bg-[#d9d8d8] hover:bg-[#e9543d] hover:text-white p-[20px] rounded-2xl cursor-pointer grid gap-[10px] w-[350px]">
//       <div className="flex items-center gap-4">
//         <img src={Avatar} alt="avatar" className="w-[50px]  " />
//         <h1 className=" text-2xl ">{name || "Inconu"}</h1>
//         <h2 className=" text-2xl ">{fullname || "Inconu"} </h2>
//       </div>
//       <p>{children}</p>
//       <p>{status || "Inconu"}</p>
//       <p>{age || "Inconu"}</p>
//       <p>{gmail || "Inconu"}</p>
//       <p className=" italic ">{paragraphe || "Inconu"}</p>
//     </div>
//   );
// };

// const Cards = () => {

//   const [age , setAge ] = useState("21");
//   const handleClick =() => {

// setAge("40")

//   }




//   return (
//     <div>
//  <div className=" grid grid-cols-4 m-[20px] gap-5">
//       <Card
//         name="rachid"
//         fullname="karym"
//         age ={age}
//         gmail="rachid@gmail.com"
//         paragraphe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti  distinctio illum, laboriosam at ipsum quis perferendis vel  necessitatibus sit odit? Tempore sed facilis similique recusandae, et    sint accusantium placeat! Placeat."></Card>
//     </div>
//        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75">Click here !</button>
//     </div>
   
//   );
// };

// export default Cards;
