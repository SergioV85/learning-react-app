import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { SearchPanel } from './../src/components/search-panel/search-panel.component';

const mockedAction = () => ({});

storiesOf('Search Panel', module)
  .add(
    'default view',
    withInfo({ inline: true })(() => (
      <SearchPanel
        movies={[]}
        searchBy='title'
        searchQuery=''
        search=''
        onChangeType={action('onChangeType')}
        onInputChange={action('onInputChange')}
        onSearchMovies={action('onSearchMovies')}
        doSearchOnInit={mockedAction}
      />
    )),
  )
  .add(
    'with some text',
    withInfo({ inline: true })(() => (
      <SearchPanel
        movies={[]}
        searchBy='title'
        searchQuery=''
        search='Home Alone'
        onChangeType={action('onClick')}
        onInputChange={action('onChange')}
        onSearchMovies={action('onClick')}
        doSearchOnInit={mockedAction}
      />
    )),
  )
  .add(
    'with changed search type',
    withInfo({ inline: true })(() => (
      <SearchPanel
        movies={[]}
        searchBy='genres'
        searchQuery=''
        search='comedy'
        onChangeType={action('onClick')}
        onInputChange={action('onChange')}
        onSearchMovies={action('onClick')}
        doSearchOnInit={mockedAction}
      />
    )),
  );
