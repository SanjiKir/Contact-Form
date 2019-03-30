import styled from '../../styled-components';

export const InfoScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme.palette.backgroundColor};
    padding: 0 4rem;
    width: 100%;
`;

export const ContactDescriptionContainer = styled.div`
    width: 100%;
`;

export const ActionElementsContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: space-between;
    margin-bottom: 2rem;
`;
