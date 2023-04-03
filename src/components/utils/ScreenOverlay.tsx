import { IoCloseSharp } from 'react-icons/io5'
import Spinner from './Spinner'

interface IScreenOverlayProps {
	overlay: boolean
	setOverLay: React.Dispatch<React.SetStateAction<boolean>>
}

const ScreenOverlay = ({ overlay, setOverLay }: IScreenOverlayProps) => {
	return (
		<div id="overlay" style={overlay ? { display: 'block' } : { display: 'none' }}>
			<div className="iconClose">
				<IoCloseSharp className="close" onClick={() => setOverLay(!overlay)} />
				<Spinner loading={true} color={`#fff`} size={75} isTxt={true} type={`overlay`} />
			</div>
		</div>
	)
}

export default ScreenOverlay