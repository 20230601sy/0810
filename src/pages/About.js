import { useEffect } from "react";
import { Container } from "react-bootstrap";
const { kakao } = window;
const LATITUDE = 37.5412952;
const LONGITUDE = 126.8381811;
// const POSITION_ID = 1576534967;
// https://map.kakao.com/link/to/18577297
const POSITION_URL = 'https://map.kakao.com/link/to/1576534967';

const About = () => {
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(LATITUDE, LONGITUDE), //지도의 중심좌표.
      level: 2 //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);

    const markerPosition  = new kakao.maps.LatLng(LATITUDE, LONGITUDE); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
    }); // 마커를 생성합니다

    marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const iwContent = `<div style="padding:5px; margin-left:48px"><a href=${POSITION_URL}" style="color:blue" target="_blank">길찾기</a>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(LATITUDE, LONGITUDE); //인포윈도우 표시 위치입니다
    const infowindow = new kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent 
    }); // 인포윈도우를 생성합니다
    infowindow.open(map, marker); // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
  }, [])


  return (
    <Container id="map" className='mt-2' style={{width:'90%', height:'60vh'}}></Container>
  );
}

export default About;