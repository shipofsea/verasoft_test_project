import ReactDOM from "react-dom/client"
import App from './App'
import store from './features/store'
import reportWebVitals from './reportWebVitals'
import './static/css/index.scss'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals()
