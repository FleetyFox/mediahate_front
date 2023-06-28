import {useEffect, useRef} from 'react';

const VKWidget = () => {
  const resizeTimeoutRef = useRef(null);

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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      initVKWidget();
    }, 200);
  };

  const initVKWidget = () => {
    document.getElementById('vk_groups').innerHTML = '';
    const divWidth =
      document.getElementById('vk_groups').parentElement.clientWidth;

    if (window.VK && !window.VK.Widgets) {
      window.VK.init({apiId: 'CvK0bDBWPFNzHCKSVCDT'});
    }

    if (window.VK && window.VK.Widgets) {
      window.VK.Widgets.Group(
        'vk_groups',
        {
          mode: 4,
          wide: 1,
          width: divWidth,
          height: 400,
          color1: '1c1c1c',
          color2: 'FFFFFF',
          color3: '5181B8',
        },
        217272921
      );
    }
  };
  return <div id='vk_groups' style={{paddingTop: '22px'}}></div>;
};

export default VKWidget;
