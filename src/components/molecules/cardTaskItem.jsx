import { DatePicker, Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import { calculateRemainingDueDateDays, dateFormatter } from '../../utils/helper';
import IconArrowNT from '../icons/iconArrowNT';
import IconDots from '../icons/iconDots';
import IconEmptyCheckbox from '../icons/iconEmptyCheckbox';
import IconFilledCheckbox from '../icons/iconFilledCheckbox';
import IconPencil from '../icons/iconPencil';
import IconTime from '../icons/iconTime';
import dayjs from 'dayjs';
import IconBookmark from '../icons/iconBookmark';

export default function CardTaskItem({ data }) {
	const [isExpandItem, setIsExpandItem] = useState(true);
	const [valueDesc, setValueDesc] = useState('');
	const [valueTitle, setValueTitle] = useState('');
	const [valueDatepicker, setValueDatepicker] = useState('');
	const [valueBookmark, setValueBookmark] = useState([]);
	const [isCheckedTask, setIsCheckedTask] = useState(false);
	const [remainingDayTask, setRemainingDayTask] = useState(null);

	useEffect(() => {
		setRemainingDayTask(calculateRemainingDueDateDays(data?.dueDate));
		setIsCheckedTask(data?.isCompleted ?? false);
		setValueDatepicker(data?.dueDate);
		setValueTitle(data?.title ?? '');
		setValueDesc(data?.description ?? '');
	}, [data]);

	const onChangeDate = (date, dateString) => {
		if (!date) {
			setValueDatepicker('');
			setRemainingDayTask(null);
			return;
		}
		const isoDate = new Date(dateString).toISOString();
		setValueDatepicker(isoDate);
		setRemainingDayTask(calculateRemainingDueDateDays(isoDate));
	};

	const onClickDropdownOther = ({ key }) => {
		if (key === 'delete') {
			console.log(`DELETING ${data?.id}`);
		}
	};

	const onClickDropdownLabel = ({ key }) => {
		const bookmarLabel = new Set([...valueBookmark, key]);
		console.log(bookmarLabel);
		setValueBookmark(bookmarLabel);
		// setValueBookmark([...valueBookmark, key]);
	};

	const itemsDropdownOther = [
		{
			label: <span className='text-[#EB5757] text-base'>Delete</span>,
			key: 'delete',
		},
	];

	const itemsLabel = [
		{
			label: (
				<span className='text-main-black bg-label-blue text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Important ASAP
				</span>
			),
			key: 'important_asap',
		},
		{
			label: (
				<span className='text-main-black bg-label-orange text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Offline Meeting
				</span>
			),
			key: 'offline_meeting',
		},
		{
			label: (
				<span className='text-main-black bg-label-yellow text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Virtual Meeting
				</span>
			),
			key: 'virtual_meeting',
		},
		{
			label: (
				<span className='text-main-black bg-label-tosca text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					ASAP
				</span>
			),
			key: 'asap',
		},
		{
			label: (
				<span className='text-main-black bg-label-green text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Cliend Related
				</span>
			),
			key: 'client_related',
		},
		{
			label: (
				<span className='text-main-black bg-label-grey text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Self Task
				</span>
			),
			key: 'self_task',
		},
		{
			label: (
				<span className='text-main-black bg-label-pink text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Appointments
				</span>
			),
			key: 'appointments',
		},
		{
			label: (
				<span className='text-main-black bg-label-navy text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap'>
					Court Related
				</span>
			),
			key: 'court_related',
		},
	];

	return (
		<div
			className='chat-item flex gap-[17px] py-[22px] items-start'
			// className='chat-item flex gap-[17px] pt-[21.5px] pb-[37px] items-start'
		>
			<div className='left-section min-w-[31px] flex justify-start relative'>
				<input
					type='checkbox'
					name={`checkbox-card-task-${data?.id}`}
					id={`checkbox-card-task-${data?.id}`}
					hidden
					defaultChecked={data?.isCompleted}
					onClick={(ev) => setIsCheckedTask(ev.target.checked)}
				/>
				<label htmlFor={`checkbox-card-task-${data?.id}`} className='cursor-pointer'>
					{isCheckedTask ? (
						<IconFilledCheckbox className='fill-main-gray scale-75' />
					) : (
						<IconEmptyCheckbox className='fill-main-gray scale-75' />
					)}
				</label>
			</div>
			<div className={`right-section w-full flex flex-col ${isExpandItem ? 'gap-4' : ''}`}>
				<div className='header-task flex gap-5 items-center'>
					{/* <h1
						className={`${
							data?.isCompleted ? 'text-main-gray line-through' : 'text-main-black'
						} font-semibold flex-1`}
					>
						{data?.title}
					</h1> */}
					<input
						type='text'
						placeholder='Type Task Title'
						className={`${
							isCheckedTask ? 'text-main-gray line-through' : 'text-main-black'
						} font-semibold flex-1 w-full px-2 py-0.5 focus:border-main-gray outline-main-white`}
						value={valueTitle}
						onChange={(ev) => setValueTitle(ev.target.value)}
					/>
					{remainingDayTask <= 10 && remainingDayTask && remainingDayTask > 0 && (
						<p className={`warning-due-date-indicator text-indicator-red`}>
							{remainingDayTask} Days Left
						</p>
					)}
					<p className='fill-main-black'>{dateFormatter(valueDatepicker)}</p>
					<IconArrowNT
						className={`fill-main-black scale-125 cursor-pointer ${
							isExpandItem ? 'rotate-180' : ''
						}`}
						onClick={() => setIsExpandItem((prevValue) => !prevValue)}
					/>
					<Dropdown
						placement='bottomRight'
						trigger={['click']}
						menu={{
							items: itemsDropdownOther,
							onClick: onClickDropdownOther,
						}}
						className='drodown-chat-item'
					>
						<a onClick={(e) => e.preventDefault()}>
							<IconDots className='fill-main-gray cursor-pointer' />
						</a>
					</Dropdown>
				</div>
				<div className={`body-task flex flex-col gap-2 ${isExpandItem ? 'h-full' : 'h-0'}`}>
					{isExpandItem && (
						<>
							<div className='due-date-input grid grid-cols-[30px_1fr] gap-3 items-start'>
								<IconTime
									className={`${valueDatepicker ? 'fill-main-blue' : 'fill-main-gray'} scale-75`}
								/>
								<DatePicker
									onChange={onChangeDate}
									minDate={dayjs(new Date())}
									className='w-fit'
									showNow={false}
									defaultValue={
										data?.dueDate
											? dayjs(
													new Date(data?.dueDate).toLocaleDateString('id-ID', {
														day: '2-digit',
														month: 'numeric',
														year: 'numeric',
													}),
													'DD-M-YYYY'
											  )
											: ''
									}
								/>
							</div>
							<div className='description-input grid grid-cols-[30px_1fr] gap-3 items-start px-1'>
								<IconPencil
									className={`${valueDesc ? 'fill-main-blue' : 'fill-main-gray'} scale-75 mt-1`}
								/>
								<textarea
									placeholder='No Description'
									value={valueDesc}
									onChange={(ev) => {
										setValueDesc(ev.target.value);
									}}
									className='resize-none max-w-[85%] p-2 focus:border-main-gray outline-main-white leading-4'
								/>
							</div>
							<Dropdown
								placement='bottomLeft'
								trigger={['click']}
								menu={{
									items: itemsLabelBacot.map((item) => ({
										label: (
											<span
												className={`${
													item.bg
												} text-main-black text-base px-3 py-2 font-semibold w-full block rounded-md whitespace-nowrap ${
													Array.from(valueBookmark).includes((key) => key === item.key)
														? 'border border-main-blue'
														: ''
												}`}
											>
												{item.name}
											</span>
										),
										key: item.key,
									})),
									onClick: onClickDropdownLabel,
								}}
								className='drodown-label-item'
								overlayClassName='dropdown-label-item'
							>
								<a onClick={(e) => e.preventDefault()}>
									<div className='description-input grid grid-cols-[30px_1fr] gap-3 items-start bg-[#F9F9F9] px-2 py-1 rounded-lg w-[95%] cursor-pointer'>
										<IconBookmark
											className={`${
												valueBookmark.length !== 0 ? 'fill-main-blue' : 'fill-main-gray'
											} scale-75 mt-1`}
										/>
										<div className='label-task-item-wrapper flex gap-1 overflow-x-scroll'>
											{Array.from(valueBookmark).map((key, idx) => {
												const item = itemsLabelBacot.find((item) => item.key === key);
												return (
													<span
														key={idx + 1}
														className={`${item.bg} text-main-black text-base px-3 py-2 font-semibold w-fit block rounded-md whitespace-nowrap`}
													>
														{item.name}
													</span>
												);
											})}
										</div>
									</div>
								</a>
							</Dropdown>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

const itemsLabelBacot = [
	{
		bg: 'bg-label-blue',
		key: 'important_asap',
		name: 'Important ASAP',
	},
	{
		bg: 'bg-label-orange',
		name: 'Offline Meeting',
		key: 'offline_meeting',
	},
	{
		bg: 'bg-label-yellow',
		name: 'Virtual Meeting',
		key: 'virtual_meeting',
	},
	{
		bg: 'bg-label-tosca',
		name: 'ASAP',
		key: 'asap',
	},
	{
		bg: 'bg-label-green',
		name: 'Cliend Related',
		key: 'client_related',
	},
	{
		bg: 'bg-label-grey',
		name: 'Self Task',
		key: 'self_task',
	},
	{
		bg: 'bg-label-pink',
		name: 'Appointments',
		key: 'appointments',
	},
	{
		bg: 'bg-label-navy',
		name: 'Court Related',
		key: 'court_related',
	},
];
