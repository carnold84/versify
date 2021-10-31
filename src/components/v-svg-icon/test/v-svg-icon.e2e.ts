import { newE2EPage } from '@stencil/core/testing';

describe('v-svg-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-svg-icon></v-svg-icon>');

    const element = await page.find('v-svg-icon');
    expect(element).toHaveClass('hydrated');
  });
});
