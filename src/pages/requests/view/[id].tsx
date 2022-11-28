import prisma from '@/utils/prisma';
import {RequestPageProps} from '@/utils/types';
import Link from 'next/link';
import {Header} from '@/components/Header';
import MainButton from '@/components/Buttons/MainButton';

export default function RequestPage(data: RequestPageProps) {
	return (
		<>
			<h1 className="text-3xl text-center">
				<Link href="/">View Request: {data.project_id}</Link>
			</h1>
			<div className="text-center flex flex-col w-1/2 m-auto gap-1">
				<label>Name: {data.name}</label>
				<label>Project ID: {data.project_id}</label>
				<label>Account Name: {data.account_name}</label>
				<label>WBS: {data.wbs || ''}</label>
				<label>Total Hours: {data.total_hours_spent}</label>
				<label>Name: {data.name}</label>
				<label>Comments: {data.comment}</label>
				<label>Created at: {data.created_at.toString()}</label>
				<label>Last Updated: {data.last_updated.toString()}</label>
			</div>

			<div className="flex gap-1 justify-center">
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
					<Link href={`/requests/update/${data.id}`}>
						<button className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-full">
							Update
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: data};
}
