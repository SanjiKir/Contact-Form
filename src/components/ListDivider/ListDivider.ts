import styled from '../../styled-components';

const ListDivider = styled.hr`
    margin: 0;
    height: 0;
    border: none;
    border-bottom: 1.3px solid #C2C3C5;
    margin-left: ${props => props.theme.indents.medium}
`;

export default ListDivider;
