import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class NewCardDialog extends React.Component {
  state = {
    open: false,
    title: '',
    desc: '',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  saveCard = () => {
    this.props.addNewCard(this.state.title, this.state.desc);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          color="primary" 
        >Add New Card</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Card</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new card, we need a title and a description.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              fullWidth
              onChange={(event) => {
                this.setState({
                  title: event.target.value,
                })
              }}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              onChange={(event) => {
                this.setState({
                  desc: event.target.value,
                })
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.saveCard} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
