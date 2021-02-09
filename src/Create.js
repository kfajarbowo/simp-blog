import {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('kidung');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }
    return(
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e)=> setTitle(e.target.value)}/>

                <label>Blog Content</label>
                <textarea required value={body} onChange={(e)=> setBody(e.target.value)}>

                </textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="kidung"></option>
                    <option value="fajar"></option>
                </select>
               { !isPending && <button>Add blog</button> }
               { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
    );
}

export default Create;