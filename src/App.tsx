import React from 'react';
import {useQuery} from 'graphql-hooks';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Page} from './Page';
import {ROUTES_QUERY} from './queries';
import './styles/shared.scss';

function App() {
    const {loading, error, data} = useQuery(ROUTES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Bad Happened</p>;
    return (
        <Router>
            {data.allPages.map((page: any) => (
                <Route key={page.url} exact path={page.url} render={() => <Page id={page.id} />} />
            ))}
        </Router>
    );
}

export default App;
