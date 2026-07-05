import { useEffect, useRef } from "react";
import ico from '../assets/map.png'

export default function YandexMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.ymaps) return;

    window.ymaps.ready(() => {
      const map = new window.ymaps.Map(mapRef.current, {
        center: [41.296873, 69.272636], 
        zoom: 16,
      });

      const placemark = new window.ymaps.Placemark(
        [41.296873, 69.272636],
        {
          hintContent: "SAYONAR",
        },
        {
          iconLayout: "default#image",
          iconImageHref: ico, // o'zingni icon
          iconImageSize: [60, 60],
          iconImageOffset: [-30, -60],
        }
      );

      map.geoObjects.add(placemark);
    });
  }, []);

  return (
    <div
      className="YandexMap"
      ref={mapRef}
      style={{ width: "100%", height: "40vh",  borderRadius: "20px"}}
    />
  );
}