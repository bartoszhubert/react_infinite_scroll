import styled from 'styled-components';

export const ListWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px;
`;
