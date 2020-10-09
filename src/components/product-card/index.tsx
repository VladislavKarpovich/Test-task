import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Product } from "models/Product";
import { MoneyText } from "../money-text";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius * 2,
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export interface ProductCardProps {
  product: Product;
  onButtonClick: () => void;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, onButtonClick } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3} data-product-id={product.id}>
      <Typography variant="subtitle1">{product.name}</Typography>
      <MoneyText priceUsd={product.priceUsd} />
      <Typography variant="body2">В наличии: {product.amount}</Typography>

      <Grid container justify="flex-end" onClick={onButtonClick}>
        <Button color="primary">Добавить</Button>
      </Grid>
    </Paper>
  );
};
