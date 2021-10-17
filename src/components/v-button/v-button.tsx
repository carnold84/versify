import { Component, h } from '@stencil/core';

@Component({
  tag: 'v-button',
  styleUrl: 'v-button.scss',
  shadow: true,
})
export class VButton {
  render() {
    return (
      <button class="v_button">
        <slot></slot>
      </button>
    );
  }
}
