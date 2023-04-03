import { useState } from 'react'
import { Summary, Orders } from "../components"
import { ScreenOverlay } from "../components"

const Home = () => {
	const [overlay, setOverLay] = useState(false)

	return (
		<div className="wrapper">
			<div className="container">
				<ScreenOverlay overlay={overlay} setOverLay={setOverLay} />
				<section>
					<Summary overlay={overlay} setOverLay={setOverLay} />
				</section>
				<section>
					<Orders />
				</section>
			</div>
		</div>
	)
}

export default Home