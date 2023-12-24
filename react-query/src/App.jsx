import { useState } from 'react'
import './App.css'
import Post from './Post'
import PostList1 from './PostList1'
import PostList2 from './PostList2'
function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1/>)

  return (
    <>
      <button onClick={() => {setCurrentPage(<PostList1/>)}}>Post List 1</button>
      <button onClick={() => {setCurrentPage(<PostList2/>)}}>Post List 2</button>
      <button onClick={() => setCurrentPage(<Post id={1}/>)}>First Post</button>
      <button onClick={() => setCurrentPage(<createPost/>)}>Create Post</button>
      <br />
      {currentPage}
    </>
  );
}

export default App
