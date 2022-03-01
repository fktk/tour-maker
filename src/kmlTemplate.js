'use strict';

const tourWrapper = (tours, placemarks) => {
  return (
`<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"
 xmlns:gx="http://www.google.com/kml/ext/2.2">
  <Document>
    <name>Your tour</name>
    <open>1</open>
    <gx:Tour>
      <name>再生</name>
      <gx:Playlist>
      ${tours}
      </gx:Playlist>
    </gx:Tour>
    ${(placemarks ? placemarks : '')}
  </Document>
</kml>`
  );
}

const tourPoint = ({
  duration,
  timestamp,
  lon,
  lat,
  alt,
  head,
  tilt,
  altitudeMode,
  start
}) => {
  return (
`
        <gx:FlyTo>
          <gx:duration>${duration}</gx:duration>
          ${(start ? '': '<gx:flyToMode>smooth</gx:flyToMode>')}
          <Camera>
            <gx:TimeStamp>
              <when>${timestamp}</when>
            </gx:TimeStamp>
            <longitude>${lon}</longitude>
            <latitude>${lat}</latitude>
            <altitude>${alt}</altitude>
            <heading>${head}</heading>
            <tilt>${tilt}</tilt>
            <roll>0</roll>
            <altitudeMode>${altitudeMode}</altitudeMode>
          </Camera>
        </gx:FlyTo>
`
  );
}

const lineFeature = (coordinates, altitudeMode) => {
  return (
`
      <Placemark>
        <Style id="yellowLine">
          <LineStyle>
            <color>cf00ffff</color>
            <witdh>20</witdh>
          </LineStyle>
          <PolyStyle>
            <color>cf00ffff</color>
          </PolyStyle>
        </Style>
        <name>経路</name>
        <LineString>
          <styleUrl>#yellowLine</styleUrl>
          <extrude>1</extrude>
          <tessellate>1</tessellate>
          <coordinates>${coordinates}</coordinates>
          <altitudeMode>${altitudeMode}</altitudeMode>
        </LineString>
      </Placemark>
`
  );
}

exports.tourWrapper = tourWrapper;
exports.tourPoint = tourPoint;
exports.lineFeature = lineFeature;
