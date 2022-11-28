import Link from 'next/link';
import prisma from '@/utils/prisma';
import {FaEye, FaEdit} from 'react-icons/fa';
import {RequestData} from '@/utils/types';
import {Button} from '@/components/MainPage';
import {Header} from '@/components/Header';

const RequestPage = ({data}: any) => {
	if (!data.length) {
		return (
			<div className="text-center text-2xl">
				<Header title="No Requests Found." url="/" />
				<Button title="Add Request" url="/requests/add" />
			</div>
		);
	}
	return (
		<>
			<Header title="Requests" url="/" />
			<div className="grid grid-cols-4 gap-3 mt-5">
				{data.map((request: RequestData) => (
					<div
						className="p-6 max-w-sm bg-slate-100 rounded-lg border border-gray-200 shadow-md"
						key={request.id}>
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
							{request.project_id}
						</h5>
						<div className="mb-3 font-normal text-gray-700">
							<p>Account Name: {request.account_name}</p>
							<p>Status: {request.status}</p>
						</div>
						<div className="flex gap-1 justify-center">
							<div className="inline-flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-800 bg-blue-600 cursor-pointer">
								<Link
									href={{
										pathname: '/requests/update/[id]',
										query: {id: `${request.id}`},
									}}>
									<FaEdit />
								</Link>
							</div>
							<div className="inline-flex items-center py-2 px-3 text-white rounded-lg hover:bg-blue-800 bg-blue-600 cursor-pointer">
								<Link
									href={{
										pathname: '/requests/view/[id]',
										query: {id: `${request.id}`},
									}}>
									<FaEye />
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default RequestPage;

export const getServerSideProps = async () => {
	const data = await prisma.requests.findMany({});
	return {
		props: {
			data,
		},
	};
};
