import React from 'react';
import './App.css';
import Title from './Title';
import CountItems from './CountItems';
import Item from './Item';
import Button from './Button';
import Modal from './Modal';
import { getItems, putItem, deleteItem, editItem } from '../api'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      openModal: false,
      items: [],
      itemSelected: {
        position: null,
        value: ''
      },
      isEdit: false,
    };
   }

  componentDidMount = async () => {
    const items = await getItems();
    this.setState({ items })
  }

  handleOpenModal = () => {
    this.setState({ openModal: true, itemSelected: { position: null, value: '' }, isEdit: false})
  }
  
  handleEditItem = async itemPosition => {
    const items = await getItems();
    const itemSelected = {
      position: itemPosition,
      value: items[itemPosition]
    };
    this.setState({ openModal: true, itemSelected, isEdit: true })
  }

  handleCloseModal = () => {
    this.setState({ openModal: false, itemSelected: { position: null, value: '' }})
  }

  deleteItem = async (itemPosition) => {
    await deleteItem(itemPosition);
    const items = await getItems();
    this.setState({ items })
  }

  editItem = async (itemPosition, itemValue) => {
    await editItem(itemPosition, itemValue);
    const items = await getItems();
    this.setState({ items, openModal: false })
  }

  addItem = async (item) => {
    await putItem(item);
    const items = await getItems();
    this.setState({ items, openModal: false })
  }

  render() {
    const { openModal, items, itemSelected, isEdit } = this.state;
    return (
      <div className="App">
        <Title />
        {
          items.length ?
          <CountItems count={items.length}/>  :
          <span className="empty-list"> List is empty </span>
        }
        
        {
          items.map((item, i) =>
            <Item elem={{name: item, position: i}} key={i} deleteItem={this.deleteItem} editItem={this.handleEditItem}/>
          )
        }
        <Button onClick={this.handleOpenModal}/>
        {
          openModal && <Modal handleCloseModal={this.handleCloseModal} addItem={this.addItem} itemSelected={itemSelected} editItem={this.editItem} isEdit={isEdit}/>
        }
      </div>
    );
  }
}

export default Main;