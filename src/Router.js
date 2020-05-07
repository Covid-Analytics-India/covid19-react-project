import React, {lazy} from 'react';
import {Switch, Route} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import headerHoc from './hoc/headerHoc';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.scss';
import {globalStyles} from './globalStyles';

const NewsPage = lazy(() => import('./pages/NewsPage'));
const QuizPage = lazy(() => import('./pages/QuizPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={suspenseHoc(headerHoc(HomePage))} />
      <Route exact path="/quiz" component={suspenseHoc(headerHoc(QuizPage))} />
      <Route exact path="/news" component={suspenseHoc(headerHoc(NewsPage))} />
    </Switch>
  );
}

export default withStyles(globalStyles)(Router);
