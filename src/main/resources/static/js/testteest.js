
let latitude =0;
let longitude =0;



window.onload = function(){

    //navigator.geolocation.getCurrentPosition(function(pos) {
    //현재위치: 위도 경도 (살짝 오차 있음)
    // latitude = pos.coords.latitude;
    // longitude = pos.coords.longitude;

    //});

//정확한 학원 위치
    latitude=37.499806;
    longitude=127.028312;


    getMap();
}


function getMap() {
    var myLocation=new naver.maps.LatLng(latitude,longitude),
        map= new naver.maps.Map('map',{
            center:myLocation.destinationPoint(latitude,longitude),
            zoom:17
        }),
        marker = new naver.maps.Marker({
            map:map,
            position:myLocation
        })
    var contentString = [
        '<div class="iw_inner">',
        '<a href="#">그린아이티아카데미</a>',
        '<p>그린아이티아카데미학원입니다.</p>',
        '<br />',
        ,
        '</div>'
    ].join('');
    var infowindow = new naver.maps.InfoWindow({
        content: contentString
    });
    naver.maps.Event.addListener(marker, "click", function(e) {
        if (infowindow.getMap()) {
            infowindow.close();
        } else {
            infowindow.open(map, marker);
        }
    });
    infowindow.open(map, marker);



}




$(document).ready(function() {
    // 검색 버튼 클릭 이벤트 리스너 등록
    $('#search-icon').click(function() {
        // 검색어와 검색 타입 가져오기
        var keyword = $('#search').val();
        var type = $('select[name="type"]').val();
        // 검색 요청 보내기
        $.ajax({
            url: '/search/mapSearch',
            type: 'GET',
            data: {
                keyword: keyword,
                type: type
            },
            success: function(result) {

                try {
                    var campList = $.parseJSON(result);
                    if(campList ==null || campList.length==0){
                        alert("검색결과가 존재하지 않습니다.");
                        return;
                    }

                    initMap(campList);


                } catch (e) {

                    console.log(e);
                }
            },
        });
    });
});





function initMap(campList) {
    var mapDiv = document.getElementById("map");
    mapDiv.innerHTML = "";
    alert(campList[0].facltNm+"    "+campList[0].mapY+"    "+campList[0].mapX);

    var areaArr = new Array();  // 지역을 담는 배열 ( 지역명/위도경도 )
    for (let i = 0; i < campList.length; i++) {
        areaArr.push({
            name: campList[i].facltNm,
            lat: campList[i].mapY,
            lng: campList[i].mapX,
            address: campList[i].addr1,
            img: campList[i].firstImageUrl,
            theme: campList[i].themaEnvrnCl
        });
    }



    let markers = new Array(); // 마커 정보를 담는 배열
    let infoWindows = new Array(); // 정보창을 담는 배열

    // 이전에 생성된 지도 객체가 존재할 경우 지도 객체를 삭제합니다.


    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(36.792907, 127.782980), //지도 시작 지점
        zoom: 7
    });




    for (var i = 0; i < areaArr.length; i++) {
        // 지역을 담은 배열의 길이만큼 for문으로 마커와 정보창을 채워주자 !

        var marker = new naver.maps.Marker({
            map: map,
            title: areaArr[i].name, // 지역구 이름
            position: new naver.maps.LatLng(areaArr[i].lat , areaArr[i].lng) // 지역구의 위도 경도 넣기
        });

        /* 정보창 */
        var infoWindow = new naver.maps.InfoWindow({
            content: '<div style="width:300px;text-align:center;padding:10px;"><a href="#">'
                + areaArr[i].name + '</a><p>'+areaArr[i].address+'</p>' +
                (areaArr[i].theme != null ? '<p>' + areaArr[i].theme + '</p>' : '') +
                '<img style="width:200px;height:70px;" src="' + areaArr[i].img + '"></img>' +

                '</div>'

        }); // 클릭했을 때 띄워줄 정보 HTML 작성

        markers.push(marker); // 생성한 마커를 배열에 담는다.
        infoWindows.push(infoWindow); // 생성한 정보창을 배열에 담는다.
    }


    function getClickHandler(seq) {

        return function(e) {  // 마커를 클릭하는 부분
            var marker = markers[seq], // 클릭한 마커의 시퀀스로 찾는다.
                infoWindow = infoWindows[seq]; // 클릭한 마커의 시퀀스로 찾는다

            if (infoWindow.getMap()) {
                infoWindow.close();
            } else {
                infoWindow.open(map, marker); // 표출
            }
        }
    }

    for (var i=0, ii=markers.length; i<ii; i++) {
        console.log(markers[i] , getClickHandler(i));
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i)); // 클릭한 마커 핸들러
    }
}


