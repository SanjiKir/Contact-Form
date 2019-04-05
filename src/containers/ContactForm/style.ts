import { Form } from 'formik';

import styled from '../../styled-components';

export const ContactFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: ${props => props.theme.palette.backgroundColor};
    padding: 0 4rem;
    width: 100%;
    overflow: hidden;
`;

export const ContactDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TextAreasWrapper = styled.div`
    display: flex; 
    width: 100%; 
    margin-bottom: 2rem;

    *:not(:first-child) {
        margin-left: 2rem;
    }
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 100%;
    height: 100%;
    justify-content: space-between;
`;

export const ContactFormFieldWrapper = styled.div`
    padding: ${props => props.theme.indents.small} ${props => props.theme.indents.large};
`;

export const ActionElementsContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: space-between;
    margin-bottom: 2rem;
`;
