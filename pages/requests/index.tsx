import Link from 'next/link';
import prisma from '../../lib/prisma';
import {FaEye, FaEdit} from 'react-icons/fa';
import {RequestData} from '../../utils/types';

export default function RequestPage({data}: any) {
	if (!data.length) {
		return (
			<div className="m-auto flex flex-col items-center">
				<h1 className="text-2xl">No Requests Found. Add one here!</h1>
				<Link href="/requests/add">
					<button type="button" className="btn btn-primary w-1/5">
						Add New Request
					</button>
				</Link>
			</div>
		);
	}
	return (
		<>
			<h1 className="text-center text-4xl">
				<Link href="/">Requests</Link>
			</h1>
			<div className="grid grid-cols-4 gap-2 mt-4">
				{data.map((request: RequestData) => (
					<div
						className="card w-96 bg-neutral text-neutral-content"
						key={request.id}>
						<div className="card-body">
							<h2 className="card-title">{request.project_id}</h2>
							<p>Account Name: {request.account_name}</p>
							<p>Status: {request.status}</p>
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
			</div>
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
