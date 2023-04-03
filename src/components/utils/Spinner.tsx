import { ClipLoader, PulseLoader } from "react-spinners"

interface ISpinnerProps {
	loading: boolean
	color: string
	size: number
	isTxt: boolean
	type: string
}

const Spinner = ({ loading, color, size, isTxt, type }: ISpinnerProps) => {
	return (
		<div className="spinner text-center">
			{type === 'table' ? (
				<PulseLoader color={color} loading={loading} size={size} />
			) : (
				<ClipLoader color={color} loading={loading} size={size} />
			)}
			<p className="spinnerTxt" style={isTxt ? { display: 'block' } : { display: 'none' }}>Processing</p>
		</div>
	)
}

export default Spinner
