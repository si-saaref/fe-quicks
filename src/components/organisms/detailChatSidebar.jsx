import { useEffect, useState } from 'react';
import CustomButton from '../atoms/customButton';
import IconArrow from '../icons/iconArrow';
import IconClose from '../icons/iconClose';
import IconLoader from '../icons/iconLoader';
import CardChatItem from '../molecules/cardChatItem';
import LayoutContent from '../molecules/layoutContent';

export default function DetailChatSidebar({ handleCloseDetail }) {
	const [listData, setListData] = useState([]);
	const [inputMessage, setInputMessage] = useState('');
	const [messageToReply, setMessageToReply] = useState(null);
	const userName = 'Muhammad'; // ? This should be from context or userdata

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
			repliedTo: messageToReply,
		};
		setListData([...listData, dataMessage]);
		setInputMessage('');
		setMessageToReply(null);
	};

	const handleClickReply = (idChat) => {
		const message = listData.find((chat) => chat.id === idChat);
		setMessageToReply(message);
	};

	const handleDeleteMessage = (idMessage) => {
		const listRemainMessage = listData.filter((item) => item.id !== idMessage);
		setListData(listRemainMessage);
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
						<CardChatItem
							itsMe={itsMe}
							key={idx + 1}
							data={chat}
							onClickReplyChat={handleClickReply}
							handleDeleteMessage={handleDeleteMessage}
						/>
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

			<div className='footer-content p-5 flex gap-3 items-end'>
				<div className='w-full'>
					{messageToReply && (
						<div
							className={`reply-chat-message-wrapper bg-[#F2F2F2] flex flex-col px-5 py-4 rounded-t-md border border-main-gray border-b-0`}
						>
							<div className='header flex justify-between'>
								<p className='text-main-black font-semibold'>
									Replying to {messageToReply.sender ?? '-'}
								</p>
								<IconClose
									className='fill-main-black scale-50 cursor-pointer'
									onClick={() => setMessageToReply(null)}
								/>
							</div>
							<p>{messageToReply?.message ?? '-'}</p>
						</div>
					)}
					<input
						type='text'
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						placeholder='Type a new message'
						className={`${
							messageToReply ? 'rounded-b-md' : 'rounded-md'
						} w-full px-4 h-[40px] border border-main-gray placeholder:text-main-[#333] focus:outline-none`}
					/>
				</div>
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

const mockChat = [
	{
		id: 1,
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 2,
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 3,
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 4,
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 5,
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 6,
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 7,
		sender: 'Muhammad',
		message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 8,
		sender: 'Mary Hilda',
		message:
			'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
		date: '2024-08-24T23:48:51.774Z',
	},
	{
		id: 9,
		sender: 'Obaidullah Amarkhil',
		message: 'Morning. I’ll try to do them. Thanks',
		date: '2024-08-24T23:48:51.774Z',
	},
];
