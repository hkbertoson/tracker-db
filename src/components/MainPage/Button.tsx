import Link from 'next/link';

const Button = ({title, requestLink}: any) => {
	return (
		<Link href={requestLink}>
			<button
				type="button"
				className="bg-sky-200 m-auto p-4 rounded-xl font-semibold hover:shadow-md">
				{title}
			</button>
		</Link>
	);
};

export default Button;
