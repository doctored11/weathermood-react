import { useEffect, useState } from "react";

export function useGeoLocation() {
  const [location, setLocation] = useState<GeolocationPosition>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {




    const geo = navigator.geolocation;
    if(!geo) {
        setIsLoading(false);
        console.error("geo not inicialized")
    }
    geo.getCurrentPosition((position) => {
      setLocation(position);
      setIsLoading(false); 
    });


  }, []);

  return {location,isLoading}
}
