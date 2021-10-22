import { newSpecPage } from '@stencil/core/testing';
import { VModal } from '../v-modal';

describe('v-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VModal],
      html: `<v-modal></v-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <v-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-modal>
    `);
  });
});
