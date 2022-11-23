import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/utils/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		name,
		email,
		eid,
		legacy_org,
		cost_center,
		profit_center,
		phone_number,
	} = req.body;
	const result = await prisma.users.create({
		data: {
			name: name,
			email: email,
			eid: eid,
			legacy_org: legacy_org,
			cost_center: cost_center,
			profit_center: profit_center,
			phone_number: phone_number,
		},
	});
	res.json(result);
}
