import {useState,useEffect} from 'react'
function Post() {

    const [posts,setPosts]=useState([]);
    const [liked, setLiked]=useState(false);
    
    useEffect(()=>{
        fetch("http://localhost:3001/posts")
        .then(res=>res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.log(err))
    },[])



    return (
    <div className='d-flex justify-content-center'>
        {posts.length>0 ? (
            <div>
                {posts.map((post)=>(
                    <div className='my-3' style={{border:"1px solid #dbdbdb",borderRadius:"5px"}} key={post.id}>
                        <div className="d-flex ps-2">
                            <img  className="dp" src={post.profilePic} alt="Profile pic" />
                            <h5 className='mt-2'>{post.username}</h5>
                        </div>
                        <img className='image mt-1' src={post.imageUrl} alt="postpic" />
                        <div className='d-flex ps-2'>
                            <i className={liked ? "bi bi-suit-heart-fill":"bi bi-suit-heart"} onClick={()=>setLiked((!liked))} style={{color:liked? "red":"black"}}></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                            <i className="bi bi-bookmark ms-auto"></i>
                        </div>
                        <div className='ps-2'>
                            {post.likes} Likes
                        </div>
                        <p className='ps-2'><b>{post.username}</b> {post.caption}</p>
                        {/* <div>
                            {post.comments.map((comment)=>(
                                <p key={comment.id}>
                                    <b>{comment.username}</b> {comment.text}
                                </p>
                            ))}
                        </div> */}
                    </div>
                ))}
                
            </div>

        ):(
            <div>
                Loading post...
            </div>
        )}

    </div>
  )
}

export default Post