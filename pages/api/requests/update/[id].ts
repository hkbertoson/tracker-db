import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '../../../../lib/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const requestID = req.query.id;
	const request = await prisma.requests.update({
		where: {id: requestID},
		data: {
            
        },
	});
}
