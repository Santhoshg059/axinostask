import React,{useEffect,useState} from 'react'
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Dashboard() {

  let navigate = useNavigate()
  let [blogs,setBlogs] = useState([])

  const getBlogs=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
      {
        
        // toast.success('Blogs fetched Successfully!')
        setBlogs(res.data)
      }
    } catch (error) {
        toast.error("Internal Server Error")
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.success('Blog Deleted Successfully!');
        const updatedBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(updatedBlogs);   }
    } catch (error) {
      toast.error('Failed to delete blog');
      console.error(error); // Log the error for debugging
    }
  };

  const toggleBlog = async (blog) => {
    try {
      const updatedBlog = { ...blog, status: !blog.status };
      const res = await axios.put(`${API_URL}/${blog.id}`, updatedBlog);
      if (res.status === 200) {
        toast.success('Blog Status Changed!');
        getBlogs();
      }
    } catch (error) {
      toast.error('Internal Server Error');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  useEffect(()=>{
    getBlogs()
  },[])
  return <div className='container-fluid'>
    <Topbar/>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>username</th>
          <th>email</th> 
          <th>Street</th>
          <th>suite</th>
          <th>city</th>
          <th>zipcode</th>
          <th>phone</th>
          <th>website</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          blogs.map((e,i)=>{
            return <tr key={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              
              <td >
                  {e.email}
              </td>
              <td>{e.address.street}</td>
              <td>{e.address.suite}</td>
              <td>{e.address.city}</td>
              <td>{e.address.zipcode}</td>
              <td>{e.phone}</td>
              <td>{e.website}</td>
              <td>
                <label className="switch">
                  <input type="checkbox" defaultChecked={e.status} onChange={()=>toggleBlog(e)}/>
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <Button variant="info"  onClick={()=>navigate(`/edit/${e.id}`)}>Edit</Button>
                &nbsp;
                <Button variant="danger" onClick={()=>handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </div>
}

export default Dashboard