import {useQuery} from 'graphql-hooks';
import {Builder} from '../../blocks/Builder';
import {Footer} from '../../blocks/Footer';
import {Header} from '../../blocks/Header';
import {CompanyContext} from '../../ContextProviders/Company';
import {PAGE_QUERY} from '../../queries';
import './styles.scss';
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
        <CompanyContext.Provider value={data.company}>
            <div className="Page--root">
                {data.page.showGlobalHeader && data.company && (
                    <Header logo={data.company.logo} {...data.globalHeader} />
                )}
                <div className={`${data.page.showGlobalHeader ? 'container' : ''}`}>
                    <Builder content={data.page.content} />
                </div>

                {data.page.showGlobalFooter && data.company && (
                    <Footer
                        logo={data.company.logo}
                        socialPlatforms={data.company.socialPlatforms}
                        columns={data.globalFooter.columns}
                    />
                )}
            </div>
        </CompanyContext.Provider>
    );
};
