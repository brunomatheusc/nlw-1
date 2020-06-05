import React, { FC } from 'react';

import { PageCreatePoint, Form } from './styles';
import Header from '../../components/Header/Header';

const CreatePoint: FC = () => {
    return (
        <>
            <PageCreatePoint>
                <Header />
            </PageCreatePoint>
        </>
    );
};

export default CreatePoint;