import {useNavigate} from 'react-router-dom'

function Sidebar() {

  const navigate=useNavigate();

  return (
    <div className="m-3 position-fixed ">
        <div className="d-flex flex-column ">
           <img className='logo-text' src="src\assets\Instagram_text.png" alt="logopic" />
           <div className="sidebar-item" onClick={()=>{navigate('/')}}><i className="bi bi-house-door-fill"></i>Home</div>
           <div className='sidebar-item'><i className="bi bi-search"></i>Search</div>
           <div className='sidebar-item'><i className="bi bi-compass"></i>Explore</div>
           <div className='sidebar-item'><i className="bi bi-play-btn-fill"></i>Reels</div>
           <div className='sidebar-item'><i className="bi bi-send"></i>Messages</div>
           <div className='sidebar-item'><i className="bi bi-heart"></i>Notifications</div>
           <div className='sidebar-item'><i className="bi bi-plus-square"></i>Create</div>
           <div className='sidebar-item' onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className=" position-fixed bottom-0 d-flex flex-column mb-4">
            <div className='sidebar-item'><i className="bi bi-threads"></i>Threads</div>
            <div className='sidebar-item'><i className="bi bi-list"></i>More</div>
        </div>
    </div>
  )
}

export default Sidebar