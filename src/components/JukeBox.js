import "../App.css"
import BandcampPlayer from "react-bandcamp";
import {Container, Badge} from "react-bootstrap"

const albums = [
  "3114440086",
  "760607385",
  "593527320",
  "3810139166",
  "2042603705",
  "1276578151",
  "2773626403",
  "1863670411",
  "1066916121",
  "2469171939",
  "3103314719",
  "2901024697",
  "3747112607",
  "2826691254",
  "516350195",
  "3119063652",
  "1251308296",
  "384570924",
  "3731629802",
  "1879106311",
  "3567456972",
  "4228644844",
  "4241148977",
  "2287597717",
  "571360365",
];

const randomAlbum = albums[Math.floor(Math.random() * albums.length)];

const JukeBox = (props) => {
  return (
    <Container className="d-flex p-3 justify-content-center">
      <BandcampPlayer
        BandcampPlayer
        album={randomAlbum}
        bgcol="blue"
        linkcol="blue"
        size="medium"
        width="50%"
      />
    </Container>
  );
}

export default JukeBox