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
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>EID</th>
							<th>Legacy Org</th>
							<th>Cost Center</th>
							<th>Profit Center</th>
							<th>Phone Number</th>
						</tr>
					</thead>
					<tbody>
						{data.map((user: any) => (
							<tr key={user.id}>
								<th>{user.id}</th>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.eid}</td>
								<td>{user.legacy_org}</td>
								<td>{user.cost_center}</td>
								<td>{user.profit_center}</td>
								<td>{user.phone_number}</td>
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
