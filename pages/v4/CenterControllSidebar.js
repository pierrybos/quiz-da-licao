import Head from "next/head";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Edit } from "@mui/icons-material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default () => {
  const [editComponent, setEditComponent] = useState(false);
  const handleOpen = () => setEditComponent(true);
  const handleClose = () => setEditComponent(false);
  return (
    <>
      <div>
        <Head>
          <style>
            {`
.centerSideBar {
  position: absolute;
  height: 100px; /* Ajuste conforme necessário */
  width: 100px; /* Ajuste conforme necessário */
}

.handle {
              
              position: absolute;
              width: 10px;
              height: 10px;
              top: 0;
              background-color: rgba(0, 0, 0, 0.3);
              z-index: 2;
            }

            .handle.left { left: -5px; }

.centerSideBar {
  left: 50%;
  transform: translateX(-50%);
  background-color: red; /* Altere a cor conforme desejado */
}

              `}
          </style>
        </Head>
      </div>
      <div className="centerSideBar">
        <IconButton
          className="handle left"
          aria-label="Edit"
          onClick={handleOpen}
        >
          <Edit />
        </IconButton>
      </div>
      <Modal
        open={editComponent}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
