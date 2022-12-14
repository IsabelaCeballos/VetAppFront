import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Páginas */
import { Home } from './pages/Home'
import { SearchUser } from './pages/SearchUser'
import { ViewPets } from './pages/ViewPets'
import { ViewMedicine } from './pages/ViewMedicine'
import { NewUser } from './pages/NewUser'
import { NewPet } from './pages/NewPet'
import { NewMedicines } from './pages/NewMedicines'

/** Estilos globales */
import './styles/globals.css'

/** Contexto */ 
export const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/searchuser" component={SearchUser} />
                <Route exact path="/viewpets/:idPet" component={ViewPets} />
                <Route exact path="/viewmedicine/:idMedicine" component={ViewMedicine} />
                <Route exact path="/newuser" component={NewUser} />
                <Route exact path="/newpet/:idUser" component={NewPet} />
                <Route exact path="/newmedicine/:idPet" component={NewMedicines} />
            </Switch>
        </BrowserRouter>
    )
}