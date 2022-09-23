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
				<div className="flex gap-1 justify-center">
					<Link href={`/requests/update/${data.id}`}>
						<a className="btn btn-primary rounded-full text-lg pl-5">Update</a>
					</Link>
					<Link href="/">
						<a className="btn btn-secondary rounded-full text-lg pl-5">Home</a>
					</Link>
					<Link href="/requests">
						<a className="btn btn-warning rounded-full text-lg pl-5">Back</a>
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
	return {props: {data}};
}
