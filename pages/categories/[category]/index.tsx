import Card from "@/components/card";
import { INewsArticle, INewsResponse } from "@/models/NewsArticles";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export interface ICategoryNewsPageProps {
	newsArticles: INewsArticle[];
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categorySlugs = [
		"business",
		"entertainment",
		"general",
		"health",
		"science",
		"sports",
		"technology",
	];

	const paths = categorySlugs.map((slug) => ({ params: { category: slug } }));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<ICategoryNewsPageProps> = async ({
	params,
}) => {
	const category = params?.category?.toString();
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWS_API_KEY}`,
	);
	const newsResponse: INewsResponse = await response.json();
	return {
		props: {
			newsArticles: newsResponse.articles,
			revalidate: 60 * 60,
		},
	};
};

const CategoryNewsPage = ({ newsArticles }: ICategoryNewsPageProps) => {
	const router = useRouter();
	const categoryName = router.query.category?.toString();

	const title = `${categoryName?.toLocaleUpperCase()} News`;

	return (
		<>
			<main>
				<Head>
					<title>{title}</title>
				</Head>
				<h1 className="py-4 font-semibold text-3xl leading-8">
					{title}
				</h1>

				<div>
					{newsArticles && (
						<div className="flex flex-wrap w-full py-8">
							{newsArticles.map((article, i) => (
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
		</>
	);
};

export default CategoryNewsPage;
