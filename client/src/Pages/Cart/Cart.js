import React, { Component } from "react";
import { Button, Modal } from '@shopify/polaris';

class Cart extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    console.log('tryna open');
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  addToCart = () => {
    console.log('do purchase stuff');
  };

  render() {
    const { props, state } = this;

    return (
      <div style={{ height: '500px' }}>
        <div id="product-component-5560ebeec05" />
        <div id="product-component-0b2e12b8bf5" />
        <br />
        <Button primary onClick={this.openModal}>Purchase</Button>
        <Modal
          open={state.isModalOpen}
          onClose={this.closeModal}
          title="Buy A Meat Stick"
          primaryAction={{
            content: 'Buy Now',
            onAction: this.addToCart,
          }}
          secondaryActions={[
            {
              content: 'Cancel',
              onAction: this.closeModal,
            },
          ]}
        >
          <Modal.Section>
            Yoooooo
          </Modal.Section>
        </Modal>
      </div>
    );
  }
}

export default Cart;
