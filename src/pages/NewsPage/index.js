import React, {useEffect, useState} from 'react';

const NewsPage = () => {
  const [newsArticles, setNewsArticles] = useState(null);

  useEffect(() => {
    console.log('did mount');
    const query =
      'corona%20OR%20covid%20OR%20covid%2019%20OR%20Covid-19%20OR%20Coronavirus';
    const apiKey = '9e58cfc12b0142d9a23653cd75db603e';
    const language = 'hi';

    const fetchNewsData = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=popularity&apiKey=${apiKey}`
      );

      const newsArticles = await response.json();

      console.log(newsArticles);

      setNewsArticles(newsArticles.articles);
    };

    fetchNewsData();
  }, []);

  return (
    <div className="news-container">
      {newsArticles ? (
        newsArticles.map((newsArticle) => (
          <div key={`${newsArticle.publishedAt}${newsArticle.author}`}>
            {newsArticle.title}
          </div>
        ))
      ) : (
        <p>No Articles Found</p>
      )}
    </div>
  );
};

export default NewsPage;
