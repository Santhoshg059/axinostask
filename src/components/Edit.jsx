import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Topbar from './Topbar';
 import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
function Edit() {

  let {id} = useParams()

  let [name,setName] = useState("")
  let [username,setUsername] = useState("")
  let [email,setEmail] = useState("")
  let [street,setStreet]=useState("")
  let [suite,setSuite]=useState("")
  let [city,setCity]=useState("")
  let [zipcode,setZipcode]=useState("")
  let [phone,setPhone]=useState("")
let [website,setWebsite]=useState("")

  let navigate = useNavigate()

  const handleEdit = async () => {
    try {
      let data = { name, username, email, street, suite, city, zipcode, phone, website, status: true };
      let res = await axios.put(`${API_URL}/${id}`, data);
      if (res.status === 200) {
        toast.success("Blog Edited Successfully");
        navigate('/dashboard'); // Navigate back to the Dashboard after successful edit
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error");
    }
  };

  const getBlogById = async () => {
    try {
      let res = await axios.get(`${API_URL}/${id}`);
      if (res.status === 200) {
        const data = res.data; // Assuming the response is an object with data fields
        setName(data.name);
        setUsername(data.username);
        setEmail(data.email);
        setStreet(data.street);
        setSuite(data.suite);
        setCity(data.city);
        setZipcode(data.zipcode);
        setPhone(data.phone);
        setWebsite(data.website);
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      toast.error("Internal Server Error");
    }
  };
  useEffect(()=>{
    getBlogById()
  },[])

  return <div className='container-fluid'>
      <Topbar/>
      <div className='homeWrapper'>
      <div className='formWrapper'>
        
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" value = {name} placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" value = {username} placeholder="username Url" onChange={(e)=>{setUsername(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" value = {email} placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
  <Form.Label>Street</Form.Label>
  <Form.Control type="text" value = {street}  placeholder="street" onChange={(e) => {setStreet(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Suite</Form.Label>
  <Form.Control type="text" value = {suite} placeholder="suite" onChange={(e) => {setSuite(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>City</Form.Label>
  <Form.Control type="text" value = {city} placeholder="city" onChange={(e) => {setCity(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Zipcode</Form.Label>
  <Form.Control type="text" value = {zipcode} placeholder="zipcode" onChange={(e) => {setZipcode(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Phone</Form.Label>
  <Form.Control type="text" value = {phone} placeholder="phone" onChange={(e) => {setPhone(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Website</Form.Label>
  <Form.Control type="text" value = {website} placeholder="website" onChange={(e) => {setWebsite(e.target.value)}}/>
</Form.Group>
        
        <Button variant="primary" onClick={()=>handleEdit()}>
          Submit
        </Button>
      </Form>
      </div>
      <div className='previewWrapper'>
        <h2 style={{textAlign:"center"}}>Preview</h2>
        <BlogCard
          name={name}
          username={username}
          email={email}
          street={street}
          suite={suite}
          city={city}
          zipcode={zipcode}
          phone={phone}
          website={website}
        />
      </div>
      </div>
  </div>
}

export default Edit