import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {v1 as uuidv1} from 'uuid';
import PageTitle from '../../modules/PageTitle';
import {API_URL} from '../../utils/constants';
import NewsCard from './components/NewsCard';
import {useStyles} from './styles';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState(null);
  const [fetchedData, setfetchedData] = useState(null);
  const [sortBy, setSortBy] = useState('published');
  const classes = useStyles();
  const [t, i18n] = useTranslation();

  useEffect(() => {
    const fetchNewsData = async () => {
      const headers = {
        headers: {
          Accept: 'application/json',
          'Content-type': 'application.json',
        },
      };
      try {
        const response = await Axios.get(`${API_URL}/api/get_news`, headers);
        console.log(response.data.en_published.articles);
        setfetchedData(response.data);
        setNewsArticles(response.data.en_published.articles);
      } catch (e) {
        console.error(e);
        setNewsArticles(null);
      }
    };

    fetchNewsData();
  }, []);

  useEffect(() => {
    const language = i18n.language;
    console.log('SET SORT BY');
    if (fetchedData) {
      console.log('FETCH DATA', `${language}_${sortBy}`);

      switch (`${language}_${sortBy}`) {
        case 'en-US_popularity':
        case 'en_popularity':
          setNewsArticles(fetchedData.en_popularity.articles);
          break;
        case 'hi_popularity':
          setNewsArticles(fetchedData.hi_popularity.articles);
          break;
        case 'en-US_published':
        case 'en_published':
          setNewsArticles(fetchedData.en_published.articles);
          break;
        case 'hi_published':
          setNewsArticles(fetchedData.hi_published.articles);
          break;
        default:
          console.error('Unable to Load news :(');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language, sortBy, fetchedData]);

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
          style={{opacity: sortBy === 'published' ? 1 : 0.5}}
          onClick={() => handleSort('published')}
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
