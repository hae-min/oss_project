import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Stories() {

  const[stories,setStories]=useState([]);
  const navigate=useNavigate();
  let tot=0;

  useEffect(()=>{
    fetch("http://localhost:3001/stories")
    .then(res=>res.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  })


  return (
    <div className='story d-flex'>
      <div className='d-none'>
        {tot=stories.length}
      </div>
      {stories.length>0 ?(
        stories.map((story)=>(
          <div key={story.id} className='mx-2' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-story'>
              <img src={story.profilePic} alt="dp" className='story-dp'/>
            </div>
            <p className='text-truncate' style={{width:"68px"}}>{story.username}</p>
          </div>
        ))
      ):(
        <p>loading</p>
      )}
    </div>
  )
}

export default Stories