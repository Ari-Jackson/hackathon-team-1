import  { useState, useEffect } from "react";
import axios from 'axios';

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
  ];

  const encodedParams = new URLSearchParams();
  encodedParams.set('q', 'English is hard, but detectably so');

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <p>
        Maybe we can have a set interval where select your language displays
        in different languages every 2 seconds so the user can know it's where
        you select the language.
      </p>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select a language</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GoogleTranslate;
