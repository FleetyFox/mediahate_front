import { useEffect } from 'react';

const FormComponent = () => {

  useEffect(() => {
    const f = 'externalFormStarterCallback';
    window[f] = function(h) {
      h.bind(document.getElementById('formHolder'));
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://pyrus.com/js/externalformstarter?jsonp=${f}&id=1272193`;
    document.head.appendChild(script);

    return () => {
      delete window[f];
      document.head.removeChild(script);
    };
  }, []);

  return <div id="formHolder" data-width="100%" style={{ background: "#000"}}></div>;
};

export default FormComponent;
