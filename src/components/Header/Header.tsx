import Link from 'next/link';
import {MainPageProps} from '@/utils/types';

const Header = ({title, url}: MainPageProps) => {
	return (
		<Link href={url}>
			<h1 className="text-center text-4xl cursor-pointer">{title}</h1>
		</Link>
	);
};

export default Header;
