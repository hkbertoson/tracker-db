import prisma from '../../../lib/prisma';
import Link from 'next/link';

export default function RequestPage({data}: any) {
	console.log(data);
	return (
		<>
			<h1 className="text-center text-4xl">
				<Link href="/">{data.project_id}</Link>
			</h1>
			<div className="flex flex-col items-center">
				<div className="text-center grid grid-cols-2 gap-3">
					<div>
						<h1>Project ID</h1>
						<p>{data.project_id}</p>
					</div>
					<div>
						<h1>Account Name</h1>
						<p>{data.account_name}</p>
					</div>
					<div>
						<h1>Request Type</h1>
						<p>{data.request_type}</p>
					</div>
					<div>
						<h1>Status</h1>
						<p>{data.status}</p>
					</div>
					<div>
						<h1>Total Hours Spent</h1>
						<p>{data.total_hours_spent}</p>
					</div>
					<div>
						<h1>Last Updated At</h1>
						<p>{data.last_updated.toString()}</p>
					</div>
				</div>
			</div>
			<Link href="/requests">
				<a className="text-2xl btn btn-accent">Back</a>
			</Link>
			<Link href={`/requests/update/${data.id}`}>
				<a className="text-2xl btn btn-accent">Update</a>
			</Link>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: {data}};
}
