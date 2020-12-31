import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCard 
        character="Nelson Muntz" 
        quote='Shoplifting is a victimless crime, like punching someone in the dark.'
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      />
      <QuoteCard 
        character="Ralph Wiggum" 
        quote="Me fail English? That's unpossible."
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      />
      <QuoteCard 
        character="Milhouse Van Houten" 
        quote='Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?'
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMilhouseVanHouten.png?1497567513002"
      />
    </div>
  );
}

export default App;
