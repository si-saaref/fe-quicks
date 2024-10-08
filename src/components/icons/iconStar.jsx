export default function IconStar({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={`fill-black ${className}`}
			width='26'
			height='24'
			viewBox='0 0 26 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16.2816 8.32339L25.3216 9.10292L18.4693 15.05L20.5187 23.8889L12.7485 19.1991L4.97834 23.8889L7.04033 15.05L0.175415 9.10292L9.21547 8.33597L12.7485 0L16.2816 8.32339ZM8.02102 19.7021L12.7485 16.848L17.4886 19.7146L16.2313 14.3334L20.4055 10.7123L14.8985 10.2345L12.7485 5.155L10.6111 10.222L5.10406 10.6997L9.27833 14.3208L8.02102 19.7021Z'
			/>
		</svg>
	);
}
