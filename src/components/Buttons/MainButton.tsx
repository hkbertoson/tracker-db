import Link from 'next/link';
export default function MainButton() {
	return (
		<div className="flex flex-row gap-2 items-center mt-1">
			<Link href="/">
				<button className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-full">
					Home
				</button>
			</Link>
			<Link href="/requests">
				<button className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full">
					Back
				</button>
			</Link>
			<button
				type="submit"
				className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded-full">
				Submit
			</button>
		</div>
	);
}
