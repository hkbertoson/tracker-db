import Link from 'next/link';
import {MainPageProps} from '../../../utils/types';

const Button = ({title, url}: MainPageProps) => {
	return (
		<Link href={url}>
			<button
				type="button"
				className="bg-sky-200 m-auto p-4 rounded-xl font-semibold hover:shadow-md">
				{title}
			</button>
		</Link>
	);
};

export default Button;
