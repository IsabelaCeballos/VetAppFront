import React from 'react';

//components
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ComponentSearchUser } from '../components/searchUser';

export const SearchUser = () => {

    return (
        <>
            <Header />
            <ComponentSearchUser />
            <Footer />
        </>
    );
}