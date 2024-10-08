export default function IconPlus({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={`fill-black ${className}`}
			width='19'
			height='18'
			viewBox='0 0 19 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M18.0643 10.345H10.5204V17.8889H8.00577V10.345H0.461914V7.83042H8.00577V0.28656H10.5204V7.83042H18.0643V10.345Z' />
		</svg>
	);
}
