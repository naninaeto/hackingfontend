import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parser = new Parser();
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const feedUrl = "https://www.securitymagazine.com/rss";

    const fetchData = async () => {
      try {
        const feed = await parser.parseURL(CORS_PROXY + feedUrl);
        setArticles(feed.items);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Security News</h2>
      <p>Stay updated with the latest news in cybersecurity and hacking events.</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <p>{article.contentSnippet}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
