export default function FloatButton({
	icon,
	onClick,
	className,
	title,
	active,
	withShadowButton,
	onClickShadowButton,
}) {
	return (
		<>
			<button
				className={`rounded-full flex justify-center items-center w-[60px] h-[60px] ${className}`}
				onClick={onClick}
			>
				{icon}
				<span>{title}</span>
			</button>
			{withShadowButton && active && (
				<button
					className={`rounded-full flex justify-center items-center absolute right-3.5 ${className} !z-10 !bg-main-black`}
					onClick={onClickShadowButton}
				/>
			)}
		</>
	);
}
