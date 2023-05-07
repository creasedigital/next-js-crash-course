import Link from "next/link";
import CategoryDropdown from "../categoryDropdown";
// import CategoryDropdown from "./categoryDropdown";

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<Link href="/">
					<span className="font-bold text-xl">News App</span>
				</Link>
			</div>
			<div className="flex items-center w-auto">
				<div className="text-sm mr-4">
					<Link href="/">
						<div className="text-white hover:text-gray-200">
							Home
						</div>
					</Link>
				</div>
				<div className="text-sm mr-4">
					<Link href="/search">
						<div className="text-white hover:text-gray-200">
							Search
						</div>
					</Link>
				</div>
				<div className="text-sm mr-4">
					<div className="text-white hover:text-gray-200">
						<CategoryDropdown />
					</div>
				</div>
			</div>
		</nav>
	);
}
