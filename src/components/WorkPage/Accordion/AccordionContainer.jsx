import InstructionsSection from './InstructionsSection';
import Data from './Data';

function App() {
  return <div className="dark:bg-offwhite rounded-3xl m-20 p-2">
    {Data.map((individualSectionData) => {
      return <InstructionsSection data={individualSectionData} key={individualSectionData.title}/>
    })}
  </div>
}

export default App;
