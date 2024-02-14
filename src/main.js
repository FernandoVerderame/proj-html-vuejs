import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft, faChevronRight, faLocationDot, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faFacebookF, faTwitter, faInstagram);
library.add(faChevronLeft, faChevronRight, faLocationDot, faPhoneVolume, faEnvelope);
library.add(faCopyright);




const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')
