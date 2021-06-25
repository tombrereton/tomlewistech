import React from "react"
import HeaderBox from "../HeaderBox"
import Footer from "../Footer"
import * as styles from "./layout.module.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faCameraRetro, faUserCheck, faChartArea, faCog, faEye, faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faDesktop, faCameraRetro, faUserCheck, faChartArea, faCog, faEye, faMailBulk, fab, faEnvelope)

export default function Layout({ children }) {
	return (
		<div>
			<HeaderBox />
			{children}
			<Footer />
		</div>
	)
}