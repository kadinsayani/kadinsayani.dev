import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";
import styles from "../styles/markdown-styles.module.css";
import { IoArrowBack } from "react-icons/io5";

function Post() {
  const [content, setContent] = useState("");
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        setTitle(lines[1].split(":")[1].trim().replace(/['"]+/g, ""));
        setDate(lines[5].split(":")[1].trim());
        setContent(lines.slice(7).join("\n"));
      });
  }, [postId]);

  return (
    <div>
      <ScrollToTop />
      <button onClick={back} className="back-button">
        <IoArrowBack size={40} color={"#edf5fc"} />
      </button>
      <div className="post">
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.date}>{date}</h1>
        <ReactMarkdown className={styles.reactMarkdown}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default Post;
