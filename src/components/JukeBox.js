import "../App.css"
import {useState} from "react"
import BandcampPlayer from "react-bandcamp"
import {Container} from "react-bootstrap"
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap'


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
  "370697788",
  "1274532837",
  "4264078350",
  "1823832688",
  "249810342",
  "250563680"
];

const randomAlbum = albums[Math.floor(Math.random() * albums.length)];



const JukeBox = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const toggle = () => setPopoverOpen(!popoverOpen)

  return (
    <Container
      className="d-flex p-3 justify-content-center border"
    >
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
      <BandcampPlayer
        onClick={toggle}
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