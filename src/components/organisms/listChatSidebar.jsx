import { useEffect, useState } from 'react';
import { dateFormatter } from '../../utils/helper';
import IconLoader from '../icons/iconLoader';
import IconPerson from '../icons/iconPerson';
import IconSearch from '../icons/iconSearch';
import LayoutContent from '../molecules/layoutContent';
import IconEmpty from '../icons/iconEmpty';

export default function ListChatSidebar({ loading = false, handleSetDetailChatId }) {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		setListData(mockData);
	}, []);

	const handleShowDetail = (idChat) => {
		handleSetDetailChatId(idChat);
	};

	return (
		<LayoutContent>
			<div className='header-content w-full relative flex flex-col'>
				<input
					type='text'
					id='input-search'
					className='border border-main-gray rounded-md w-full h-10 pl-14 pr-32 placeholder:text-[#333]'
					placeholder='Search'
				/>
				<label htmlFor='input-search' className='absolute top-1/2 -translate-y-1/2 z-10 right-20'>
					<IconSearch className='scale-50' />
				</label>
			</div>
			<div
				className={`main-content divide-y-2 divide-[#828282] ${
					loading || listData.length === 0 ? 'h-full w-full flex justify-center items-center' : ''
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
						<p className='text-main-black font-semibold'>You have no inbox received</p>
					</div>
				) : (
					listData.map((chat, idx) => (
						<div
							className='chat-item flex gap-[17px] py-[22px] items-start cursor-pointer'
							onClick={() => handleShowDetail(chat.id)}
							// className='chat-item flex gap-[17px] pt-[21.5px] pb-[37px] items-start'
							key={idx + 1}
						>
							<div className='left-section min-w-[51px] flex justify-center relative'>
								{chat.type === 'chat' ? (
									<>
										<span className='bg-main-white w-[34px] h-[34px] flex items-center justify-center rounded-full absolute left-0'>
											<IconPerson className='fill-[#0000008A] scale-75' />
										</span>
										<span className='bg-main-blue w-[34px] h-[34px] flex items-center justify-center rounded-full absolute right-0 z-10'>
											<IconPerson className='fill-white scale-75' />
										</span>
									</>
								) : (
									<span className='bg-main-blue w-[34px] h-[34px] flex items-center justify-center rounded-full text-white'>
										{chat.title.charAt(0)}
									</span>
								)}
							</div>
							<div className='mid-section flex flex-col gap-2'>
								<div className='header-chat flex gap-4'>
									<h1 className='text-main-blue font-bold leading-4 text-base'>{chat.title}</h1>
									<p className='whitespace-nowrap leading-4 text-sm'>
										{dateFormatter(chat.date, 'full-date')}
									</p>
								</div>
								<div className='body-chat'>
									<h2 className='font-bold leading-4'>{chat.lastMessage.sender} :</h2>
									<p className='truncate leading-4'>{chat.lastMessage.message}</p>
								</div>
							</div>
							<div className='right-section'></div>
						</div>
					))
				)}
			</div>
		</LayoutContent>
	);
}

const mockData = [
	{
		id: 1,
		title: '109220-Naturalization',
		lastMessage: {
			sender: 'Cameron Phillips',
			message: 'Please check it out!',
		},
		date: '2024-08-24T23:48:51.774Z',
		type: 'chat',
	},
	{
		id: 2,
		title: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
		lastMessage: {
			sender: 'Ellen',
			message: 'Hey, Please read',
		},
		date: '2024-08-24T23:48:51.774Z',
		type: 'chat',
	},
	{
		id: 3,
		title: '8405-Diana SALAZAR MUNGUIA',
		lastMessage: {
			sender: 'Cameron Phillips',
			message: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...',
		},
		date: '2024-08-24T23:48:51.774Z',
		type: 'chat',
	},
	{
		id: 4,
		title: 'FastVisa Support',
		lastMessage: {
			sender: 'Cameron Phillips',
			message: 'Hey there! Welcome to your inbox.',
		},
		date: '2024-08-24T23:48:51.774Z',
		type: 'customer-service',
	},
];
