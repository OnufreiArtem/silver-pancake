import './App.css';
import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import About from './components/About/About';
import HowToUse from './components/HowToUse/HowToUse';
import MainContent from './components/MainContent/MainContent';
import {
  ContextMenuLayout,
  ContextMenuItemLayout,
  IconContextMenuItemLayout,
  TextContextMenuItem
} from './components/ContextMenu/ContextMenu';
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu';
// import ContextMenu from './components/ContextMenu/ContextMenu';

const colorScheme = {
  primaryColor: "#46456E",
  secondColor: "#d2d1ef",
  thirdColor: "#A5A4E0",
  bcgColor: "#fff",

  //menubar
  menuColor: "#46456E",
  menuItemTextColor: "#fff",
  menuItemHoverTextColor: "#46456E",
  menuItemHoverColor: "#d2d1ef",
  menuSectionSeparatorColor: "#46456E80",

  //context
  contextBorderColor: "#46456E",
  contextBcgColor: "#d2d1ef",
  contextElementHoverColor: "#A5A4E090",
  contextTextColor: "#46456E",

  //searchbar
  searchbarBorderColor: "#46456E",
  searchbarBcgColor: "#A5A4E0",
  searchbarTextColor: "#46456E",
  searchbarHintColor: "#46456EA0",
  searchBtnColor: "#A5A4E0",
  searchBtnHoverColor: "#7a79c9",
  searchBtnIconColor: "#46456E",
  hintColor: "#46456E90",

  //dropdown
  dropdownHover: "#d2d1ef",
  dropdownTextColor: "#46456E",
  dropdownTextHoverColor: "#46456E",

  //dialogue
  dialogueBcgColor: "#fff",
  dialogueTextColor: "#46456E",
  dialogueSeparatorColor: "#46456E",
  dialogueBtnColor: "#A5A4E0",
  dialogueBtnHover: "#d2d1efA0",
  dialogueBtnTextColor: "#46456E",
  dialogueBtnTextHoverColor: "#46456E",
}

