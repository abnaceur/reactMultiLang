import React, { Suspense } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

function Page() {
  const { t } = useTranslation();

  return (
    <div>
       <h1>{t('home.mainTitle')}</h1>
      <h3>{t('home.text')}</h3>
      <p>{t('home.description')}</p>
    </div>
  )
}

function Header() {
  const { i18n } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  }

  return(
    <div>
      <button className="btn" onClick={e => {handleChange('en')}}>EN</button>
      <button className="btn" onClick={e => {handleChange('fr')}}>FR</button>
    </div>
  )
}


function App() {
  return (
    <Suspense fallback="Loading ..." >
      <Header/>
      <div className="App">
        <Page />
      </div>
    </Suspense>
  );
}

export default App;
