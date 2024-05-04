import React, { useState, useEffect } from "react";
import Card from "../components/card"; // assuming the correct path to your Card component
import "../App.css";

export default function Newsection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data received from the API
        setArticles(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="news-main">
      <h1>Latest News</h1>
      <div className="card-section">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <Card
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
