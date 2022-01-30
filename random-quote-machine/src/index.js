import React from 'react';
import ReactDOM from 'react-dom';
import Index from './views/Index';
import ErrorBoundary from './views/ErrorBoundary';

ReactDOM.render(
  <>
    <ErrorBoundary>
      <Index />
    </ErrorBoundary>
  </>,
  document.getElementById('root')
);
