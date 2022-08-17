import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../lib/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const requests = await prisma.requests.findMany({});
	res.json(requests);
}
