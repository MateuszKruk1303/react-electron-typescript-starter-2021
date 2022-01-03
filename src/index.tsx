import ReactDOM from 'react-dom'
import App from './app'
import { i18n } from './config'

i18n.init()

ReactDOM.render(<App />, document.getElementById('root'))
