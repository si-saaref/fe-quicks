import { useState } from 'react';
import ActionFloatButton from '../components/molecules/actionFloatButton';
import ListTasksSidebar from '../components/organisms/listTasksSidebar';
import InboxSidebar from './inboxSidebar';

export default function Homepage() {
	const [currentTab, setCurrentTab] = useState('');
	return (
		<main className='bg-[#333] w-screen h-screen'>
			{currentTab === 'chat' && <InboxSidebar />}
			{currentTab === 'task' && <ListTasksSidebar />}
			<ActionFloatButton handleChangeTab={setCurrentTab} currentTab={currentTab} />
		</main>
	);
}
