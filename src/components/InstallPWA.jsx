import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <button
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700 active:scale-95"
      onClick={onClick}
      aria-label="Install App"
    >
      <Download size={20} />
      <span className="font-medium">Install App</span>
    </button>
  );
};

export default InstallPWA;
