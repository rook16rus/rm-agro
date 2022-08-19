import loadApi from "./loadApi";

export default function yandexMap() {
    let map = document.querySelector('#map');
    if (!map) return;

    const urlElement = document.querySelector('.js-map-url');
    if (!urlElement) return;

    const url = `https://api-maps.yandex.ru/2.1/?apikey=${urlElement.dataset.api}&lang=ru_RU`;
    loadApi('yandex', url, () => {
        ymaps.ready(init);
    })

    function init() {
        map = new ymaps.Map('map', {
            center: [55.68678156906752,51.39040749999995],
            zoom: 16
        });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('rulerControl'); // удаляем контрол правил

        addMarker([55.68678156906752,51.39040749999995], map);
    }

    function addMarker(coords, map) {
        const marker = new ymaps.Placemark(coords, {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemarker.svg',
            iconImageSize: [60, 77],
            iconImageOffset: [-30, -77]
        });

        map.geoObjects.add(marker);
    }
}