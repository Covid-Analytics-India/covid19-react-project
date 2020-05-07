import React, {useEffect, useState} from 'react';
import {v1 as uuidv1} from 'uuid';
import NewsCard from './components/NewsCard';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import PageTitle from '../../modules/PageTitle';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState(null);
  const [sortBy, setSortBy] = useState('popularity');
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const query = 'india+corona+covid+covid+19+Covid-19+Coronavirus';
    const apiKey = '972190aff7fe45938a85fdd9235d154e';
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
      <PageTitle>{t('News')}</PageTitle>
      <span className={classes.sortBy}>
        {t('Sort_By')}:
        <span
          style={{opacity: sortBy === 'popularity' ? 1 : 0.5}}
          onClick={() => handleSort('popularity')}
        >
          {t('Top_Headlines')}
        </span>
        <span
          style={{opacity: sortBy === 'publishedAt' ? 1 : 0.5}}
          onClick={() => handleSort('publishedAt')}
        >
          {t('Latest_News')}
        </span>
      </span>
      {newsArticles !== null ? (
        newsArticles.map((newsArticle) => (
          <NewsCard key={uuidv1()} newsArticle={newsArticle} />
        ))
      ) : (
        <p className={classes.loadingNews}>Loading News for you...</p>
      )}
    </div>
  );
};

export default NewsPage;
