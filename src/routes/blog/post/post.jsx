import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

function Post() {
    const [content, setContent] = useState("");
    const { postId } = useParams();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

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
            <div className="post-container">
                <div className="post">
                    <h1 className="title">{title}</h1>
                    <h1 className="date">{date}</h1>
                    <ReactMarkdown className="react-markdown">{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default Post;
