import type {NextApiRequest, NextApiResponse} from 'next';
import prisma from '@/utils/prisma';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		name,
		projectID,
		accountName,
		status,
		requestType,
		totalHours,
		legacyOrg,
		comments,
		billingCode,
	} = req.body;
	const result = await prisma.requests.create({
		data: {
			name: name,
			project_id: projectID,
			account_name: accountName,
			status: status,
			request_type: requestType,
			total_hours_spent: totalHours,
			legacy_org: legacyOrg,
			comment: comments,
			wbs: billingCode,
		},
	});
	res.json(result);
}
