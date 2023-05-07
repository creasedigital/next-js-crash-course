import Image from 'next/image'
import Link from 'next/link';

export interface ICardProps {
    title: string;
    image?: string;
    description: string;
    url: string;
}

const Card = (
    {
        title, image, description, url
    }: ICardProps
) => {

    const validImageUrl = (image?.startsWith('http://') || image?.startsWith('https://')) ? image : '';
    const trimText = (text: string) => {
        if (text.length <= 80) return text;
        return text.slice(0, 80) + '...';
      };

    return ( 
        <>
            {validImageUrl &&
                <div className="rounded-xl overflow-hidden shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4  min-w-[320px] max-w-full ">
                <img  className="block h-40 sm:h-48 lg:h-60 w-full object-cover" src={validImageUrl} alt="News Image" />
                <div className="px-6 py-4">
                    <div className="h-12 overflow-hidden font-bold text-lg">
                        <h2 className='truncate'>{title}
                            </h2>
                        </div>
                        <div className=''>

                    <p className=" text-gray-700 text-sm">
                    {trimText(description)}
                    </p>
                        </div>
            </div>
            <div className="px-6 py-4">
                <Link href={url} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                read more
                </Link>
            </div>
</div>
}
        </>
     );
}
 
export default Card;