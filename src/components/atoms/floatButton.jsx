export default function FloatButton({ icon, onClick, className, title, active }) {
	return (
		<button
			className={`rounded-full flex justify-center items-center ${
				active ? 'w-[68px] h-[68px]' : 'w-[60px] h-[60px]'
			} ${className}`}
			onClick={onClick}
		>
			{icon}
			<span>{title}</span>
		</button>
	);
}
