import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 200px;
  width: 85%;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 20px;
  font-weight: 300;
  margin: 24px 0 26px 0;
`;
