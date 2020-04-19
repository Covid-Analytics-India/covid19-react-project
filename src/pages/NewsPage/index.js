import React, {useEffect, useState} from 'react';
import NewsCard from './components/NewsCard';
import {useStyles} from './styles';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const query = 'india+corona+covid+covid+19+Covid-19+Coronavirus';
    const apiKey = '9e58cfc12b0142d9a23653cd75db603e';
    const language = 'en';

    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=popularity&apiKey=${apiKey}`
        );
        const newsArticles = await response.json();
        setNewsArticles(newsArticles.articles);
      } catch (e) {
        console.log(e);
        setNewsArticles(null);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className={classes.root}>
      {newsArticles !== null ? (
        newsArticles.map((newsArticle) => (
          <NewsCard
            key={`${newsArticle.publishedAt}${newsArticle.author}`}
            newsArticle={newsArticle}
          />
        ))
      ) : (
        <p className={classes.noArticle}>No Articles Found</p>
      )}
    </div>
  );
};

export default NewsPage;
