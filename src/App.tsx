import { Draggable } from './components/draggable';
import { Box } from './components/box';

function App() {
  return (
    <div className="App">
      <Box className="blue">Not Draggable</Box>
      <Draggable posX={60} posY={300}>
        <Box className="red">Draggable 1</Box>
      </Draggable>
      <Draggable posX={400} posY={160}>
        <Box className="green">Draggable 2</Box>
      </Draggable>
    </div>
  );
}

export default App;
