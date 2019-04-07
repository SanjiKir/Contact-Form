import styled from '../../styled-components';

export const AppContainerWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme.palette.backgroundColor};
    padding: ${props => props.theme.indents.pageTop} 4rem 0;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
`;