import { FC } from "react";
import { useBasket } from "services/hooks/use-basket";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius * 2,
  },
  title: {
    margin: theme.spacing(2, 1),
  },
  emptyBasketMessage: {
    margin: theme.spacing(3, 1),
  },
  productContainer: {
    padding: theme.spacing(2, 0),
  },
  amountBlock: {
    height: "100%",
  },
  resultContainer: {
    padding: theme.spacing(2, 1),
  },
}));

export interface BasketProps {
  onClose: () => void;
}

export const Basket: FC<BasketProps> = (props) => {
  const { onClose } = props;
  const classes = useStyles();
  const { sum, products, incrementInBasket, removeAllFromBasket, removeOneFromBasket } = useBasket();

  return (
    <Paper id="basket" className={classes.paper} elevation={3}>
      <Grid container>
        <Hidden mdUp>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h5" className={classes.title}>
          Корзина
        </Typography>
      </Grid>

      <Divider />

      {products.length === 0 && (
        <Typography
          variant="h5"
          component="p"
          color="textSecondary"
          align="center"
          className={classes.emptyBasketMessage}
        >
          Вы ничего не выбрали
        </Typography>
      )}

      {products.map(({ product, amount }) => (
        <div key={product.id} data-product-id={product.id}>
          <Grid container className={classes.productContainer}>
            <Grid item xs={6} sm={7}>
              <Typography variant="body2">{product.name}</Typography>
              <Typography variant="caption">{product.priceUsd} $</Typography>
              {amount === product.amount && (
                <Typography variant="caption" color="error" component="p">
                  Вы выбрали максимальное количество
                </Typography>
              )}
            </Grid>

            <Grid item xs={5} sm={3}>
              <Grid container justify="center" alignItems="center" className={classes.amountBlock}>
                <IconButton onClick={() => removeOneFromBasket(product.id)} disabled={amount === 0}>
                  <ArrowBackIcon fontSize="small" />
                </IconButton>
                <Typography>{amount}</Typography>
                <IconButton onClick={() => incrementInBasket(product.id)} disabled={amount === product.amount}>
                  <ArrowForwardIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>

            <Grid item xs={1} sm={2} container justify="flex-end">
              <IconButton onClick={() => removeAllFromBasket(product.id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <Divider />
        </div>
      ))}

      <Divider />

      <Grid container justify="space-between" className={classes.resultContainer}>
        <Typography>Сумма:</Typography>
        <Typography>{sum} руб</Typography>
      </Grid>
    </Paper>
  );
};
