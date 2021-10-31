import { Component, h } from '@stencil/core';

@Component({
  tag: 'v-cancel-icon',
  shadow: true,
})
export class VCancelIcon {
  render() {
    return (
      <v-svg-icon>
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </v-svg-icon>
    );
  }
}
