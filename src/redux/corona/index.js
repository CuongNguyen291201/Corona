import { Provider } from 'react-redux';

import configureStore from './store';
import App from './page/App';

const { store } = configureStore()

const Corona = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Corona;
