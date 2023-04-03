import { FaRegStar } from 'react-icons/fa'
import './_summary.scss'

interface IHeaderProps {
	firstName: string
	lastName: string
	overlay: boolean
	setOverLay: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ firstName, lastName, overlay, setOverLay }: IHeaderProps) => {
	return (
		<div id="header">
			<div className="userInfo">
				<FaRegStar className="star" />
				<p className="name">{firstName} {lastName}</p>
			</div>
			<div className="btnOrder" onClick={() => setOverLay(!overlay)}>New Order</div>
		</div>
	)
}

export default Header