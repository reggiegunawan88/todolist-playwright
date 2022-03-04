import React from 'react';

import Link from 'next/link';

type Props = {
  title: string;
  description: string;
};

const index = (props: Props) => {
  return (
    <div className="border-b border-gray-300">
      <div className="pt-16 pb-8">
        <div className="text-3xl font-bold text-gray-900">{props.title}</div>
        <div className="text-xl">{props.description}</div>
      </div>
      <div>
        <ul className="flex flex-wrap text-xl">
          <li className="mr-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-gray-900 border-none">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/about/">
              <a className="text-gray-700 hover:text-gray-900 border-none">
                About
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <a
              className="text-gray-700 hover:text-gray-900 border-none"
              href="https://github.com/ixartz/Next-js-Boilerplate"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
