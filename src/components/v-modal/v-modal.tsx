import { Component, Host, h, Prop, Event, EventEmitter, State, Element, Watch } from '@stencil/core';
import 'animate-presence';

@Component({
  tag: 'v-modal',
  styleUrl: 'v-modal.scss',
  shadow: true,
})
export class VModal {
  @Element() el: HTMLElement;

  @Prop() isOpen: Boolean = true;
  @Prop() maxWidth: string = '600px';
  @Prop() modalId: string;
  @Prop() modalTitle: string;

  @Event() closed: EventEmitter<string>;

  @State() isVisible: Boolean = false;

  @Watch('isOpen')
  handleIsOpen(newValue: Boolean) {
    console.log(newValue);
    if (newValue === true) {
      this.isVisible = true;
    } else {
      this.el.addEventListener('transitionend', this.onCloseEnd);
      this.isVisible = false;
    }
  }

  connectedCallback() {
    console.log(this);
  }

  onClose = () => {
    console.log('ONCLOSE');
    this.closed.emit(this.modalId);
  };

  onCloseEnd = () => {
    this.el.removeEventListener('transitionend', this.onCloseEnd);
  };

  render() {
    console.log(this.maxWidth);
    const classes = ['container'];

    if (this.isOpen) {
      classes.push('is_open');
    }

    if (this.isVisible) {
      classes.push('is_visible');
    }

    return (
      <Host>
        <div class={classes.join(' ')} style={{ maxWidth: this.maxWidth }}>
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
