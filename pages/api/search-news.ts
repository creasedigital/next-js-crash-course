// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { INewsResponse } from '@/models/NewsArticles';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const searchTerm  = req.query.q?.toString();

    if(!searchTerm){
      return res.status(400).json({error: "No search term provided"});
    }

    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWS_API_KEY}`);
    const newsResponse: INewsResponse = await response.json();
    const articles = newsResponse.articles;

  res.status(200).json(articles)
}
