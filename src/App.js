import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((post) => setPost(post.splice(0, 10)));
  }, []);

  return (
    <div className="App">
      <h1 className="bg-info">Fetch API Data</h1>
      {post.map((post) => (
        <div key ={post.id} className="bg-danger " >
        <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
