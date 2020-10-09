import { FC, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CachedIcon from "@material-ui/icons/Cached";
import { useCurrencyRates } from "services/hooks/use-currency-rates";

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
  const { isLoading, wasRefreshed, rate, applyCurrencyExchangeRate, refreshCurrencyExchangeRate } = useCurrencyRates();
  const [state, setState] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const onApplyClick = () => {
    applyCurrencyExchangeRate(+state);
  };

  useEffect(() => {
    if (!isLoading && wasRefreshed) {
      setState(Math.round(rate) + "");
    }
  }, [rate, isLoading]);

  return (
    <Paper component="form" className={classes.root}>
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
  );
};
