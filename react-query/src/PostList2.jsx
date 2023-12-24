import { useQuery } from '@tanstack/react-query'
import getposts from './api/posts';

const PostList2 = () => {

    const {status, data, error} = useQuery({
        queryKey: ['posts'],
        queryFn: getposts,
        //refetchInterval:1000,
        //staleTime: 1000
    });

    console.log('status:' , status)
    console.log('error:' , error)
    console.log('data:' , data)
    const isDataLoaded = status === "success";

    if(status === "loading") return <h1>Loading....</h1>
    if(error) {return <h1>Error Fetching posts: {error.message}</h1>}
    if (!data || data.length === 0) return <h1>No posts available!!!</h1>;

  return isDataLoaded ?(
    <div>
        <h1>Post List Two</h1>
        <ol>
            {data.map(post => (
             <li key={post.id}>{post.title}</li>
            ))}
        </ol>
    </div>
  ): (
    <h1>Loading .....</h1>
  )
}

export default PostList2