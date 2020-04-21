import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

/**
 * Delete to-do confirmation dialog
 * Content:
 *  - dialog title with close icon
 *  - dialog content
 *  - dialog actions
 */

const TodoDeleteConfirm = ({
  handleCloseDialog,
  handleDelete,
  openDialog,
  task,
}) => {
  return (
    <Dialog
      aria-labelledby="confirm-delete"
      maxWidth="xs"
      onClose={handleCloseDialog}
      open={openDialog}
    >
      <DialogTitle id="confirm-delete" style={{ padding: "0 0.5rem" }}>
        <Grid alignItems="center" container>
          <Grid item xs={10}>
            <Typography variant="h6">Confirmation</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              aria-label="close dialog window"
              edge="end"
              onClick={handleCloseDialog}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent style={{ padding: "1rem 0.5rem" }}>
        <Typography variant="body1">
          Are you sure you want to delete <b>{task}</b>?
        </Typography>
      </DialogContent>
      <Divider />
      <DialogActions style={{ padding: "1rem 0.5rem" }}>
        <Button color="primary" onClick={handleCloseDialog} variant="contained">
          Cancel
        </Button>
        <Button color="secondary" onClick={handleDelete} variant="contained">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodoDeleteConfirm;
