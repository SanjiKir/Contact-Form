import styled from '../../../styled-components';

export const DeleteIconBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.dangerColor};
    width: 1.35rem;
    height: 1.35rem;
`;

export const DeleteIconRectangular = styled.div`
    background-color: ${props => props.theme.palette.backgroundColor};
    width: 0.5rem;
    height 0.25rem;
`;
