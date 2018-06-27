import * as React from 'react';

import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import { Footer } from './../src/components/footer/footer.component';

storiesOf('Footer', module)
  .add(
    'default view',
    withInfo({ inline: true })(() => (
      <Footer />
    )),
  );
