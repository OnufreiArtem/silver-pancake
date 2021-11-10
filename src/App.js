import './App.css';
import React, { useEffect } from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import About from './components/About/About';
import HowToUse from './components/HowToUse/HowToUse';
import MainContent from './components/MainContent/MainContent';
import {
  ContextMenuLayout,
  ContextMenuItemLayout
} from './components/ContextMenu/ContextMenu';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
// import ContextMenu from './components/ContextMenu/ContextMenu';

const colorScheme = {
  primaryColor: "#46456E",
  secondColor: "#d2d1ef",
  thirdColor: "#A5A4E0",
  bcgColor: "#fff",
  searchBtn: "#A5A4E0",
  searchBtnHover: "#7a79c9"
}

const darkColorScheme = {
  primaryColor: "#292939",
  secondColor: "#46456E",
  thirdColor: "#A5A4E0",
  bcgColor: "#393F52",
  searchBtn: "#A5A4E0",
  searchBtnHover: "#7a79c9"
}

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  const [showHowToUse, setShowHowToUse] = React.useState(false);
  const [theme, setTheme] = React.useState(colorScheme);

  const [contextPosition, setContextPosition] = React.useState({ top: -100, left: 0 });
  const [contextVisible, setContextVisible] = React.useState(true);

  const onAboutPressed = () => {
    setShowHowToUse(false);
    setShowAbout(true);
  }

  const onHowToUsePressed = () => {
    setShowAbout(false);
    setShowHowToUse(true)
  }

  const onContextMenu = (event) => {
    console.log("Context menu was opened")
    event.preventDefault()
    setContextVisible(true);
    setContextPosition({ top: event.y, left: event.x })
  }

  // clickHandlers

  const onExportPressed = () => {

  }

  const onClearPressed = () => {

  }

  const onSwitchTheme = () => {
    setTheme(theme === colorScheme ? darkColorScheme : colorScheme);
  }


  return (
    <div className="App">
      <MenuBar items={[
        {
          title: "File",
          color: theme.bcgColor,
          submenu: [
            {
              icon: "",
              title: "Export",
              colorScheme: theme,
              onClick: () => { console.log("Export clicked") }
            },
            {
              icon: "",
              title: "Clear",
              colorScheme: theme,
              onClick: () => { }
            },
            {
              icon: "",
              title: "Switch Theme",
              colorScheme: theme,
              onClick: () => { onSwitchTheme() }
            },
          ]
        },
        {
          title: "Help",
          color: theme.bcgColor,
          submenu: [
            {
              icon: "",
              title: "How to use",
              colorScheme: theme,
              onClick: () => onHowToUsePressed()
            },
            {
              icon: "",
              title: "About",
              colorScheme: theme,
              onClick: () => onAboutPressed()
            },
          ]
        }
      ]} colorScheme={theme} />
      <ContextMenuTrigger id="main-context-trigger">
        <MainContent colorScheme={theme} />
      </ContextMenuTrigger>

      <ContextMenu id="main-context-trigger" class="context-menu">
        <ContextMenuLayout colorScheme={theme}>
          <ContextMenuItemLayout colorScheme={theme}>
            <MenuItem class="context-menu-item">
              Export
            </MenuItem>
          </ContextMenuItemLayout>
          <ContextMenuItemLayout colorScheme={theme}>
            <MenuItem class="context-menu-item">
              Clear
            </MenuItem>
          </ContextMenuItemLayout>
          <ContextMenuItemLayout colorScheme={theme}>
            <MenuItem class="context-menu-item">
              Dark Theme
            </MenuItem>
          </ContextMenuItemLayout>
        </ContextMenuLayout >
      </ContextMenu >

      {
        showAbout && <About onClose={(state) => setShowAbout(state)} colorScheme={theme} />
      }

      {
        showHowToUse && <HowToUse onClose={(state) => setShowHowToUse(state)} colorScheme={theme} />
      }
      
    </div >
  );
}

export default App;
