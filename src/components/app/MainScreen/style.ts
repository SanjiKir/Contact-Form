import styled from '../../../styled-components';

export const MainScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme.palette.backgroundColor};
    padding: 0 4rem;
    width: 100%;
`;
