import Stories from './Stories'
import Post from './Post'
function Feed() {
  return (
    <div className='border-start border-end' style={{borderColor:"#dbdbdb"}}>
        <Stories/>
        <Post/>
    </div>
  )
}

export default Feed