// import "./Existing.css";
// import { Link } from "react-router-dom";
// import img from './Image/RBG.png';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react'; // Import useState hook

// const Existing = () => {
//   const [bloodGroup, setBloodGroup] = useState(''); // State for blood group

//   const navigate = useNavigate();
  
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     navigate(`/showList?bloodGroup=${bloodGroup}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}> {/* Added onSubmit event handler to the form */}
//       <div className="Existing_container">
//         <div className="Existing_image_container">
//           <div className="Existing_image">
//             {/* Corrected Link component usage */}
//             <Link to="/main">
//               <img src={img} alt=""/>
//             </Link>
//           </div>
//         </div>
//         <div className="Existing_Form">
//           <div className="inner_Search">
//             <input
//               type="text"
//               placeholder="Search...."
//               className="Existing_Search_Box"
//               required
//               value={bloodGroup} // Set value to bloodGroup state
//               onChange={(e) => setBloodGroup(e.target.value)} // Update bloodGroup state on change
//             />
//           </div>
//           <div>
//             {/* Added type="submit" to the button */}
//             <button type="submit" className="Searchbtn">Search</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Existing;
import "./Existing.css";
import { Link } from "react-router-dom";
import img from './Image/RBG.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook

const Existing = () => {
  const [bloodGroup, setBloodGroup] = useState(''); // State for blood group
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Get the user's location and then navigate to the showList page
    getLocationAndNavigate();
  }

  // Function to get the user's location and navigate to the showList page
  const getLocationAndNavigate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          navigate(`/showList?bloodGroup=${bloodGroup}&latitude=${latitude}&longitude=${longitude}`);
        },
        error => {
          console.error('Error getting location:', error);
          // Handle error if needed
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle unsupported browser
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Added onSubmit event handler to the form */}
      <div className="Existing_container">
        <div className="Existing_image_container">
          <div className="Existing_image">
            {/* Corrected Link component usage */}
            <Link to="/main">
              <img src={img} alt=""/>
            </Link>
          </div>
        </div>
        <div className="Existing_Form">
          <div className="inner_Search">
            <input
              type="text"
              placeholder="Search...."
              className="Existing_Search_Box"
              required
              value={bloodGroup} // Set value to bloodGroup state
              onChange={(e) => setBloodGroup(e.target.value)} // Update bloodGroup state on change
            />
          </div>
          <div>
            {/* Added type="button" to the button to prevent form submission */}
            <button type="button" className="Searchbtn" onClick={getLocationAndNavigate}>Search</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Existing;
