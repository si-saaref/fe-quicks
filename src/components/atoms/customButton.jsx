export default function CustomButton({ onClick, title, className, ...otherProp }) {
	return (
		<button
			onClick={onClick}
			className={`py-2 px-4 rounded-[5px] bg-main-blue text-white ${className}`}
			{...otherProp}
		>
			{title}
		</button>
	);
}
