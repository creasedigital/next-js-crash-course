import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { INewsArticle, INewsResponse } from "@/models/NewsArticles";
import Card from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

interface BreakingNewsProps {
	newsArticles: INewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
	BreakingNewsProps
> = async () => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`,
	);
	const newResponse: INewsResponse = await response.json();
	return {
		props: {
			newsArticles: newResponse.articles || null,
		},
	};
};

export default function BreakingNews({ newsArticles }: BreakingNewsProps) {
	return (
		<>
			<Head>
				<title key="title">Breaking News</title>
			</Head>
			<main
				className={`flex min-h-screen flex-col start ${inter.className}`}
			>
				<header className="font-semibold text-3xl flex justify-between items-center p-4">
					Breaking News
				</header>
				<div >
					{/* {newsArticles && JSON.stringify(newsArticles)} */}
					<div className="flex flex-wrap w-full">
						{newsArticles &&
							newsArticles.map((article, index) => (
								<Card
									key={index}
									title={article.title}
									description={article.description}
									url={article.url}
									image={article.urlToImage}
								/>
							))}
					</div>
				</div>
			</main>
		</>
	);
}
