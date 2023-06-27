import { useEffect } from 'react';

const VKWidget = () => {
  useEffect(() => {
    const existingScript = document.getElementById('vk-openapi');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'vk-openapi';
      script.src = 'https://vk.com/js/api/openapi.js?168';
      script.async = true;
      script.onload = initVKWidget;
      document.body.appendChild(script);
    } else {
      initVKWidget();
    }
  }, []);

  const initVKWidget = () => {
    if (window.VK && !window.VK.Widgets) {
      window.VK.init({ apiId: 'CvK0bDBWPFNzHCKSVCDT' }); // Замените YOUR_API_ID на ваш ID приложения VK
    }

    if (window.VK && window.VK.Widgets) {
      window.VK.Widgets.Group("vk_groups", { mode: 4, wide: 1, width: 'auto', height: 100, color1: "1c1c1c", color2: "FFFFFF", color3: "5181B8" }, 217272921);
    }
  };

  return <div id="vk_groups" style={{paddingTop: '8px'}}></div>;
};

export default VKWidget;
