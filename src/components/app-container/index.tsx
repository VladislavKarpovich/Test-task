import { ReactNode, FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
  children: ReactNode;
}

export const AppContainer: FC<AppContainerProps> = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <header className={classes.root}>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Test task
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <div className={classes.spacing} />

      {children}
    </>
  );
};
