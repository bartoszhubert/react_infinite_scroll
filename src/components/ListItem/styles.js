import styled from 'styled-components';

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};

  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
`;

export const ExternalLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: row;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;

export const Host = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 14px 24px;

  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin: 0 0 6px;
`;
