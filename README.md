# EQUINOXUI
## Locally building the [project](https://github.com/gatwirival/EQUINOXUI)
### Steps

- Fork the repository.
- Clone the repository to your local machine.
- Install the dependencies using `npm install`.

Build the project by using the following command from your terminal:
```bash
npm run build
```
See how these components are rendered in Storybook by running the following command:
```bash
npm run storybook
```
# UI Library

This is a demo UI component library created using React, TypeScript, Rollup, and Storybook. 

## Installation

You can install this demo UI library using npm:

```
npm i equinoxui
```

## Usage

To use this demo UI library in your project, import the components you need from the library and use them in your React components.

```jsx
import React from "react";
import { Input, Button } from "equinoxui";

function App() {
  return (
    <div>
      <Input
        id="name"
        disabled={false}
        label="Enter your name"
        message="This field is required"
        error={false}
        success={false}
        onChange={(e) => console.log(e.target.value)}
        placeholder="Enter your name "
      />
      <Button
        size="medium"
        primary={true}
        disabled={false}
        text="Click me!"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  );
}

export default App;
```

## Contributing

You can fork the repository and use the code for personal or educational purposes.You are welcome to contribute too by adding  more UI components.
