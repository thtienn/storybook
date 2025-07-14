# StackTech React UI Library

A modern React UI library built with TypeScript and SASS.

## Installation

```bash
npm install stacktech-library-react
```

## Usage

```tsx
import { Button } from 'stacktech-library-react';

function App() {
  return (
    <Button 
      variant="primary" 
      size="medium" 
      onClick={() => console.log('Button clicked!')}
    >
      Click me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Button contents |
| onClick | () => void | undefined | Click handler |
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Button style variant |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Button size |
| disabled | boolean | false | Disabled state |

#### Example

```tsx
<Button 
  variant="primary"
  size="large"
  onClick={() => console.log('Clicked!')}
  disabled={false}
>
  Click me
</Button>
```

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Build the library:
   ```bash
   npm run build
   ```

## License

MIT 