import { useEffect, useState } from 'react';
import FloatButton from '../atoms/floatButton';
import IconTasks from '../icons/iconTasks';
import IconChats from '../icons/iconChats';
import IconThunder from '../icons/iconThunder';

export default function ActionFloatButton({ handleChangeTab, currentTab }) {
	const [isShowListMenu, setIsShowListMenu] = useState(false);
	const [activeButton, setActiveButton] = useState({});

	useEffect(() => {
		setActiveButton(getActiveButton(currentTab));
	}, [currentTab]);

	const onClickMenuHome = () => {
		setIsShowListMenu(true);
	};

	const handleHideSidebar = () => {
		setIsShowListMenu(false);
		handleChangeTab('');
	};

	return (
		<div
			className={`flex flex-row-reverse absolute bottom-10 right-10 items-center ${
				currentTab !== '' ? 'gap-8' : 'gap-6'
			}`}
		>
			<FloatButton
				className={`${activeButton?.bg} z-50 w-[68px] h-[68px]`}
				icon={activeButton?.icon}
				withShadowButton
				active={isShowListMenu && currentTab !== ''}
				onClickShadowButton={handleHideSidebar}
				onClick={onClickMenuHome}
			/>
			<div
				className={`${
					isShowListMenu ? 'flex flex-row-reverse gap-6' : 'absolute right-1 flex h-14'
				}`}
			>
				{currentTab !== 'chat' && (
					<FloatButton
						className={`bg-white ${!isShowListMenu ? 'absolute right-0' : ''}`}
						icon={<IconChats className='fill-main-purple' />}
						onClick={() => handleChangeTab('chat')}
					/>
				)}
				{currentTab !== 'task' && (
					<FloatButton
						className={`bg-white ${!isShowListMenu ? 'absolute right-0' : ''}`}
						icon={<IconTasks className='fill-main-orange' />}
						onClick={() => handleChangeTab('task')}
					/>
				)}
			</div>
		</div>
	);
}

const getActiveButton = (activeButton) => {
	const listButton = {
		chat: {
			icon: <IconChats className='fill-white' />,
			bg: 'bg-main-purple',
		},
		task: {
			icon: <IconTasks className='fill-white' />,
			bg: 'bg-main-orange',
		},
		default: {
			icon: <IconThunder className='fill-white' />,
			bg: 'bg-main-blue',
		},
	};
	return listButton[activeButton] || listButton.default;
};
