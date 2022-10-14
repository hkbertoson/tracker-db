import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../../../lib/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const allUsers = await prisma.users.findMany({});
	res.json(allUsers);
}
