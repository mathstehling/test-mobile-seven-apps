import React from 'react';
// import StoryBook from '../storybook';
import {ThemeProvider} from 'styled-components'
import {theme} from './styles/theme'
import {Routes} from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )

}




export default App;
