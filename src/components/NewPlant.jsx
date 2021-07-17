import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, headers } from "../services";

export default function NewPlant() {
  const [userName, setUserName] = useState('');
  const [plantName, setPlantName] = useState('');
  const [plantLocation, setPlantLocation] = useState('');
  const [plantImage, setPlantImage] = useState('');
  const [plantDescription, setPlantDescription] = useState('');

  const history = useHistory();
  // const [input] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      userName,
      plantName,
      plantLocation,
      plantImage,
      plantDescription,
    };

    const res = await axios.post(BASE_URL, { fields }, { headers });
    console.log(res);
    setUserName("");
    history.push(`/${res.data.id}`);
  };

  return (
    <div>
      <h3>Share</h3>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>   <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <br />
        <br />
        <label>Plant Name</label>   <input type="text" value={plantName} onChange={(e) => setPlantName(e.target.value)} />
        <br />
        <br />
        <label>Plant Location</label>   <input type="text" value={plantLocation} onChange={(e) => setPlantLocation(e.target.value)} />
        <br />
        <br />
        <label>Plant Image</label>   <input type="text" value={plantImage} onChange={(e) => setPlantImage(e.target.value)} />
        <br />
        <br />
        <label>Plant Description</label>   <input type="text" value={plantDescription} onChange={(e) => setPlantDescription(e.target.value)} />
        <br />
        <br />
        <button>Share New Plant</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}







// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL, headers } from "../services";

// export default function NewPlant() {
//   const [userName, setUserName] = useState('');
//   const [plantName, setPlantName] = useState('');
//   const [plantLocation, setPlantLocation] = useState('');
//   const [plantImage, setPlantImage] = useState('');
//   const [plantDescription, setPlantDescription] = useState('');

//   const history = useHistory();
//   const [input] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fields = {
//       userName,
//       plantName,
//       plantLocation,
//       plantImage,
//       plantDescription,
//     };

//     const res = await axios.post(BASE_URL, { fields: input }, { headers });
//     console.log(res);
//     setUserName("");
//     history.push(`//${res.data.id}`);
//   };

//   return (
//     <div>
//       <h3>Share</h3>
//       <form onSubmit={handleSubmit}>
//         <label>User Name</label>
//         <br />
//         <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
//         <br />
//         <label>Plant Name</label>
//         <br />
//         <input type="text" value={plantName} onChange={(e) => setPlantName(e.target.value)} />
//         <br />
//         <label>plantLocation</label>
//         <br />
//         <input type="text" value={plantLocation} onChange={(e) => setPlantLocation(e.target.value)} />
//         <br />
//         <label>Plant Image</label>
//         <br />
//         <input type="text" value={plantImage} onChange={(e) => setPlantImage(e.target.value)} />
//         <br />
//         <label>Plant Description</label>
//         <br />
//         <input type="text" value={plantDescription} onChange={(e) => setPlantDescription(e.target.value)} />
//         <br />
//         <button>Share New Plant</button>
//       </form>
//     </div>
//   );
// }






// import { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { BASE_URL, headers } from "../services";

// const defaultForm = {
//   userName: "",
//   plantName: "",
//   plantLocation: "",
//   plantImage: "",
//   plantDescription: "",
// };

// export default function NewPlant() {
//   const [input, setInput] = useState(defaultForm);
//   const history = useHistory();

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     console.log(id, value, input);

//     setInput((prevInput) => ({
//       ...prevInput,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post(BASE_URL, { fields: input }, { headers });
//     console.log(res);
//     history.push("/new-plant");
//   };

// return (
//   <div>
//     <h3>Share</h3>
//     <form onSubmit={handleSubmit}>
//       <label>User Name</label>
//       <br />
//       <input
//         id="userName" value={input.userName} onChange={handleChange} />
//       <br />
//       <label>Plant Name</label>
//       <br />
//       <input id="plantName" value={input.plantName} onChange={handleChange} />
//       <br />
//       <label>plantLocation</label>
//       <br />
//       <input id="plantLocation" value={input.plantLocation} onChange={handleChange} />
//       <br />
//       <label>Plant Image</label>
//       <br />
//       <input id="plantImage" value={input.plantImage} onChange={handleChange} />
//       <br />
//       <label>Plant Description</label>
//       <br />
//       <input id="plantDescription" value={input.plantDescription} onChange={handleChange} />
//       <br />
//       <button>Share New Plant</button>
//     </form>
//   </div>
// //   );
// // }
