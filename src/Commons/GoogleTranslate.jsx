import { useState, useEffect } from "react";
import axios from 'axios';

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
  ];

  const [displayedLanguage, setDisplayedLanguage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const translations = {
    en: 'Please select a language',
    es: 'Por favor seleccione un idioma',
    fr: 'Veuillez sélectionner une langue',
    de: 'Bitte wählen Sie eine Sprache',
  };

  const encodedParams = new URLSearchParams();
  encodedParams.set('q', 'English is hard, but detectably so');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': import.meta.REACT_APP_GOOGLE_TRANSLATE, 
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: encodedParams,
        };

        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedLanguage(translations[selectedLanguage]);
  }, [selectedLanguage, translations]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [languages]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <p>{displayedLanguage}</p>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select a language</option>
        {languages.map((language, index) => (
          <option key={index} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GoogleTranslate;
