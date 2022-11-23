import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/utils/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const requestID = req.query.id;
	const ID = Number(requestID);
	const request = await prisma.requests.update({
		where: {id: ID},
		data: {
			...req.body,
		},
	});
	res.status(200).json(request);
}
