import { useState } from "react";
import { categories } from "../data";
import Link from "next/link";

const CategoryDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleOpen() {
		setIsOpen(!isOpen);
	}

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id="menu-button"
					onClick={toggleOpen}
					aria-expanded="true"
					aria-haspopup="true"
				>
					Categories
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path fillRule="evenodd" d="M10 14l6-6H4z" />
					</svg>
				</button>
			</div>

			<div
				className={`${
					isOpen ? "" : "hidden"
				} absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-1" role="none">
					{categories.map((category, i) => (
						<Link
							key={i}
							href={`categories/${category}`}
							// passHref
						>
							<div
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
								tabIndex={-1}
								onClick={toggleOpen}
							>
								{category}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default CategoryDropdown;
