import React from 'react';
import Modal from '@mui/material/Modal';
import TakeNote from './TakeNote';
import { useLocation } from 'react-router-dom';

function EditModal({note,setOpen,openModal,action,navigate}:{note:any,setOpen:Function,openModal:any,action:Function,navigate:any}) {
  const route = useLocation().pathname
    return (
        <>
        <Modal
        open={openModal}
        onClose={()=>{setOpen(false);route===`/notes/${note.id}`?navigate("/notes"):navigate("/archive")}}
        sx={{[`& .css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop`]: { backgroundColor:'rgba(0, 0, 0, 0.09)' }}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] outline-none'>
          <TakeNote note={note} expandNote setExpandNote={setOpen} action={action} edit="edit"/>
        </div>
      </Modal>
        </>
    )
}

export default EditModal