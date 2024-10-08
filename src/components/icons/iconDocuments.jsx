export default function IconDocuments({ className, onClick }) {
	return (
		<svg
			onClick={onClick}
			className={`fill-black ${className}`}
			width='15'
			height='18'
			viewBox='0 0 15 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9.03505 0.754395H2.36839C1.45172 0.754395 0.701721 1.50439 0.701721 2.42106V15.7544C0.701721 16.6711 1.44339 17.4211 2.36005 17.4211H12.3684C13.2851 17.4211 14.0351 16.6711 14.0351 15.7544V5.75439L9.03505 0.754395ZM10.7017 9.08773H4.03505V10.7544H10.7017V9.08773ZM10.7017 12.4211H4.03505V14.0877H10.7017V12.4211ZM2.36839 15.7544H12.3684V6.58773H8.20172V2.42106H2.36839V15.7544Z'
			/>
		</svg>
	);
}
