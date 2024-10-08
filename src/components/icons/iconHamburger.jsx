export default function IconHamburger({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={`fill-black ${className}`}
			width='23'
			height='14'
			viewBox='0 0 23 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M0.270325 8.34501H2.73127V5.83039H0.270325V8.34501Z' />
			<path d='M0.270325 13.3742H2.73127V10.8596H0.270325V13.3742Z' />
			<path d='M0.270325 3.31577H2.73127V0.801147H0.270325V3.31577Z' />
			<path d='M5.19221 8.34501H22.4188V5.83039H5.19221V8.34501Z' />
			<path d='M5.19221 13.3742H22.4188V10.8596H5.19221V13.3742Z' />
			<path d='M5.19221 0.801147V3.31577H22.4188V0.801147H5.19221Z' />
		</svg>
	);
}
