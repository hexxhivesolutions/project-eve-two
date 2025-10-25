'use client';

import { useEffect } from 'react';

interface TawkToProps {
  propertyId: string;
  widgetId?: string;
}

export default function TawkTo({ propertyId, widgetId = 'default' }: TawkToProps) {
  useEffect(() => {
    // Check if Tawk_API is already loaded
    if (typeof window !== 'undefined' && !(window as any).Tawk_API) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }

    // Cleanup function
    return () => {
      // Optional: Remove Tawk widget on unmount if needed
      if (typeof window !== 'undefined' && (window as any).Tawk_API) {
        // Tawk_API cleanup can be added here if needed
      }
    };
  }, [propertyId, widgetId]);

  return null; // This component doesn't render anything visible
}
