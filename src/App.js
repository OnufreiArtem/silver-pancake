import './App.css';
import React from 'react';
import MenuBar from './components/MenuBar/MenuBar';

const colorScheme = {
  primaryColor: "#46456E",
  secondColor: "#46456E",
  thirdColor: "#A5A4E0",
  bcgColor: "#fff",
}

function App() {
  return (
    <div className="App">
      <MenuBar items={[
        {
          title: "File",
          color: colorScheme.bcgColor,
          submenu: [
            {
              icon: "",
              title: "Export",
              colorScheme: colorScheme,
              onClick: () => { console.log("Export clicked")}
            },
            {
              icon: "",
              title: "Clear",
              colorScheme: colorScheme,
              onClick: () => {}
            },
            {
              icon: "",
              title: "Dark Theme",
              colorScheme: colorScheme,
              onClick: () => {}
            },
          ]
        },
        {
          title: "Help",
          color: colorScheme.bcgColor,
          submenu: [
            {
              icon: "",
              title: "How to use",
              colorScheme: colorScheme,
              onClick: () => {}
            },
            {
              icon: "",
              title: "About",
              colorScheme: colorScheme,
              onClick: () => {}
            },
          ]
        }
      ]} colorScheme={colorScheme} />
    </div>
  );
}

export default App;
