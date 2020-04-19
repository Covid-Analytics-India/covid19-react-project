import React from 'react';

import NewsCardContainer from './components/NewsCardContainer';
import NewsCardMedia from './components/NewsCardMedia';
import NewsCardContent from './components/NewsCardContent';

function NewsCard(props) {
  const {newsArticle} = props;
  const {urlToImage, ...cardContent} = newsArticle;
  return (
    <NewsCardContainer>
      <NewsCardMedia src={urlToImage} />
      <NewsCardContent {...cardContent} />
    </NewsCardContainer>
  );
}
export default NewsCard;
