import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); //ReactDOM의 최상이 노드로 만들어줌
root.render(<App />); //하위 요소들 렌더링