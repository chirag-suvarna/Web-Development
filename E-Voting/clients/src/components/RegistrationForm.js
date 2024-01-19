import React,{useState} from 'react'
import axios from "axios"
import { toast } from 'react-hot-toast';


const RegistrationForm = () => {
  const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        contact_no: '',
        email_id: '',
        password: '',
        date_of_birth: '',
      });
  
      const handleChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value,
        });
      };
  
  const createUser = async (e) => {
    e.preventDefault();
    const {first_name,last_name,contact_no,email_id,password,date_of_birth} = userData
    
    try {
      const {data} = await axios.post('/api/user/createuser',{
        first_name,last_name,contact_no,email_id,password,date_of_birth
      })
      if(data.error){
        toast.error(data.error)
      }
      else
      {
        setUserData({})
        toast.success('Registered')
      }
    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={createUser}>
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" value={userData.first_name} onChange={handleChange} />

      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" value={userData.last_name} onChange={handleChange} />

      <label htmlFor="contact_no">Contact Number</label>
      <input type="number" id="contact_no" name="contact_no" value={userData.contact_no} onChange={handleChange} />

      <label htmlFor="email_id">Email ID</label>
      <input type="email" id="email_id" name="email_id" value={userData.email_id} onChange={handleChange} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />

      <label htmlFor="date_of_birth">DOB</label>
      <input type="date" id="date_of_birth" name="date_of_birth" value={userData.date_of_birth} onChange={handleChange} />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm