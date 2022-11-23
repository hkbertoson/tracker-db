import Link from 'next/link';
import {MainPageProps} from '@/utils/types';

export default function HomeButton({title, url}: MainPageProps) {
	return (
		<Link href={url}>
			<button
				className="btn btn-primary rounded-full text-lg pl-5"
				type="submit">
				{title}
			</button>
		</Link>
	);
}
