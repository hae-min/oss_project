import {useState,useEffect} from 'react'
import axios from 'axios'
function Suggestions() {

    const [profile,setProfile]=useState(null);
    const [suggestions,setSuggestions]=useState([]);

    useEffect(()=>{
          fetch("http://localhost:3001/profile")
          .then(res=>res.json())
          .then(data=>setProfile(data))
          .catch(err=>console.log(err))

          fetch("http://localhost:3001/suggestions")
          .then(res=>res.json())
          .then(data=>setSuggestions(data))
          .catch(err=>console.log(err))
    },[suggestions,profile]);
   

    const handleFollowers=async(id, username, profilePic)=>{
      axios.post('http://localhost:3001/followers',{"id":id,"username":username,"profilePic":profilePic})
      .then(alert('Followed'))
      .catch(err=>console.log(err))
    }


  return (
    <div className='suggestions w-75 m-4'>
      {profile ? 
      <div className='d-flex'>
          <img  className="dp" src={profile.profilePic} alt="Profile pic" />
          <h5 className='mt-3'>{profile.username}</h5>
          <p className='ms-auto mt-3 text-primary'>Switch</p>
      </div>:<p>Loading Profile</p>}

      <div className='d-flex mt-1'>
        <p>Suggested for you</p>
        <b className='ms-auto'>See All</b>
      </div>

      <div>
        {suggestions.length>0 ? (
          <div>
            {suggestions.map((suggestion)=>(
                <div key={suggestion.id}>
                  <div className="d-flex">
                      <img  className="dp" src={suggestion.profilePic} alt="Profilepic"/>
                      <h5 className='mt-3'>{suggestion.username}</h5>
                      <a className='ms-auto text-primary mt-3 text-decoration-none' onClick={()=>{handleFollowers(suggestion.id,suggestion.username,suggestion.profilePic)}}>Follow</a>
                  </div>
                </div>
                ))}
          </div>
        ):(
        <div>
          Loading
        </div>)
        }
      </div>
     
    </div>
  )
}

export default Suggestions