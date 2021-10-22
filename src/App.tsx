import {useQuery} from 'graphql-hooks';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Loader} from './components/Loader';
import {Page} from './components/Page';
import {ROUTES_QUERY} from './queries';
import './styles/shared.scss';

function App() {
    const {loading, error, data} = useQuery(ROUTES_QUERY);

    if (loading) return <Loader />;
    if (error) return <p>Something Bad Happened</p>;
    return (
        <Router>
            <Switch>
                {data.allPages.map((page: any) => (
                    <Route key={page.url} exact path={page.url} render={() => <Page id={page.id} />} />
                ))}
                <Route path="*">
                    <div>Page not found 404</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
