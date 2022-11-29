import { sharedTwo } from '@beta4/shared/two';
import { UiFour } from '@beta4/ui/four';

export function App() {
  console.log('I am in rv1 and I am calling sharedTwo', sharedTwo());
  return (
    <>
      <UiFour />
      <p>
        Message from sharedTwo in App: <em>{sharedTwo()}</em>
      </p>
      <div />
    </>
  );
}

export default App;
