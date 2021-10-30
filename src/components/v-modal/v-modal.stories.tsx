import { h } from '@stencil/core';
import { useCallback, useState } from 'react';

export default {
  title: 'Components/Modal',
};

const Template = args => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onRefChange = useCallback(node => {
    if (node !== null) {
      node.addEventListener('closed', onClose);
    }
  }, []);

  return (
    <div style={{ height: '200px' }}>
      <v-modal is-open={isOpen} ref={onRefChange} {...args}></v-modal>
      <v-button onClick={() => setIsOpen(true)}>Open</v-button>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  'children': 'My first modal',
  'max-width': '400px',
  'modal-id': '1',
  'modal-title': 'My first modal!',
};
