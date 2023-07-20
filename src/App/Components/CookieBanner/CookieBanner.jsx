import './styles.css';
import { CookieIcon } from '../Icons/CookieIcon';
import { useState } from 'react';

function setCookieState() {
  localStorage.setItem('cookieState', 1);
}

function getCookieState() {
  return localStorage.getItem('cookieState');
}

export const CookieBanner = () => {
  const currentBannerState = getCookieState();

  const [showBanner, setShowBanner] = useState(!currentBannerState);

  function hideBanner() {
    setShowBanner(0);

    setCookieState();
  }

  if (!showBanner) {
    return null;
  }

  return (
    <div>
      <div className="cookie-box-overlay"></div>

      <div className="cookie-box">
        <div>
          <div className="cookie-icon">
            <CookieIcon />
          </div>

          <h2 className="header">Pozwól na pliki cookies</h2>

          <p className="text">
            Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
            działanie strony i pomagają nam świadczyć usługi na najwyższym
            poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
            tych plików i przejść do strony lub dostosować użycie do swoich
            preferencji. W tym celu kliknij przycisk po prawej stronie “dopasuj
            zgody”, aby następnie wybrać te które odpowiadają Twoim
            indywidualnym preferencjom.
          </p>
        </div>

        <div className="buttons">
          <button onClick={hideBanner} className="button-1">
            W PORZĄDKU
          </button>

          <button className="button-2">DOPASUJ ZGODY</button>
        </div>
      </div>
    </div>
  );
};
