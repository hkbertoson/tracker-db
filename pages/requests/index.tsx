import Link from 'next/link';
import prisma from '../../lib/prisma';
import {FaEye, FaEdit} from 'react-icons/fa';
import {RequestData} from '../../utils/types';

export default function RequestPage({data}: any) {
	return (
		<>
			<h1 className="text-center text-4xl">
				<Link href="/">Requests</Link>
			</h1>

			{/* <div className="overflow-x-auto">
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
						{data.map((request: RequestData) => (
							<tr key={request.id}>
								<td>
									<Link href={`/requests/update/${request.id}`}>
										<a>
											<FaEdit />
										</a>
									</Link>
									<Link href={`/requests/view/${request.id}`}>
										<a>
											<FaEye />
										</a>
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
			</div> */}
			{data.map((request: RequestData) => (
				<div className="card w-96 bg-base-100 shadow-xl" key={request.id}>
					<div className="card-body">
						<h2 className="card-title">{request.project_id}</h2>
						<p>Status: {request.status}</p>
						<p>Account Name: {request.account_name}</p>
						<div className="flex flex-row gap-3">
							<Link href={`/requests/update/${request.id}`}>
								<a>
									<FaEdit />
								</a>
							</Link>
							<Link href={`/requests/view/${request.id}`}>
								<a>
									<FaEye />
								</a>
							</Link>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export const getServerSideProps = async () => {
	const data = await prisma.requests.findMany({});
	return {
		props: {
			data,
		},
	};
};
