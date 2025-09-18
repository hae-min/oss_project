import axios from 'axios'
import {useState,useEffect} from 'react'

function Profile() {

   const [profile,setProfile]=useState(null);
   const [followers,setFollowers]=useState([]);
   const [unfollowed,setUnfollowed]=useState(0);


   useEffect(()=>{
        axios.get('http://localhost:3001/profile')
        .then(data=>{setProfile(data.data); console.log(data)})
        .catch(err=>console.log(err))


        axios.get('http://localhost:3001/followers')
        .then(data=>{setFollowers(data.data); console.log(data)})
        .then(err=>console.log(err))

   },[unfollowed])


  function HandleOnchange(e){
       setProfile(prev=>({
         ...prev,
         [e.target.name]: e.target.value
       }))
  }
   
  const handleUpdate=async ()=>{
       axios.put('http://localhost:3001/profile',profile)
       .then(console.log("updated"))
       .catch(err=>console.log(err))
  }

  const handleUnfollow=async(id)=>{
       axios.delete(`http://localhost:3001/followers/${id}`)
       .then(alert("unfollowed"))
       .then(setUnfollowed(!unfollowed))
       .catch(err=>console.log(err))
  }


  return (
    <div className='m-5'>
       {profile ?(
        <div>
            <img src={profile.profilePic} alt="profilepic" className='profile-dp '/>
           <h5>{profile.username}</h5>

           <input  className="my-4 form-control w-25"
                  type="text" 
                  value={profile.username}
                  name="username"
                  onChange={HandleOnchange}
           />
           <input className='my-4 form-control w-25'
                  type="text"
                  value={profile.profilePic}
                  name="profilePic"
                  onChange={HandleOnchange}
           />
           <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
        </div>
       ):(
        <div>
           Loading Profile
        </div>
       )}
      
      <div className='my-5 followers'>
         <h4>Your Followers</h4>
         {followers.length>0 ? (
            followers.map((follower)=>(
               <div key={follower.id} className='d-flex m-2' style={{width:"50%"}}>
                  <img src={follower.profilePic} alt="profilepic" className='follower-dp mt-2'/>
                  <h6 className='mt-3 ms-2'>{follower.username}</h6>
                  <button className="btn btn-secondary btn-sm ms-auto" onClick={()=>{handleUnfollow(follower.id)}}>Unfollow</button>
               </div>
            ))
         ):(
            <div>Loading followers</div>
         )}
      </div>
    </div>
  )
}

export default Profile