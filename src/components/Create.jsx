import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Topbar from './Topbar';
import BlogCard from './common/BlogCard'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Create() {
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

  const handleCreate = async()=>{
    try {
      
      let data = {name,username,email,street,suite,city,zipcode,phone,website,status:true}
      let res = await axios.post(API_URL,data)
      if(res.status===201)
      {
        
        toast.success("Blog Created Successfully")
        setBlogs([...blogs, res.data]);

      navigate('/dashboard');
       
      }

    } catch (error) {
      
    }
  }
  return <div className='container-fluid'>
      <Topbar/>
      <div className='homeWrapper'>
      <div className='formWrapper'>
        <Form>
        <Form.Group className="mb-3">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="username Url" onChange={(e)=>{setUsername(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
  <Form.Label>Street</Form.Label>
  <Form.Control type="text" placeholder="street" onChange={(e) => {setStreet(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Suite</Form.Label>
  <Form.Control type="text" placeholder="suite" onChange={(e) => {setSuite(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>City</Form.Label>
  <Form.Control type="text" placeholder="city" onChange={(e) => {setCity(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Zipcode</Form.Label>
  <Form.Control type="text" placeholder="zipcode" onChange={(e) => {setZipcode(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Phone</Form.Label>
  <Form.Control type="text" placeholder="phone" onChange={(e) => {setPhone(e.target.value)}}/>
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Website</Form.Label>
  <Form.Control type="text" placeholder="website" onChange={(e) => {setWebsite(e.target.value)}}/>
</Form.Group>
        
        <Button variant="primary" onClick={()=>handleCreate()}>
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

export default Create