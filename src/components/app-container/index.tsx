import { ReactNode, FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  spacing: {
    height: 65,
  },
}));

export interface AppContainerProps {
  onButtonClick: () => void;
  children: ReactNode;
}

export const AppContainer: FC<AppContainerProps> = (props) => {
  const { children, onButtonClick } = props;
  const classes = useStyles();

  return (
    <>
      <header className={classes.root}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Test task
            </Typography>

            <Hidden mdUp>
              <IconButton color="primary" onClick={onButtonClick}>
                <ShoppingCartIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </header>

      <div className={classes.spacing} />

      {children}
    </>
  );
};
