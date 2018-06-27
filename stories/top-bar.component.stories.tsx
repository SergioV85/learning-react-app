import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { Topbar } from './../src/components/top-bar/top-bar.component';

storiesOf('TopBar', module)
  .add(
    'default view',
    withInfo({ inline: true })(() => (
      <Topbar showBackButton={false} onBackToList={action('onClick')} />
    )),
  )
  .add(
    'with back button',
    withInfo({ inline: true })(() => (
      <Topbar showBackButton={true} onBackToList={action('onClick')} />
    )),
  );
