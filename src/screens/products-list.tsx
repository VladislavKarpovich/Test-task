import { useProducts } from "services/hooks/use-products";
import { useAddToBasket } from "services/hooks/use-add-to-basket";
import { AppContainer } from "components/app-container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ProductCard } from "components/product-card";
import { Basket } from "components/basket";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
  },
  group: {
    margin: theme.spacing(2, 1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  basketContainer: {
    padding: theme.spacing(6, 0, 0),
  },
}));

export const ProductsList = () => {
  const { isLoaded, isLoading, groups } = useProducts();
  const { addToBasket } = useAddToBasket();
  const classes = useStyles();

  const showSpinner = isLoading && !isLoaded;

  return (
    <AppContainer>
      <Typography variant="h4" className={classes.title}>
        Наши товары:
      </Typography>

      {showSpinner && <LinearProgress color="primary" />}

      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          {groups.map((group) => (
            <section className={classes.group} key={group.id} data-group-id={group.id}>
              <Typography variant="h6">{group.name}</Typography>

              <Grid container>
                {group.products.map((product) => (
                  <Grid item key={product.id} xs={12} md={12} lg={6}>
                    <ProductCard product={product} onButtonClick={() => addToBasket(product)} />
                  </Grid>
                ))}
              </Grid>

              <Divider className={classes.divider} />
            </section>
          ))}
        </Grid>

        <Grid item xs={12} md={6} lg={4} className={classes.basketContainer}>
          <Basket />
        </Grid>
      </Grid>
    </AppContainer>
  );
};
