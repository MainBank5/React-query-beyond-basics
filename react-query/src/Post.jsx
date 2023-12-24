import { useQuery } from "@tanstack/react-query";
import getposts from "./api/posts";
import getusers from "./api/Users";
import { useEffect } from "react";

const Post = (props) => {
    const postQuery = useQuery({
        queryKey:['ogPost', props.id], 
        queryFn: async ()=>{
            try{
                //getposts(props.id)
               const data = await getposts(props.id);
              console.log('Fetched Data:', data);
               return data;  
            }
            catch(error){throw new Error (`Error Fetching the data${error.message}`)}
             
            
        }
    }
    );

   const userQuery = useQuery({
        queryKey:['user', postQuery?.data?.userId],
        queryFn: () => {getusers(postQuery?.data?.userId)},
        enabled: postQuery?.data?.userId != null// Only enable userQuery if userId exists in data
    })

    useEffect(() => {
        console.log('Status:', postQuery.status);
        console.log('Data:', postQuery.data);
        console.log('Error:', postQuery.error);
    }, [postQuery.status, postQuery.data, postQuery.error])

    if (postQuery.status === "loading") return <h1>Getting the Posts....</h1>
    if(postQuery.error) {return <h2>Error Fetching the Post: {postQuery.error.message}</h2>}
    if (!postQuery.data) return null;

    console.log('Title:', postQuery.data.title);
    console.log('Body:', postQuery.data.body);

  return (
    <div>
        <h1>{postQuery.data.title || 'No title!!'}</h1>
        <p>{postQuery.data.body}</p>
        { /*userQuery.isLoading?(
            <small>Loading user....</small>
        ) :userQuery.isError ?(
            <small>Error Loading user data</small>
        ): (<p>{userQuery.data.name}</p>)*/}
        
    </div>
  )
}

export default Post