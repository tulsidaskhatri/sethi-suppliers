import {useQuery} from 'graphql-hooks';
import {Builder} from './blocks/Builder';
import {Header} from './blocks/Header';
import {PAGE_QUERY} from './queries';

interface PageProps {
    id: number;
}
export const Page = ({id}: PageProps) => {
    const {loading, error, data} = useQuery(PAGE_QUERY, {
        variables: {
            id: id,
        },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Bad Happened</p>;
    return (
        <>
            {data.page.showGlobalHeader && <Header logo={data.globalHeader.logo} links={data.globalHeader.links} />}
            <Builder content={data.page.content} />
        </>
    );
};

// {
//   switch (block.__typename) {
//     case "H1Record":
//       return <h1 key={block.id}>{block.text}</h1>;
//     case "H2Record":
//       return <h4 key={block.id}>{block.text}</h4>;
//     default:
//       return <h1 key={block.id}>{block.text}</h1>;
//   }
// }
