import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import notes from '../note';
function createNotes (noteItem){
  return (
    <Hero 
      key = {noteItem.key}
      title = {noteItem.title}
      contact = {noteItem.content}
    />
  );
}
function App() {
  return (
    <div className="App" >
      <Header />
      {notes.map(createNotes)};
      <Footer />
     
    </div>
  );
}

export default App;
