import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    Hello
  </div>
`

setupCounter(document.querySelector('#counter'))
