import { Link } from "react-router-dom";
import posts from "../../scripts/posts.json";
import "../App.css";

function Blog() {
  return (
    <div className="blog-container">
      <ul className="post-list">
        {posts.map((post) => {
          return (
            <li key={post.id} className="post-item">
              <h2>{post.title}</h2>
              <p>{post.description}</p>{" "}
              <Link to={`/blog/${post.id}`}>Read More</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blog;
