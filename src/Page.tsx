import {useQuery} from 'graphql-hooks';
import {Builder} from './blocks/Builder';
import {Footer} from './blocks/Footer';
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
            {data.page.showGlobalHeader && data.company && (
                <Header logo={data.company.logo} links={data.globalHeader.links} />
            )}
            <Builder content={data.page.content} />
            {data.page.showGlobalFooter && data.company && (
                <Footer logo={data.company.logo} columns={data.globalFooter.columns} />
            )}
        </>
    );
};
