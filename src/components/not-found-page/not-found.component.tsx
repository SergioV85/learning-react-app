import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styledComponents from 'styled-components';

const { default: styled } = styledComponents as styledComponents.ThemedStyledComponentsModule<{}>;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
`;
const Message = styled.h2`
  margin: 1em 0;
`;
const LinkParagraph = styled.p`
  font-size: 1.5em;
`;

export const NotFoundPage = () =>
  <Wrapper>
    <Message>Sorry, page not found.</Message>
    <LinkParagraph>
      <Link to='/'>Return to homepage</Link>
    </LinkParagraph>
  </Wrapper>
  ;
