import { useState } from 'react';
import FloatButton from '../atoms/floatButton';
import IconThunder from '../icons/iconThunder';

export default function ActionFloatButton() {
	const [isShowListMenu, setIsShowListMenu] = useState(false);

	const onClickMenuHome = () => {
		setIsShowListMenu(true);
	};

	return (
		<div className='flex flex-row-reverse absolute bottom-10 right-10 items-center gap-5'>
			<FloatButton
				className='bg-main-blue'
				icon={<IconThunder className='fill-white' />}
				active
				onClick={onClickMenuHome}
			/>
			<div className={`${isShowListMenu ? 'flex gap-5' : 'sticky right-0 flex'}`}>
				<FloatButton className='bg-white' icon={<IconThunder className='fill-main-purple' />} />
				<FloatButton className='bg-white' icon={<IconThunder className='fill-main-orange' />} />
			</div>
		</div>
	);
}
