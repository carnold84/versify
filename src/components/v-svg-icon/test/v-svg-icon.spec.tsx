import { newSpecPage } from '@stencil/core/testing';
import { VSvgIcon } from '../v-svg-icon';

describe('v-svg-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSvgIcon],
      html: `<v-svg-icon></v-svg-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <v-svg-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-svg-icon>
    `);
  });
});
