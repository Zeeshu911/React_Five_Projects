import React from "react";
import { LuArrowRightCircle } from "react-icons/lu";

const Card = ({
  title,
  content,
  author,
  publishedAt,
  url,
  urlToImage,
  altImage,
}) => {
  const truncateTitle = (title) => {
    const noTitle = "No Title For This News";
    if (!title) {
      return noTitle;
    }
    const words = title.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + " ...";
    }
    return title;
  };

  const truncateContent = (content) => {
    const noContent = "Visit the website to read full article.";
    if (!content) {
      return noContent;
    }
    const words = content.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + " ...";
    }
    return content;
  };

  const truncateAuthor = (author) => {
    const anonymous = "Anonymous";
    if (!author) {
      return anonymous;
    }
    const words = author.split(" ");
    if (words.length > 2) {
      return words.slice(0, 2).join(" ") + " ...";
    }
    return author;
  };

  const truncateTime = (time) => {
    const timestamp = time;
    const truncateDate = timestamp.substring(0, 10);
    return truncateDate;
  };

  return (
    <>
      <div className="card">
        <div className="content">
          <img
            src={urlToImage ? urlToImage : altImage}
            alt={"POSTER NOT FOUND"}
          />
          <p>{truncateTitle(title)}</p>
          <p>{truncateContent(content)}</p>
          <div className="author">
            <p style={{ marginBottom: 0 }}>{truncateAuthor(author)}</p>
            <a href={url} target="_blank">
              <LuArrowRightCircle />
            </a>
          </div>
          <p>
            PUBLISHED AT: <span>{truncateTime(publishedAt)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
