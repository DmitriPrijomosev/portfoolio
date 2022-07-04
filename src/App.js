import './App.css';
import background from "./img/DSC3656.jpg";
import naturavita from "./img/N350x350.png";
import cofesso from "./img/coffesso2.png";
import richard from "./img/R350x350.png";
import hyson from "./img/H350x350.png";
import thurson from "./img/T350x350.png";
import mayski from "./img/M350x350.png";

function App() {
  return (
    <div className="App">
		  <div className='header' style={{
			  backgroundImage: `url(${background})`,
			  backgroundSize: 'cover',
			  
		  }}>
			  	<div className='headers'>
				  <h1 className='H1'>TANTRADE OÜ</h1>
				  <h3 className='H2'>Kogu maailmas tunnustatud MAY-Foods tooted nüüd Eestis!</h3>
				</div>
		  </div>
		  <div className='block1'>
			  <p className='H3'>MEIE USUME, ET IDEAALNE KVALITEET SAAB OLLA SOODNE</p>
			  <p className='text'>Just seetõttu on meil hea meel pakkuda Teile vaid parimat ettevõttelt MAY-Foods – maailma juhtivalt teeturu liidrilt.</p>
		  </div>
		  <div className='main-link-list'>
			<div className='main-link'>
				  <img src={naturavita} />
				  <p className='text'>Naturavita</p>

			  </div>
			  <div className='main-link'>
				  <img src={cofesso} />
				  <p className='text'>Cofesso</p>

			  </div>
			  <div className='main-link'>
				  <img src={richard} />
				  <p className='text'>Richard</p>

			  </div>
		  </div>
		  <div className='main-link-list-2'>
			  <div className='main-link'>
				  <img src={hyson} />
				  <p className='text'>Hyson</p>

			  </div>
			  <div className='main-link'>
				  <img src={thurson} />
				  <p className='text'>Thyrson</p>

			  </div>
			  <div className='main-link'>
				  <img src={mayski} />
				  <p className='text'>Mayski</p>

			  </div>
		  </div>
    </div>
  );
}

export default App;
