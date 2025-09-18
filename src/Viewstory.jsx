import { useParams,Link,useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'

function Viewstory() {
    const {id, tot}=useParams();
    const [viewstory,setViewstory]=useState(null);
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:3001/stories/${id}`)
        .then(res=>res.json())
        .then(data=>setViewstory(data))
        .catch(err=>console.log(err))
    },[id])

    if(id>tot || id<=0){
      navigate('/');
    }

  return (
    <div>
        {viewstory ? 
        <div className="d-flex justify-content-center align-items-center">
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-chevron-double-left text-secondary fs-3"></i></Link>
          <img  className="vh-100"  src={viewstory.imageUrl} alt="storypic" />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-chevron-double-right text-secondary fs-3"></i></Link>
        </div> :
        
        
        <div>Loading</div>}
    </div>
  )
}

export default Viewstory