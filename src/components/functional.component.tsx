import * as React from 'react';

interface AuthorProps {
  author: string;
  cssClass?: string;
  mentor: string;
}

export const Author = (props: AuthorProps) => 
  <p className={props.cssClass} >The author of app with functional component is { props.author } and mentor is { props.mentor }</p>