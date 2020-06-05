import React, { FC } from 'react';
import { FiLogIn } from 'react-icons/fi';

import { PageHome, Content, ImageEcoleta, Main, Button } from './styles';
import Header from '../../components/Header/Header';

const Home: FC = () => {
    return (
        <>
            <PageHome>
                <Content>
                    <Header />

                    <Main>
                        <h1>Seu marketplace de coleta de resíduos</h1>
                        <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

                        <Button to="/create-point">
                            <span><FiLogIn /></span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Button>
                    </Main>
                </Content>    
            </PageHome>        
        </>
    );
}

export default Home;