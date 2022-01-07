import React from 'react';
import Text from './Text';
import RepositoryList from "./RepositoryList";

const Main = () => {
    return (
        <>
            <Text fontWeight="bold" fontSize="subheading">Rate Repository Application</Text>
            <RepositoryList />
        </>
    );
};

export default Main;