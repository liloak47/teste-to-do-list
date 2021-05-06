import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import api from "../../services/index";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EditTaks({ task }) {
  const [titulo, setTitulo] = useState(task.titulo);
  const [descricao, setDescricao] = useState(task.descricao);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editTaks = () => {
    api
      .patch(`/tarefas/${task.id}`, { titulo: titulo, descricao: descricao })
      .then((resp) => console.log(resp));
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Alterar Tarefa</h2>
            <h3>Alterar o Título</h3>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <h3>Alterar a descrição</h3>
            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <button onClick={editTaks}>mude aq</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
