import Link from 'next/link';
export default function Dashboard() {
	return (
		<>
			<div className="grid grid-cols-4 font-bold text-lg gap-4">
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/area">Area</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/bubble">Bubble</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/chart-events">Chart Events</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/chart-ref">Chart-ref</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/doughnut">Doughnut</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/grouped">Grouped</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/horizontal">Horizontal</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/line">Line</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/multiaxis">MultiAxis</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/multitype">MultiType</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/pie">Pie</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/polar">Polar</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/radar">Radar</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/scatter">Scatter</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/stacked">Stackeds</Link>
				</button>
				<button className="bg-blue-100 w-auto ">
					<Link href="dashboard/vertical">Vertical</Link>
				</button>
			</div>
		</>
	);
}
