import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import Master from '../layouts/Master';

const RoutePage = () => {
    return(
        <Router>
            <Routes>
                {
                    routes.map(({path, ActiveMenuKey, component: Component}, key) => {
                        return(
                            <Route path="/" element={<Master ActiveMenuKey={ActiveMenuKey} ptitle={Component.props.title} />} key={key}>
                                <Route exact path={path} element={Component} />
                            </Route>
                        )
                    })
                }
            </Routes>
        </Router>
    )
}

export default RoutePage;