
import withCounter from './withCounter';
import Counter from './Counter';

const EnhancedCounter = withCounter(Counter);
const App = () => {
  return <EnhancedCounter/>;
};
export default App;