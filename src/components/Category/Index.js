import React from 'react';
import { string, } from 'prop-types';
import { Atag, Image } from './styles';

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1564880626432-d732a81bd945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

export const Category = ({
  cover = DEFAULT_IMG,
  path,
  emoji = '?',
}) => (
    <Atag className={ Atag } href={ path }>
      <Image className={ Image } src={ cover } alt="cover"/>
      { emoji }
    </Atag>
  );


Category.propTypes = {
  cover: string,
  emoji: string,
  path: string,
}