import { Component, Host, h, Prop, Event, EventEmitter, State, Element, Watch } from '@stencil/core';
import 'animate-presence';

@Component({
  tag: 'v-modal',
  styleUrl: 'v-modal.scss',
  shadow: true,
})
export class VModal {
  elOverlay: HTMLElement;

  @Element() el: HTMLElement;

  @Prop() isOpen: boolean = true;
  @Prop() maxWidth: string = '600px';
  @Prop() modalId: string;
  @Prop() modalTitle: string;

  @Event() closed: EventEmitter<string>;

  @State() isVisible: boolean = false;
  @State() show: boolean = false;

  @Watch('isOpen')
  handleIsOpen(newValue: boolean) {
    if (newValue === true) {
      this.isVisible = true;
      setTimeout(() => {
        this.show = true;
      }, 100);
    } else {
      this.elOverlay.addEventListener('transitionend', this.onCloseEnd);
      this.show = false;
    }
  }

  onClose = () => {
    this.closed.emit(this.modalId);
  };

  onCloseEnd = () => {
    this.isVisible = false;
    this.elOverlay.removeEventListener('transitionend', this.onCloseEnd);
  };

  render() {
    const classes = [];

    if (this.show) {
      classes.push('show');
    }

    if (this.isVisible) {
      classes.push('is_visible');
    }

    return (
      <Host class={classes.join(' ')}>
        <div class={[...classes, 'container'].join(' ')} style={{ maxWidth: this.maxWidth }}>
          <div class="header">
            <h1 class="title">{this.modalTitle}</h1>
            <v-button onClick={this.onClose}>Close</v-button>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class={[...classes, 'overlay'].join(' ')} ref={el => (this.elOverlay = el)}></div>
      </Host>
    );
  }
}
