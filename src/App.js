import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'
import Header from './components/HeaderBox/headerBox'
import Footer from './components/Footer/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faCameraRetro, faUserCheck, faChartArea, faCog, faEye, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faDesktop, faCameraRetro, faUserCheck, faChartArea, faCog, faEye, faMailBulk, fab, faEnvelope)



// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Header />
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
          <Footer />
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
