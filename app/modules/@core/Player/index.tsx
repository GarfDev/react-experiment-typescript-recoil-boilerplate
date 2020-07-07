import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
  url: string;
}

export default function Player(props: Props) {
  return <ReactPlayer url={props.url} playing={true} volume={0.05} />;
}
