import * as React from 'react';
import invariant from 'tiny-invariant';

type Props = {
  id: String | Number;
};

export const DianomiContextFeed = ({ id }: Props) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.dianomi.com/js/contextfeed.js';
    script.async = true;
    script.type = 'module';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  invariant(id, 'DianomiContextFeedReact: id is required');

  return <div className="dianomi_context" data-dianomi-context-id={id} />;
};