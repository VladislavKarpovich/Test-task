import { FC, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CachedIcon from "@material-ui/icons/Cached";
import { useCurrencyRates } from "services/hooks/use-currency-rates";
import { number } from "yup";

const validation = number().required().min(10).max(100);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    width: "100%",
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
  errorMessage: {
    margin: theme.spacing(0, 2),
  },
}));

export const ExchangeRateForm: FC = () => {
  const classes = useStyles();
  const { isLoading, wasRefreshed, rate, applyCurrencyExchangeRate, refreshCurrencyExchangeRate } = useCurrencyRates();
  const [state, setState] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const onApplyClick = () => {
    const isValid = validation.isValidSync(state);
    if (isValid) {
      setIsValid(true);
      applyCurrencyExchangeRate(+state);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    if (!isLoading && wasRefreshed) {
      setState(Math.round(rate) + "");
    }
  }, [rate, isLoading]);

  return (
    <div className={classes.root}>
      <Paper component="form" className={classes.paper}>
        <IconButton className={classes.iconButton}>
          <AttachMoneyIcon />
        </IconButton>
        <InputBase value={state} onChange={handleChange} className={classes.input} placeholder="Курс доллара" />
        <IconButton className={classes.iconButton} onClick={refreshCurrencyExchangeRate}>
          <CachedIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton color="primary" className={classes.iconButton} onClick={onApplyClick}>
          <CheckCircleIcon />
        </IconButton>
      </Paper>

      <Typography color="error" variant="caption" className={classes.errorMessage}>
        {isValid ? " " : "Должно быть число от 10 до 100"}
      </Typography>
    </div>
  );
};
