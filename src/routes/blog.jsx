import { Link } from "react-router-dom";
import posts from "../posts.json";
import ScrollToTop from "../components/scrollToTop";
import "../styles/Blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <ScrollToTop />
      <div className="socials">
        <Link to="/">Home</Link>
      </div>
      <header className="blog-header">
        <h1>My Blog</h1>
      </header>
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
