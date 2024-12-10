import React, { useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import PageBackground from './common/PageBackground/PageBackground';
import Todo from './components/Todo/Todo';
import PageFooter from './common/PageFooter/PageFooter';

const App: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <PageBackground>
      <Todo />
      <PageFooter />
    </PageBackground>
  );
};

export default App;
