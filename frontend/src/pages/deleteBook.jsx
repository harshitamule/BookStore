
import React, {useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DeleteBook = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteBook = () =>{
    setLoading(true);
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(() => {
      setLoading(false);
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      alert('An error happened, check the console');
      console.log(err);
    })
  }  
  return (
    <div className='p-4'>
      <BackButton/>
      
      <div className='flex flex-col items-center mt-9'>
        <h1 className='text-3xl my-8'>Delete Book</h1>
        {loading? <Spinner/> : ''}
        <div className='flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto'>
        
          <h3 className='text-2xl'>Are you sure you want to delete?</h3>
          <button className='p-4 bg-red-800 text-white m-8 w-full'
          onClick={handleDeleteBook}>Yes, Delete</button>
        </div>
      </div>
    </div>
      
  )
}

export default DeleteBook
