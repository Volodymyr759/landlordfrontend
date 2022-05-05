import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from "./store/store";
import { App } from './App';
import reportWebVitals from './reportWebVitals';

const store = setupStore();

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
      <App />
  </Provider>
);

reportWebVitals();
