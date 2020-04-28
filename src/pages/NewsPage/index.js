import React, {useEffect, useState} from 'react';
import NewsCard from './components/NewsCard';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState(null);
  const [sortBy, setSortBy] = useState('popularity');
  const classes = useStyles();
  const [, i18n] = useTranslation();

  useEffect(() => {
    const query = 'india+corona+covid+covid+19+Covid-19+Coronavirus';
    const apiKey = '9e58cfc12b0142d9a23653cd75db603e';
    const language = i18n.language;

    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=${sortBy}&apiKey=${apiKey}`
        );
        const newsArticles = await response.json();
        console.log(newsArticles);
        setNewsArticles(newsArticles.articles);
      } catch (e) {
        console.log(e);
        setNewsArticles(null);
      }
    };

    fetchNewsData();
  }, [i18n.language, sortBy]);

  const handleSort = (value) => {
    if (sortBy !== value) setSortBy(value);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>NEWS</h1>
      <span className={classes.sortBy}>
        Sort By:
        <span onClick={() => handleSort('popularity')}>Top Headlines</span>
        <span onClick={() => handleSort('publishedAt')}>Latest News</span>
      </span>
      {newsArticles !== null ? (
        newsArticles.map((newsArticle) => (
          <NewsCard
            key={`${newsArticle.publishedAt}${newsArticle.author}`}
            newsArticle={newsArticle}
          />
        ))
      ) : (
        <p className={classes.loadingNews}>Loading News for you...</p>
      )}
    </div>
  );
};

export default NewsPage;
