import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './screens/login/login';
import { LOGIN_URL } from './screens/login/login.type';
import MovieList from './screens/movie-list/movies-list';
import { MOVIES_LIST_URL } from './screens/movie-list/movies-list.type';
import { GlobalStyles } from './themes/main/global-styles';
import theme from './themes/main/theme';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MovieList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
