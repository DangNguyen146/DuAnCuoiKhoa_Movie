import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhimSapChieu from "./PhimSapChieu";
import PhimDangChieu from "./PhimDangChieu";
import PhimHotNhat from "./PhimHotNhat";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListMoviePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="listMoviePage container p-0  "
      style={{ minHeight: 755.994 }}
    >
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Phim sắp chiếu" {...a11yProps(0)} />
            <Tab label="Phim đang chiếu" {...a11yProps(1)} />
            <Tab label="Phim hot nhất" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} style={{ minHeight: 755.994 }}>
          <PhimSapChieu />
        </TabPanel>
        <TabPanel value={value} index={1} style={{ minHeight: 755.994 }}>
          <PhimDangChieu />
        </TabPanel>
        <TabPanel value={value} index={2} style={{ minHeight: 755.994 }}>
          <PhimHotNhat />
        </TabPanel>
      </div>
    </div>
  );
}
