import Card from "@/components/card";
import { INewsArticle } from "@/models/NewsArticles";
import { useState } from "react";

const SearchNewsPage = () => {
	const [searchResults, setSearchResults] = useState<INewsArticle[] | null>(
		null,
	);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isError, setIsError] = useState<boolean>(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		console.log("I was clicked");
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const query = formData.get("q")?.toString().trim();

		if (searchTerm) {
			try {
				setSearchResults(null);
				setIsError(false);
				setIsLoading(true);
				const response = await fetch(
					`/api/search-news?q=${searchTerm}`,
				);
				const articles: INewsArticle[] = await response.json();
				setSearchResults(articles);
			} catch (error) {
				console.error(error);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		// setIsLoading(true);
	};
	return (
		<main>
			<h1 className="py-4 font-semibold text-3xl leading-8">
				Search News
			</h1>
			<form onSubmit={handleSubmit} className="flex items-center">
				<label className="hidden" htmlFor="search-query">
					Search query
				</label>
				<input
					className="border border-gray-400 rounded-l-md py-2 px-3 w-64"
					type="text"
					id="search-query"
					name="q"
					placeholder="E.g. sports, any category"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					type="submit"
					disabled={isLoading}
					className="bg-gray-700 hover:bg-gray-800 rounded-r-md text-white py-2 px-4"
				>
					Search
				</button>
			</form>
			<div>
				{isLoading && <h4>loading...</h4>}
				{isError && <p>Something went wrong, please try again...</p>}
				{searchResults?.length === 0 && (
					<p>Nothing found. Try a different query</p>
				)}
				{searchResults && (
					<div>
						{searchResults.map((article, i) => (
							<Card
								key={i}
								title={article.title}
								image={article.urlToImage}
								url={article.url}
								description={article.description}
							/>
						))}
					</div>
				)}
			</div>
		</main>
	);
};

export default SearchNewsPage;
