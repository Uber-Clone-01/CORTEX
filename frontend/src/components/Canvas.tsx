import React from "react";
import { Excalidraw, MainMenu } from "@excalidraw/excalidraw";

// ErrorBoundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please refresh the page or try again later.</h2>;
    }
    return this.props.children;
  }
}

const Canvas = () => {
  const handleChange = (elements, appState) => {
    console.log("Canvas updated!", { elements, appState });
  };

  return (
    <ErrorBoundary>
      <div style={{ height: "100%", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#e2e8f0" }}>
        <Excalidraw
          onChange={handleChange}
          initialData={{
            elements: [],
            appState: { viewBackgroundColor: "#e2e8f0" },
          }}
          viewModeEnabled={false} // Editing is enabled
          zenModeEnabled={false} // Zen Mode disabled
        >
          <MainMenu>
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.Help />
          </MainMenu>
        </Excalidraw>
      </div>
    </ErrorBoundary>
  );
};

export default Canvas;


