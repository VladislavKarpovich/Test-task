import { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CachedIcon from "@material-ui/icons/Cached";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const ExchangeRateForm: FC = () => {
  const classes = useStyles();

  const [state, setState] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton}>
        <AttachMoneyIcon />
      </IconButton>
      <InputBase value={state} onChange={handleChange} className={classes.input} placeholder="Курс доллара" />
      <IconButton className={classes.iconButton}>
        <CachedIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton}>
        <CheckCircleIcon />
      </IconButton>
    </Paper>
  );
};
