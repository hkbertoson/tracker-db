import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/utils/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const userID = req.query.id;
	const ID = Number(userID);
	const user = await prisma.users.update({
		where: {id: ID},
		data: {
			...req.body,
		},
	});
	res.status(200).json(user);
}
