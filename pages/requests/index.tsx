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
