import prisma from '../../../lib/prisma';
import Link from 'next/link';

export default function RequestPage({data}: any) {
	return (
		<>
			<h1 className="text-center text-4xl">Request: {data.project_id}</h1>
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
						<p>{data.request_type.replace(/_/g, ' ')}</p>
					</div>
					<div>
						<h1>Status</h1>
						<p>{data.status.replace(/_/g, ' ')}</p>
					</div>
					<div>
						<h1>Total Hours Spent</h1>
						<p>{data.total_hours_spent}</p>
					</div>
				</div>
				<Link href="/requests">
					<a className="text-2xl btn btn-accent">Back</a>
				</Link>
				<Link href={`/requests/update/${data.id}`}>
					<a className="text-2xl btn btn-accent">Update</a>
				</Link>
			</div>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: {data}};
}
