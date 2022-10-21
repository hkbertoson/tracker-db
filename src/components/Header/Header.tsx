import Link from 'next/link';
const Header = ({title, url}: any) => {
	return (
		<Link href={url}>
			<h1 className="text-center text-4xl cursor-pointer">{title}</h1>
		</Link>
	);
};

export default Header;
