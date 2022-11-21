import {FaEye, FaEdit} from 'react-icons/fa';
import Link from 'next/link';
export default function HomeButton({}) {
	return (
		<Link href={url}>
			<button
				className="btn btn-primary rounded-full text-lg pl-5"
				type="submit">
				{title}
			</button>
		</Link>
	);
}
