import { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(2),
  },
}));

export const ExchangeRateForm: FC = () => {
  const classes = useStyles();
  const [state, setState] = useState(76);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(+event.target.value);
  };

  return (
    <form className={classes.form}>
      <TextField label="Курс рубля" value={state} onChange={handleChange} variant="outlined" />
    </form>
  );
};
