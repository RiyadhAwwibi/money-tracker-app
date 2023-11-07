import styled from 'styled-components';

export const MainLayout = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    padding: 10px;
    flex-direction: column;
  }
`;

export const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
`;