const darkColorScheme = {
  primaryColor: "#CECEE3",
  secondColor: "#d2d1ef",
  thirdColor: "#A5A4E0",
  bcgColor: "#33394a",

  //menubar
  menuColor: "#292939",
  menuItemTextColor: "#fff",
  menuItemHoverTextColor: "#292939",
  menuItemHoverColor: "#d2d1ef",
  menuSectionSeparatorColor: "#d2d1ef80",

  //context
  contextBorderColor: "#CECEE3",
  contextBcgColor: "#33394a",
  contextElementHoverColor: "#CECEE320",
  contextTextColor: "#CECEE3",

  //searchbar
  searchbarBorderColor: "#CECEE3",
  searchbarBcgColor: "#33394a",
  searchbarTextColor: "#CECEE3",
  searchbarHintColor: "#CECEE390",
  searchBtnColor: "#CECEE3",
  searchBtnHoverColor: "#fff",
  searchBtnIconColor: "#33394a",
  hintColor: "#CECEE390",

  //dropdown
  dropdownHover: "#d2d1ef",
  dropdownTextColor: "#d2d1ef",
  dropdownTextHoverColor: "#33394a",

  //dialogue
  dialogueBcgColor: "#CECEE3",
  dialogueTextColor: "#33394a",
  dialogueSeparatorColor: "#33394a80",
  dialogueBtnColor: "#33394a",
  dialogueBtnHover: "#292939",
  dialogueBtnTextColor: "#CECEE3",
  dialogueBtnTextHoverColor: "#CECEE3",
}

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  const [showHowToUse, setShowHowToUse] = React.useState(false);
  const [theme, setTheme] = React.useState(colorScheme);

  const [searchBarText, setSearchBarText] = React.useState("");


  React.useEffect(() => {
    // console.log("Changed")
    console.log("IN PARENT: " + searchBarText)
  }, [searchBarText])

  React.useEffect(() => {
    document.body.style.backgroundColor = theme.bcgColor;
  }, [theme])

  // clickHandlers
  const onAboutPressed = () => {
    setShowHowToUse(false);
    setShowAbout(true);
  }

  const onHowToUsePressed = () => {
    setShowAbout(false);
    setShowHowToUse(true)
  }

  return (
    <div className="App">
      <MenuBar items={[
        {
          title: "File",
          color: theme.bcgColor,
          sections: [
            [
              {
                icon: "export",
                title: "Export",
                colorScheme: theme,
                last: false,
                onClick: () => { alert("Exported results") }
              },
              {
                icon: "clear",
                title: "Clear",
                colorScheme: theme,
                last: false,
                onClick: () => { setSearchBarText("") }
              },
              {
                icon: "nothing",
                title: "Switch Theme",
                colorScheme: theme,
                last: false,
                onClick: () => { setTheme(theme === colorScheme ? darkColorScheme : colorScheme) }
              },
            ],
            [
              {
                icon: "nothing",
                title: "Exit",
                colorScheme: theme,
                last: true,
                onClick: () => { alert("Application is off") }
              }
            ]

          ]
        },
        {
          title: "Help",
          color: theme.bcgColor,
          sections: [
            [
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
          ]
        }
      ]} colorScheme={theme} />
      <ContextMenuTrigger id="main-context-trigger">
        <MainContent onSearchBarChanged={(text) => setSearchBarText(text)} searchBarText={searchBarText} colorScheme={theme} />
      </ContextMenuTrigger>

      <ContextMenu id="main-context-trigger" class="context-menu">
        <ContextMenuLayout colorScheme={theme}>
          <MenuItem class="context-menu-item" onClick={e => alert("Exported results")}>
            <IconContextMenuItemLayout colorScheme={theme}>
              <svg style={{marginRight: '10px' }} width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 3H15C16.1046 3 17 3.89543 17 5V11C17 12.1046 16.1046 13 15 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H4" stroke={theme.contextTextColor} />
                <path d="M9.35355 0.646446C9.15829 0.451184 8.84171 0.451184 8.64645 0.646446L5.46447 3.82843C5.2692 4.02369 5.2692 4.34027 5.46447 4.53553C5.65973 4.7308 5.97631 4.7308 6.17157 4.53553L9 1.70711L11.8284 4.53553C12.0237 4.7308 12.3403 4.7308 12.5355 4.53553C12.7308 4.34027 12.7308 4.02369 12.5355 3.82843L9.35355 0.646446ZM9.5 10L9.5 1H8.5L8.5 10H9.5Z" fill={theme.contextTextColor} />
              </svg>

              <TextContextMenuItem colorScheme={theme}>Export</TextContextMenuItem>
            </IconContextMenuItemLayout>
          </MenuItem>

          <MenuItem class="context-menu-item" onClick={e => setSearchBarText("")}>
            <IconContextMenuItemLayout colorScheme={theme}>
              <svg style={{marginRight: '10px' }} width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.79778 1.47418L1.32505 5.47418C1.12585 5.79642 1.12585 6.20358 1.32505 6.52582L3.79778 10.5258C3.98 10.8206 4.30184 11 4.64838 11H17C17.5523 11 18 10.5523 18 10V2C18 1.44772 17.5523 1 17 1H4.64838C4.30184 1 3.98 1.17941 3.79778 1.47418Z" stroke={theme.contextTextColor} />
                <circle cx="13" cy="6" r="2.5" stroke={theme.contextTextColor} />
              </svg>
              <TextContextMenuItem colorScheme={theme}>Clear</TextContextMenuItem>
            </IconContextMenuItemLayout>
          </MenuItem>
          <MenuItem class="context-menu-item" onClick={e => setTheme(theme === colorScheme ? darkColorScheme : colorScheme)}>
            <ContextMenuItemLayout colorScheme={theme}>
              <TextContextMenuItem colorScheme={theme}>Switch Theme</TextContextMenuItem>
            </ContextMenuItemLayout>
          </MenuItem>
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
