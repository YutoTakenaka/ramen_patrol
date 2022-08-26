import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import tori from "../../assets/images/tori.png";
import miso from "../../assets/images/miso.png";
import serori from "../../assets/images/serori.png";

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

export default function MyPageIndex() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="bg-gray-50">
        <div className="flex justify-center">
          <AccountCircleIcon className="mr-12 mt-8" style={{ fontSize: 160 }} />
          <div>
            <div className="w-full flex ml-12 items-center mt-20">
              <p className="text-xl">Takenaka Yuto</p>
              <a href="">
                <button
                  className="border border-gray-200 rounded-lg px-2 py-1 text-sm mx-4 hover:bg-gray-200"
                  type="button"
                >
                  Edit profile
                </button>
              </a>
              <SettingsIcon className="hover:cursor-pointer" />
            </div>
            <p className="text-center mt-4">
              <span className="text-lg mr-2">123</span>patrols
            </p>
          </div>
        </div>
        {/* <TabList className="border-b border-gray-300 w-4/5"> */}
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
          className="bg-gray-50 my-4"
        >
          <Tab label="Posts" />
          <Tab label="saved" />
          <Tab label="likes" />
        </Tabs>
        <div className="mx-auto w-full flex justify-center pb-4">
          <TabPanel value={value} index={0}>
            <div className="flex justify-start flex-wrap w-11/12 mx-auto">
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
              <img className="w-64 h-64 m-4" src={tori} alt="" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex justify-start flex-wrap w-11/12 mx-auto">
              <img className="w-64 h-64 m-4" src={miso} alt="" />
              <img className="w-64 h-64 m-4" src={miso} alt="" />
              <img className="w-64 h-64 m-4" src={miso} alt="" />
              <img className="w-64 h-64 m-4" src={miso} alt="" />
              <img className="w-64 h-64 m-4" src={miso} alt="" />
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex justify-start flex-wrap w-11/12 mx-auto">
              <img className="w-64 h-64 m-4" src={serori} alt="" />
              <img className="w-64 h-64 m-4" src={serori} alt="" />
              <img className="w-64 h-64 m-4" src={serori} alt="" />
              <img className="w-64 h-64 m-4" src={serori} alt="" />
            </div>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
