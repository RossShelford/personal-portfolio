import InstructionsSection from './InstructionsSection';
import Data from './Data';

function App() {
  return <div>
    {Data.map((individualSectionData) => {
      return <InstructionsSection data={individualSectionData} key={individualSectionData.title}/>
    })}
  </div>
}

export default App;
