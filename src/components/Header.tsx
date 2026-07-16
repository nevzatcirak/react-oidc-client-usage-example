import * as React from 'react';

export interface IHeaderProps {
  logoSrc: any;
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="App-header">
      <img src={props.logoSrc} className="App-logo" alt="logo" />
    </header>
  );
}
