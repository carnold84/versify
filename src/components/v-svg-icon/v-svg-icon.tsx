import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'v-svg-icon',
  shadow: true,
})
export class VSvgIcon {
  @Prop() size: number;

  render() {
    return (
      <svg fill={'none'} height={this.size} viewBox={'0 0 24 24'} width={this.size} xmlns={'http://www.w3.org/2000/svg'}>
        <slot></slot>
      </svg>
    );
  }
}
