import { useState } from "react";
import { useProducts } from "services/hooks/use-products";
import { useCurrencyRatesInitialization } from "services/hooks/use-currency-rates";
import { useAddToBasket } from "services/hooks/use-add-to-basket";
import { AppContainer } from "components/app-container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ProductCard } from "components/product-card";
import { Basket } from "components/basket";
import { ExchangeRateForm } from "components/exchange-rate-form";

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
  const [isBasketOpened, setIsBasketOpened] = useState(false);
  const closeBasket = () => setIsBasketOpened(false);
  const openBasket = () => setIsBasketOpened(true);

  const { isLoaded, isLoading, groups } = useProducts();
  const { addToBasket } = useAddToBasket();
  const classes = useStyles();
  useCurrencyRatesInitialization();

  const showSpinner = isLoading && !isLoaded;

  return (
    <AppContainer onButtonClick={openBasket}>
      <Grid container justify="space-between">
        <Typography variant="h4" className={classes.title}>
          Наши товары:
        </Typography>

        <ExchangeRateForm />
      </Grid>

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

        {/* For big screens */}
        <Hidden smDown>
          <Grid item xs={12} md={6} lg={4} className={classes.basketContainer}>
            <Basket onClose={closeBasket} />
          </Grid>
        </Hidden>

        {/* For small screens */}
        <Drawer anchor="top" open={isBasketOpened} onClose={closeBasket}>
          <Basket onClose={closeBasket} />
        </Drawer>
      </Grid>
    </AppContainer>
  );
};
