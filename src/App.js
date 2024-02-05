import Style from './App.module.css';
import Header from './Components/Header';
import OurSystem from './Components/OurSystem'
import Aboutus from './Components/Aboutus';
import FreeConsultation from './Components/FreeConsultation';
import OurWorks from './Components/OurWorks';
import OurTeam from './Components/OurTeam';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';


function App() {
  return (
    <>
      <Header />
      <OurSystem />
      <Aboutus />
      <FreeConsultation />
      <OurWorks />
      <OurTeam />
      <Footer />
      <BackToTopButton /> 

    </>
  );
}
export default App;
