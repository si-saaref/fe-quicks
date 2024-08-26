import ActionFloatButton from '../components/molecules/actionFloatButton';
import InboxSidebar from '../components/organisms/inboxSidebar';

export default function Homepage() {
	return (
		<main className='bg-[#333] w-screen h-screen'>
			<InboxSidebar />
			<ActionFloatButton />
		</main>
	);
}
