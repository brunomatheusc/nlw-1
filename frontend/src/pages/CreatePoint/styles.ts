import styled from 'styled-components';

export const PageCreatePoint = styled.div`
    width: 100%;
    max-width: 1100px;

    margin: 0 auto;
`;

export const Header = styled.header`
    margin-top: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: var(--title-color);
        font-weight: bold;
        text-decoration: none;

        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
            color: var(--primary-color);
        }
    }
`;

export const Form = styled.form`
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 36px;
    }

    fieldset {
        margin-top: 64px;
        min-inline-size: auto;
        border: 0;
    }

    legend {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        h2 {
            font-size: 24px;
        }

        span {
            font-size: 14px;
            font-weight: normal;
            color: var(--text-color);
        }        

    }    
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;
`;
