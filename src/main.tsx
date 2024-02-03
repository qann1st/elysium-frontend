import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import 'styles/styles.scss';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
