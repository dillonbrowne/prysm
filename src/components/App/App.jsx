// core
import React from 'react';

// library
import {Switch, Route, Redirect} from 'react-router-dom';

// components
import {Home, Prysm, About, ContactUs} from "../Pages";
import {Header} from "../common";
import {routes} from './routes';

//styles
import styles from './App.module.scss';

export const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <main className={styles.main}>
                <Switch>
                    <Redirect exact from='/' to={routes.home}/>
                    <Route path={routes.home} component={Home}/>
                    <Route path={routes.prysm} component={Prysm}/>
                    <Route path={routes.about} component={About}/>
                    <Route path={routes.contactUs} component={ContactUs}/>
                </Switch>
            </main>
        </div>
    );
};