import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useTask } from "../../providers/task";
import { Button } from "../../components/Button/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#262529",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: theme.flex,
    flexDirection: theme.collum,
    background: "#262529",
  },
}));

export default function EditTaks({ task }) {
  const {
    editDescricao,
    setEditTitulo,
    setEditDescricao,
    editTasks,
    editTitulo,
  } = useTask();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (id) => {
    editTasks(id);
    handleClose();
  };
  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        editar
      </Button>
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
              value={editTitulo}
              onChange={(e) => setEditTitulo(e.target.value)}
              className="inp-modal"
              placeholder="digite aqui"
            />
            <h3>Alterar a descrição</h3>
            <textarea
              type="text"
              value={editDescricao}
              onChange={(e) => setEditDescricao(e.target.value)}
              className="inp-modal"
              placeholder="digite aqui"
            />
            <div style={{ margin: "20px" }}>
              <Button onClick={() => handleClick(task.id)}>salvar</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
