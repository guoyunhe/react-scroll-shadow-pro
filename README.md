# React Scroll Shadow Pro

Show shadow for hidden content in scrollable area.

![Screenshot](./screenshot.png)

```jsx device="mobile"
import { ScrollShadow } from 'react-scroll-shadow-pro';
import { LoremIpsum } from 'react-lorem-ipsum';

function App() {
  return (
    <ScrollShadow style={{ maxHeight: 300 }}>
      <div style={{ padding: 10 }}>
        <LoremIpsum p={10} />
      </div>
    </ScrollShadow>
  );
}
```
