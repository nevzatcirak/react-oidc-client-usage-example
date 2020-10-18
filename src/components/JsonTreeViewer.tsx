import * as R from 'ramda';
import * as React from 'react';
import JSONTree from 'react-json-tree';

export interface IJsonTreeViewer {
  data: any;
  title: string;
  shouldExpandNode?: (keyPath: Array<string | number>, data: [any] | {}, level: number) => boolean;
}

export default function JsonTreeViewer(props: IJsonTreeViewer) {
  const renderJsonData = ()  => {
    return R.not(R.isEmpty(props.data)) && R.not(R.isNil(props.data)) ? (
      <>
        <h1>{props.title}</h1>
        <JSONTree data={props.data} theme="bright" shouldExpandNode={props.shouldExpandNode} />
      </>
    ) : null;
  }

    return renderJsonData();
}
