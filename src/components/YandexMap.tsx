import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface YandexMapProp {
  coords: [number, number];
}
export function YandexMap({ coords }: YandexMapProp) {
  return (
    <YMaps query={{ lang: "ru_RU", apikey: process.env.YANDEX_MAPS_API_KEY }}>
      <Map
        defaultState={{ center: coords, zoom: 20 }}
        width="100%"
        height="400px"
        modules={[]}
      >
        <Placemark
          geometry={coords}
          properties={{ hintContent: "место настроенич" }}
          options={{
            preset: "islands#greenCircleIcon",
            iconColor: "#00FF00",
          }}
        />
      </Map>
    </YMaps>
  );
}

///
/*
https://pbe-react-yandex-maps.vercel.app/
библиотка видимо вокруг версии апи 2 (а не 3) - https://yandex.ru/maps-api/docs/js-api/reference-guide/upgrade.html
*/
