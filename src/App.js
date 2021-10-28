import './App.css';
import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';
import About from './components/About/About';
import HowToUse from './components/HowToUse/HowToUse';
import MainContent from './components/MainContent/MainContent';

const colorScheme = {
  primaryColor: "#46456E",
  secondColor: "#46456E",
  thirdColor: "#A5A4E0",
  bcgColor: "#fff",
}

const darkColorScheme = {
  primaryColor: "#292939",
  secondColor: "#46456E",
  thirdColor: "#A5A4E0",
  bcgColor: "#393F52",
}

function App() {
  const [showAbout, setShowAbout] = React.useState(false);
  const [showHowToUse, setShowHowToUse] = React.useState(false);
  const [theme, setTheme] = React.useState(colorScheme);

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
              title: "Dark Theme",
              colorScheme: theme,
              onClick: () => { setTheme(darkColorScheme) }
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
      <MainContent colorScheme={theme} />
      {
        showAbout && <About onClose={(state) => setShowAbout(state)} colorScheme={theme} />
      }

      {
        showHowToUse && <HowToUse onClose={(state) => setShowHowToUse(state)} colorScheme={theme} />
      }
    </div>
  );
}

export default App;
