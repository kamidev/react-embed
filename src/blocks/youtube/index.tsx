import * as React from 'react';
import YouTube from 'react-youtube';
import {BlockProps} from '../..';
import {rule} from 'p4-css';

const blockClass = rule({
  d: 'block',
  maxW: '100%',
});

const Y = YouTube as any;

const YouTubeWrapper: React.SFC<BlockProps> = ({id, renderWrap}) => {
  return renderWrap(<Y videoId={id} className={blockClass} />);
};

export default YouTubeWrapper;
