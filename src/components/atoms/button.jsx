export default function Button({ onClick, title, className }) {
	return (
		<button
			onClick={onClick}
			className={`py-2 px-4 rounded-[5px] bg-main-blue text-white ${className}`}
		>
			{title}
		</button>
	);
}
