import Heading from "components/Heading";
import Pargraph from "components/Pargraph";
import styled, { css } from "styled-components";
import { card } from "utils/mixins";

const NoteImage = styled.img`
  grid-area: image;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

const NoteTitle = styled(Heading).attrs({ level: 2 })`
  grid-area: title;
  align-self: center;
`;

const NoteExcerpt = styled(Pargraph).attrs({ size: "small" })`
  grid-area: exceprt;
  align-self: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const NotePublishTime = styled(Pargraph).attrs({ type: "secondary" })`
  grid-area: time;
  align-self: center;
  justify-self: end;
`;

const StyledNoteCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "image title time"
    "image exceprt exceprt";

  grid-template-columns: 72px 2fr 1fr;
`;

export default StyledNoteCard;

export { NoteImage, NoteTitle, NoteExcerpt, NotePublishTime };
