import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 16px;
    grid-template-columns: repeat(auto-fill,minmax(320px,1fr));
    list-style: none;
    margin: 0 auto;
    max-width: calc(100vw - 48px);
    padding: 0;

  a {
    text-decoration: none;
    color: #da6e80;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
    max-width: 200px;

    &:hover {
      color: #0b7ee4;
    }
  }
`;
