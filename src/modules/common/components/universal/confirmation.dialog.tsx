import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react';
import SuperheroTitle from '../styled/superhero.title';

const ConfirmationDialog: FC<{isOpen: boolean, confirm: () => void, cancel: () => void}> = ({ isOpen, confirm, cancel }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm deletion?"}
        </DialogTitle>
        
        <DialogActions>
          <Button onClick={cancel}>Cancel</Button>
          <Button className="deleteConfim" onClick={confirm} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmationDialog;