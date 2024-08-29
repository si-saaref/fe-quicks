export default function LayoutContent({ children, className = '' }) {
	return (
		<div
			className={`layout-content w-[734px] h-[737px] bg-white px-8 py-6 border-[#BDBDBD] border rounded-lg absolute right-10 bottom-32 ${className}`}
		>
			{children}
		</div>
	);
}
