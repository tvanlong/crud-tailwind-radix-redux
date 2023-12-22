import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Theme } from '@radix-ui/themes'
import { BrowserRouter } from 'react-router-dom'
import '@radix-ui/themes/styles.css'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Theme>
        <App />
      </Theme>
    </Provider>
  </BrowserRouter>
)
