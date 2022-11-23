import prisma from '@/utils/prisma';
import {RequestPageProps} from '@/utils/types';
import Link from 'next/link';
// import {AddButton, HomeButton, BackButton} from '@/components/Buttons';
import {Header} from '@/components/Header';

export default function RequestPage(data: RequestPageProps) {
	return (
		<>
			<Header title={data.project_id} url="/" />
			<div className="grid grid-cols-12">
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
				<label htmlFor="project_id">Project ID</label>
				<input className="form-input" id="project_id" />
			</div>
			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
				</div>
			</div>
		</>
	);
}
export async function getServerSideProps({params}: any) {
	const data = await prisma.requests.findUnique({
		where: {id: parseInt(params.id)},
	});
	return {props: data};
}
