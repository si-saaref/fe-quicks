import { Dropdown } from 'antd';
import { hourFormatter } from '../../utils/helper';
import CustomButton from '../atoms/customButton';
import IconArrow from '../icons/iconArrow';
import IconClose from '../icons/iconClose';
import IconDots from '../icons/iconDots';
import LayoutContent from '../molecules/layoutContent';
import IconLoader from '../icons/iconLoader';
import { useEffect, useState } from 'react';

export default function DetailChatSidebar({ handleCloseDetail }) {
	const [listData, setListData] = useState([]);
	const [inputMessage, setInputMessage] = useState('');
	const userName = 'Muhammad';

	useEffect(() => {
		setListData(mockChat);
	}, []);

	const handleSendNewMessage = () => {
		if (inputMessage.trim().length === 0) {
			return;
		}

		const dataMessage = {
			sender: 'Muhammad',
			message: inputMessage,
			date: new Date().toISOString(),
		};
		setListData([...listData, dataMessage]);
		setInputMessage('');
	};

	return (
		<LayoutContent className='!p-0 flex flex-col'>
			<div className='header-content border-b-2 p-6 flex gap-4 items-center w-full'>
				<div className='left-section'>
					<IconArrow className='scale-90 cursor-pointer' onClick={handleCloseDetail} />
				</div>
				<div className='mid-section flex-1'>
					<h1 className='text-main-blue font-semibold text-lg truncate w-[550px]'>
						I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN] akjsbdkjasdjabdkbaj
					</h1>
					<p>3 Participant</p>
				</div>
				<div className='right-section'>
					<IconClose className='scale-90 cursor-pointer' onClick={handleCloseDetail} />
				</div>
			</div>
			<div className='body-content custom-scrollbar h-full flex flex-col gap-4 px-5 pb-5 overflow-y-scroll'>
				{listData.map((chat, idx) => {
					const itsMe = chat.sender.toLowerCase() === userName.toLowerCase();
					return (
						<div className={`w-fit ${itsMe ? 'self-end' : ''} max-w-[85%]`} key={idx + 1}>
							<div className={`top-section ${itsMe ? 'text-end' : 'text-start'}`}>
								<h3 className='text-main-purple font-semibold'>{itsMe ? 'You' : chat.sender}</h3>
							</div>
							<div
								className={`bottom-section flex items-start ${
									itsMe ? 'flex-row' : 'flex-row-reverse'
								}`}
							>
								<div className='option-section p-2 cursor-pointer'>
									<Dropdown
										placement='bottomLeft'
										trigger={['click']}
										menu={{
											items,
											onClick,
										}}
										className='drodown-chat-item'
									>
										<a onClick={(e) => e.preventDefault()}>
											<IconDots className='scale-75 fill-main-black' />
										</a>
									</Dropdown>
								</div>
								<div className='message-section p-[10px] flex flex-col gap-3 rounded-md bg-secondary-purple'>
									<p>{chat.message}</p>
									<p>{hourFormatter(chat.date)}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className='conntection-warning-message px-5 hidden'>
				<div className='bg-secondary-blue flex gap-5 px-5 py-4 rounded-md items-center'>
					<IconLoader className='fill-main-blue loader-spin-msg-warning' />
					<p className='text-main-black font-semibold'>
						Please wait while we connect you with one of our team ...
					</p>
				</div>
			</div>
			<div className='footer-content p-5 flex gap-3'>
				<input
					type='text'
					value={inputMessage}
					onChange={(e) => setInputMessage(e.target.value)}
					placeholder='Type a new message'
					className='w-full px-4 h-[40px] border rounded-md border-main-gray placeholder:text-main-[#333]'
				/>
				<CustomButton
					title='Send'
					className='min-w-[76px] disabled:bg-main-white disabled:text-main-gray'
					onClick={handleSendNewMessage}
					disabled={inputMessage.trim().length === 0}
				/>
			</div>
		</LayoutContent>
	);
}

const onClick = (a, b, c, d, e) => {
	console.log('SEKOP', a, b, c, d, e);
};
const items = [
	{
		label: <span className='text-main-blue text-base'>Edit</span>,
		key: 'edit',
	},
	{
		label: <span className='text-[#EB5757] text-base'>Delete</span>,
		key: 'delete',
	},
];

const mockChat = [
	{
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
];
