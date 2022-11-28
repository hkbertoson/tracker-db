import Link from 'next/link';
import {FaEdit, FaEye} from 'react-icons/fa';
import prisma from '@/utils/prisma';

export default function UsersPage({data}: any) {
	if (!data.length) {
		return (
			<div className="m-auto flex flex-col items-center">
				<h1 className="text-2xl">No Users Found. Add one here!</h1>
				<Link href="/users/add" legacyBehavior>
					<button type="button" className="btn btn-primary w-1/5">
						Add New User
					</button>
				</Link>
			</div>
		);
	}
	return (
		<>
			<h1 className="text-center text-4xl">
				<Link href="/">Users</Link>
			</h1>
			<div className="overflow-x-auto relative">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="py-3 px-6">
								Name
							</th>
							<th scope="col" className="py-3 px-6">
								Email
							</th>
							<th scope="col" className="py-3 px-6">
								EID
							</th>
							<th scope="col" className="py-3 px-6">
								Legacy Org
							</th>
							<th scope="col" className="py-3 px-6">
								Cost Center
							</th>
							<th scope="col" className="py-3 px-6">
								Profit Center
							</th>
							<th scope="col" className="py-3 px-6">
								Phone Number
							</th>
							<th scope="col" className="py-3 px-6">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((user: any) => (
							<tr
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
								key={user.id}>
								<th
									scope="row"
									className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									{user.name}
								</th>
								<td className="py-4 px-6">{user.email}</td>
								<td className="py-4 px-6">{user.eid}</td>
								<td className="py-4 px-6">{user.legacy_org}</td>
								<td className="py-4 px-6">{user.cost_center}</td>
								<td className="py-4 px-6">{user.profit_center}</td>
								<td className="py-4 px-6">{user.phone_number}</td>
								<td className="py-4 px-6 text-right">
									<Link
										className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
										href={{
											pathname: '/users/update/[id]',
											query: {id: `${user.id}`},
										}}>
										Edit
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

export const getServerSideProps = async () => {
	const data = await prisma.users.findMany({});
	return {
		props: {
			data,
		},
	};
};
