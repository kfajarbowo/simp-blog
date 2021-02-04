import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () =>{
    //custom hook
   const {data: blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
// for useEffect L:15&22   const [name,setName] = useState('kidung');
//    const handleDelete = (id) =>{
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All blogs"/> }
            {/* <button onClick={()=> setName('luigi')}>Change Name</button> */}
            {/* <p>{name}</p> */}
            {/* Reusing Components */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'fajar')} title='Fajarblogs'/> */}
        </div>
    );
}

export default Home