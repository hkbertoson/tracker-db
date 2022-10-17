import Link from 'next/link';

export default function MainPage({title, requestLink}: any) {
	return (
		<Link href={requestLink}>
			<button
				type="button"
				className="bg-blue-200 m-auto p-1 w-1/2 justify-center">
				{title}
			</button>
		</Link>
	);
}
