import { newE2EPage } from '@stencil/core/testing';

describe('v-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-modal></v-modal>');

    const element = await page.find('v-modal');
    expect(element).toHaveClass('hydrated');
  });
});
