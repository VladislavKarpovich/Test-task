import { FC, useEffect, useState } from "react";
import { usePrevious } from "utils/hooks";
import { makeStyles } from "@material-ui/core/styles";
import { useCurrencyRateValue } from "services/hooks/use-currency-rates";
import Typography from "@material-ui/core/Typography";
import { Variant } from "@material-ui/core/styles/createTypography";
import { green, red } from "@material-ui/core/colors";
import { numberWithCommas } from "utils/common";

const useStyles = makeStyles((theme) => ({
  "@keyframes priceUpAnimation": {
    "100%": {
      background: theme.palette.background.paper,
    },
    "0%": {
      background: red[100],
    },
  },
  "@keyframes priceDownAnimation": {
    "100%": {
      background: theme.palette.background.paper,
    },
    "0%": {
      background: green[100],
    },
  },
  priceUp: {
    animation: "$priceUpAnimation",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationTimingFunction: "ease",
  },
  priceDown: {
    animation: "$priceDownAnimation",
    animationDuration: "2s",
    animationIterationCount: "1",
    animationTimingFunction: "ease",
  },
}));

export interface MoneyTextProps {
  priceUsd: number;
  variant?: Variant;
}

export const MoneyText: FC<MoneyTextProps> = (props) => {
  const { priceUsd, variant } = props;
  const { isLoaded, isLoading, rate } = useCurrencyRateValue();
  const classes = useStyles();

  const [priceDirectionClass, setPriceDirection] = useState("");

  const price = isLoading || !isLoaded ? null : Math.round(rate * priceUsd);
  const prevRate = usePrevious(rate);
  const prevPrice = usePrevious(price);

  useEffect(() => {
    if (price === null || prevPrice === null) return;

    if (rate > prevRate) {
      setPriceDirection(classes.priceUp);
    } else if (rate < prevRate) {
      setPriceDirection(classes.priceDown);
    }
  }, [price]);

  useEffect(() => {
    if (priceDirectionClass === "") return;

    const timer = setTimeout(() => {
      setPriceDirection("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [priceDirectionClass]);

  return (
    <Typography variant={variant} className={priceDirectionClass} component="span">
      {numberWithCommas(price ?? 0)} руб
    </Typography>
  );
};
