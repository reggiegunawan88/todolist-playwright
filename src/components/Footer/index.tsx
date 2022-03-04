import React from 'react';

type Props = {
  title?: string;
};

const index = (props: Props) => {
  return (
    <div className="py-8 text-sm text-center border-t border-gray-300">
      © Copyright {new Date().getFullYear()} {props.title}. Powered with{' '}
      <span role="img" aria-label="Love">
        ♥
      </span>{' '}
      by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    </div>
  );
};

export default index;
