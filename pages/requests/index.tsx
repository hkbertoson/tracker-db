import Link from 'next/link';
import prisma from '../../lib/prisma';

export const getServerSideProps = async () => {
	const data = await prisma.requests.findMany({});
	return {
		props: {
			data,
		},
	};
};

export default function RequestPage({data}: any) {
	return (
		<>
			<h1 className="text-center text-4xl">Requests</h1>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Project ID</th>
							<th>Account Name</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{data.map((request: any) => (
							<tr key={request.id}>
								<td>
									<Link href={`/requests/update/${request.id}`}>
										<a>View</a>
									</Link>
								</td>
								<td>{request.name}</td>
								<td>{request.project_id}</td>
								<td>{request.account_name}</td>
								<td>{request.status}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
