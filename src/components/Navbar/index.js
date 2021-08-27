import {
  AppBar,
  IconButton,
  Link,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import React from "react";
import Image from "../../images/bg.jpg";
import Bg from "../../images/logo2.svg";
import MenuIcons from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import {Collapse} from '@material-ui/core';


const styles = {
  paperContainer: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Image})`,
    boxShadow: "none",
    objectFit: "cover",
  },

  logo: {
    objectFit: "cover",
    height: "130px",
    width: "100px",
    marginLeft: "20px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  menuItems: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.1rem",
    textDecoration: "none",
  },

  headingContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    textAlign: 'center',
  },

  
};

// const useStyles = makeStyles({
//     paperContainer: {
//         width: '100%',
//         height:' 100%',
//         backgroundImage: `url(${Image})`,
//     }
// })

function Navbar(props) {
  // const styles = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [checked, setChecked] = React.useState(false);

React.useEffect(() => {
  setChecked(true)
},[])
  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUrl = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };
  return (
    <Paper style={styles.paperContainer}>
      <AppBar color="transparent" elevation={0}>
        <Toolbar style={styles.toolbar}>
          <img style={styles.logo} src={Bg} alt="logo" />

          {isMobile ? (
            <>
              <IconButton edge="end" onClick={handleMenu}>
                <MenuIcons />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
                styles={styles.menu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem onClick={() => handleCloseUrl("")}>Home</MenuItem>
                <MenuItem onClick={() => handleCloseUrl("/contact")}>
                  Contact
                </MenuItem>
                <MenuItem onClick={() => handleCloseUrl("/about")}>
                  About
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Typography
              align="center"
              gutterBottom="true"
              varient="button"
              style={styles.menuItems}
            >
              <Link underline="none" href="/">
                Home
              </Link>
              <Link href="/about" underline="none">
                About
              </Link>
              <Link href="contact" underline="none">
                Contact
              </Link>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
   
      <Container style={styles.headingContainer}>

      <Collapse
        in={checked}
          {...(checked ? { timeout: 2000 } : {} )}
          collapsedSize={'50px'}
       
      >
          <Typography varient="h1">Welcome To My Suntakhan Resort</Typography>
          <br />
          <Typography varient="h1">
            You do your thing and Leave the rest to us
          </Typography>
      </Collapse>
        </Container>
      
    </Paper>
  );
}

export default withRouter(Navbar);
