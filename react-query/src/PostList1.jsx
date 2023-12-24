import { useQuery } from '@tanstack/react-query'
import getposts from './api/posts';

const PostList1 = () => {

    const {status, data, error}= useQuery({
        queryKey: ['posts'],
        queryFn: getposts
    });

    console.log('status:' , status)
    console.log('error:' , error)
    console.log('data:' , data)
    const isDataLoaded = status === "success";

    if(status === "loading") return <h1>Loading....</h1>
    if(error) {return <h1>Error Fetching Posts: {error.message}</h1>}
    if (!data || data.length === 0) return <h1>No posts available</h1>;
  return isDataLoaded ?(
    <div>
        <h1>Post List One</h1>
        <ol>
            {data.map((post) => (<li key={post.id}>
                {post.title}
            </li>))}
        </ol>
    </div>
  ): (
    <h1>loading....</h1>
  )
}

export default PostList1