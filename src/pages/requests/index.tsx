import Link from 'next/link';
import prisma from '@/utils/prisma';
import {FaEye, FaEdit} from 'react-icons/fa';
import {RequestData} from '@/utils/types';
import {Button} from '@/components/MainPage';
import {Header} from '@/components/Header';

const RequestPage = ({data}: any) => {
	console.log(data);
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
			<table className="border-collapse w-full">
				<thead>
					<tr>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Project ID
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Account Name
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Status
						</th>
						<th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((request: RequestData) => {
						let bgColor = '';
						switch (request.status) {
							case 'Completed':
								bgColor = 'bg-green-200';
								break;
							case 'Awaiting Customer Confirmation':
								bgColor = 'bg-orange-200';
								break;
							case 'Work in Progress':
								bgColor = 'bg-blue-400';
								break;
							case 'To be Started':
								bgColor =
									'bg-https://tailwindcss.com/docs/customizing-colors#default-color-palette';
							case 'Cancelled':
								bgColor = 'bg-red-200';
								break;
							default:
								bgColor = 'bg-white';
								break;
						}
						return (
							<tr
								className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
								key={request.id}>
								<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
									{request.project_id}
								</td>
								<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
									{request.account_name}
								</td>
								<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
									<span
										className={`rounded py-1 px-3 text-xs font-bold ${bgColor}`}>
										{request.status}
									</span>
								</td>
								<td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
									<Link
										className="text-blue-400 hover:text-blue-600 underline"
										href={{
											pathname: '/requests/update/[id]',
											query: {id: `${request.id}`},
										}}>
										Edit
									</Link>
									<Link
										className="text-blue-400 hover:text-blue-600 underline pl-6"
										href={{
											pathname: '/requests/view/[id]',
											query: {id: `${request.id}`},
										}}>
										View
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
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
