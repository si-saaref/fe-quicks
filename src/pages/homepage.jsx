import { FloatButton } from 'antd';
import IconArrow from '../assets/icons/iconArrow';

export default function Homepage() {
	return (
		<main>
			<FloatButton
				shape='circle'
				type='primary'
				style={{
					insetInlineEnd: 94,
				}}
				icon={<IconArrow />}
			/>
		</main>
	);
}
