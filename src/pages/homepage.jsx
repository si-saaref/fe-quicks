import IconThunder from '../assets/icons/iconThunder';
import FloatButton from '../components/atoms/floatButton';

export default function Homepage() {
	return (
		<main>
			<FloatButton className='bg-main-blue' icon={<IconThunder className='fill-white' />} />
		</main>
	);
}
