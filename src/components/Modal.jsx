import React from 'react';
import './App.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      showError: false,
    };
  }

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, showError: !value })
  }

  componentDidMount() {
    if(this.props.isEdit){
      this.setState({ name: this.props.itemSelected.value })
    }
  }

  addItem = () => {
    const { name } = this.state;
    if(name){
      if(this.props.isEdit){
        this.props.editItem(this.props.itemSelected.position, name)
      }else {
        this.props.addItem(name)
      }
    } else {
      this.setState({ showError: true })
    }
  }

  render() {
    const { handleCloseModal } = this.props;
    return (
      <div className="modal">
        <div className="modal-background"/>
        <div className="modal-container-content">
          <div className="modal-content">
            <div className="title">
              Add item
            </div>
            <input value={this.state.name} type="text" name="name" className="input" onChange={this.handleOnChange}/>
            {
              this.state.showError &&
              <span className="error-message"> Required </span>
            }
            <div className="group-button">
              <div className="button-cancel-container">
                <button className="button-cancel" onClick={handleCloseModal}>
                  <span className="button-cancel-text">
                    Cancel
                  </span>
                </button>
              </div>
              <div className="button-add-container">
                <button className="button-add" onClick={this.addItem}>
                  <span className="button-add-text">
                    Add
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
