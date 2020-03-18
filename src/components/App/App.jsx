// core
import React, {useState} from 'react';

// library
import {Switch, Route, Redirect} from 'react-router-dom';

// components
import {Home, Prysm, About} from "../Pages";
import {Header, Modal} from "../common";
import {routes} from './routes';

//styles
import styles from './App.module.scss';

export const App = () => {
    const [modal, setModal] = useState(false);

    return (
        <div className={styles.app}>
            <Header setModal={setModal} />
            <main className={styles.main}>
                <Switch>
                    <Redirect exact from='/' to={routes.home}/>
                    <Route path={routes.home} component={() => <Home setModal={setModal}/>}/>
                    <Route path={routes.prysm} component={() => <Prysm setModal={setModal}/>}/>
                    <Route path={routes.about} component={() => <About setModal={setModal}/>}/>
                </Switch>
            </main>
            <Modal modal={modal} setModal={setModal}/>
        </div>
    );
};
