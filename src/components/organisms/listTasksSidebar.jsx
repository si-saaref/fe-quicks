import { Dropdown } from 'antd';
import CustomButton from '../atoms/customButton';
import IconArrowNT from '../icons/iconArrowNT';
import IconLoader from '../icons/iconLoader';
import CardTaskItem from '../molecules/cardTaskItem';
import LayoutContent from '../molecules/layoutContent';
import { useEffect, useState } from 'react';
import IconEmpty from '../icons/iconEmpty';

export default function ListTasksSidebar({ loading = false }) {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		setListData(mockData);
	}, []);

	const onClickAddNewTask = () => {
		setListData([...listData, {}]);
	};

	const handleDeleteItemTask = (idTask) => {
		const listRemainTask = listData.filter((item) => item.id !== idTask);

		setListData(listRemainTask);
	};

	return (
		<LayoutContent className='flex flex-col'>
			<div className='header-content w-full relative flex justify-between py-2'>
				<Dropdown
					placement='bottomLeft'
					trigger={['click']}
					menu={{
						items,
						onClick,
					}}
					className='drodown-chat-item ml-24'
				>
					<a
						onClick={(e) => e.preventDefault()}
						className='flex items-center gap-3 p-2 border-2 cursor-pointer border-main-gray rounded-md font-semibold text-main-black w-fit'
					>
						My Tasks
						<IconArrowNT />
					</a>
				</Dropdown>
				<CustomButton title='New Task' className='min-w-[99px]' onClick={onClickAddNewTask} />
			</div>
			<div
				className={`main-content divide-y-2 divide-[#828282] ${
					loading || listData.length === 0
						? 'h-full w-full flex justify-center items-center'
						: 'custom-scrollbar pr-3'
				}`}
			>
				{loading ? (
					<div className='flex justify-center flex-col items-center'>
						<IconLoader className='animate-spin fill-[#C4C4C4]' />
						<p className='text-main-black font-semibold'>Loading Chats ...</p>
					</div>
				) : listData.length === 0 ? (
					<div className='flex justify-center flex-col items-center relative'>
						<IconEmpty className='scale-[3] absolute -top-10 fill-main-black' />
						<p className='text-main-black font-semibold'>You have no task active</p>
					</div>
				) : (
					listData.map((task, idx) => (
						<CardTaskItem data={task} key={idx + 1} handleDeleteItemTask={handleDeleteItemTask} />
					))
				)}
			</div>
		</LayoutContent>
	);
}

const onClick = ({ key }) => {
	if (key === 'personal_errands') console.log('TAB PERSONAL ERRAND');
	if (key === 'urgent_to_do') console.log('TAB URGENT TODO');
};
const items = [
	{
		label: (
			<span className='text-base block !w-[288px] text-main-black font-semibold'>
				Personal Errands
			</span>
		),
		key: 'personal_errands',
	},
	{
		label: (
			<span className='text-base block !w-[288px] text-main-black font-semibold'>Urgent To-Do</span>
		),
		key: 'urgent_to_do',
	},
];

const mockData = [
	{
		id: '1',
		title: 'Close off Case #012920- RODRIGUES, Amiguel',
		isCompleted: false,
		dueDate: '2024-08-24T23:48:51.774Z',
		description:
			'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
	},
	{
		id: '2',
		title: 'Close off Case #012920- RODRIGUES, Amiguel',
		isCompleted: false,
		dueDate: '2024-09-19T00:23:31.000Z',
		description:
			'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
	},
	{
		id: '3',
		title: 'Set up appointment with Dr Blake',
		isCompleted: false,
		dueDate: '',
		description: '',
	},
	{
		id: '4',
		title: 'Contact Mr Caleb - video conference?',
		isCompleted: true,
		dueDate: '2024-08-24T23:48:51.774Z',
		description: '',
	},
	{
		id: '5',
		title: 'Assign 3 homework to Client A',
		isCompleted: true,
		dueDate: '2024-08-24T23:48:51.774Z',
		description: '',
	},
];
