import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'v-modal',
  styleUrl: 'v-modal.scss',
  shadow: true,
})
export class VModal {
  @Prop() modalTitle: string;
  @Prop() modalId: string;
  @Prop() maxWidth: string = '600px';

  @Event() closed: EventEmitter<string>;

  onClose = () => {
    console.log('ONCLOSE');
    this.closed.emit(this.modalId);
  };

  render() {
    console.log(this.maxWidth);
    return (
      <Host>
        <div class="container" style={{ maxWidth: this.maxWidth }}>
          <div class="header">
            <h1 class="title">{this.modalTitle}</h1>
            <v-button onClick={this.onClose}>Close</v-button>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class="overlay"></div>
      </Host>
    );
  }
}
