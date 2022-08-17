import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../../../lib/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const addRequests = await prisma.requests.create({
		data: {
			project_id: '1234',
			name: 'Hunter',
		},
	});
	// const requests = await prisma.requests.findMany({});
	res.json(addRequests);
}
