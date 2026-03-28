import screenshot1 from './screenshots/NanoTap1.png';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Analytics />
      <SpeedInsights />
       <div id="banner">
        Farewell, NanoTap is now a public archive.{" "}
        <a href="/farewell/index.html">Learn more</a>
      </div>
      <header className="App-header">
        <h1 className="headerTitle">NanoTap</h1>
        <img src={screenshot1} width="50%" className="headerScreenshot" alt="App Screen" />

<section id="About">
        <h1 className="AboutTitle">
          About
        </h1>

        <p id="Info">
          NanoTap is the Open-Source Appstore that allows for the installation of third-party applications on iOS without signing only using a QR Code, NFC Tag or NanoCode...
        </p>
</section>

<section id="foss">
  <h1>
    NanoTap is FOSS*
  </h1>

  <p>
    This means that it is free and open source... Forever :) <br /> Find it on GitHub at: <a href='https://github.com/nanotap/nanotap'>github.com/nanotap/nanotap</a>
  </p>
</section>

<section id="Install">
  <h1>
    Install
  </h1>

  <p>
    Install NanoTap here signed following the video: <a href='https://4950934850934895080989043509380934850934850934850934503495.pages.dev/NanoTap_1.0_1768057161.ipa'>NanoTap_1.0_1768057161.ipa</a>
  </p>
</section>
<video width="640" height="358" controls>
  <source src="https://4950934850934895080989043509380934850934850934850934503495.pages.dev/InstallingNanotapdc.mov" type="video/mp4" />
  Your browser doesn't support video playback :(
</video>   
      </header>
    </div>
  );
}

export default App;
