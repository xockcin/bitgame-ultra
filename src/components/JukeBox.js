import BandcampPlayer from "react-bandcamp";
import {Container} from "react-bootstrap"

const JukeBox = (props) => {
  return (
    <Container className=" d-flex p-3 justify-content-center">
      <BandcampPlayer
        BandcampPlayer
        album="3114440086"
        bgcol="blue"
        linkcol="blue"
        size="medium"
        width="50%"
        style={{ opacity: "0.5" }}
      />
    </Container>
  );
}

export default JukeBox