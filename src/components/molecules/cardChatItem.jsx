import { Dropdown } from 'antd';
import { hourFormatter } from '../../utils/helper';
import IconDots from '../icons/iconDots';

export default function CardChatItem({ data, itsMe, onClickReplyChat }) {
	const onClickDropdown = ({ key }) => {
		if (key === 'delete') console.log('DELETING ID Message : ', data.id);
		if (key === 'edit') console.log('EDITING ID Message : ', data.id);
		if (key === 'share') console.log('EDITING ID Message : ', data.id);
		if (key === 'reply') onClickReplyChat(data.id);
	};

	return (
		<div
			className={`w-fit ${itsMe ? 'self-end' : ''} ${
				data.repliedTo ? 'flex flex-col gap-2' : ''
			} max-w-[85%]`}
		>
			<div className={`top-section ${itsMe ? 'text-end' : 'text-start'}`}>
				<h3 className='text-main-purple font-semibold'>{itsMe ? 'You' : data.sender}</h3>
			</div>
			{data.repliedTo && (
				<div className='message-section p-[10px] flex flex-col gap-3 rounded-md bg-[#F2F2F2] border border-main-white w-fit self-end'>
					<p>{data.repliedTo.message}</p>
				</div>
			)}
			<div
				className={`bottom-section flex items-start self-end ${
					itsMe ? 'flex-row' : 'flex-row-reverse'
				}`}
			>
				<div className='option-section p-2 cursor-pointer'>
					<Dropdown
						placement='bottomLeft'
						trigger={['click']}
						menu={{
							items: itsMe ? itsmeItems : otherItems,
							onClick: onClickDropdown,
						}}
						className='drodown-chat-item'
					>
						<a onClick={(e) => e.preventDefault()}>
							<IconDots className='scale-75 fill-main-black' />
						</a>
					</Dropdown>
				</div>
				<div className='message-section p-[10px] flex flex-col gap-3 rounded-md bg-secondary-purple'>
					<p>{data.message}</p>
					<p>{hourFormatter(data.date)}</p>
				</div>
			</div>
		</div>
	);
}

const itsmeItems = [
	{
		label: <span className='text-main-blue text-base'>Edit</span>,
		key: 'edit',
	},
	{
		label: <span className='text-[#EB5757] text-base'>Delete</span>,
		key: 'delete',
	},
];

const otherItems = [
	{
		label: <span className='text-main-blue text-base'>Share</span>,
		key: 'share',
	},
	{
		label: <span className='text-main-blue text-base'>Reply</span>,
		key: 'reply',
	},
];

// const getColorChat = (sender) => {
// 	const listButton = {
// 		mary_hilda: {
// 			text: 'bg-main-purple',
// 			bg: 'bg-secondary-purple',
// 		},
// 		obaidullah_amarkhil: {
// 			text: 'bg-main-orange',
// 			bg: 'bg-secondary-orange',
// 		},
// 		default: {
// 			text: 'bg-main-blue',
// 			bg: 'bg-secondary-blue',
// 		},
// 	};
// 	return listButton[activeButton] || listButton.default;
// };
