import Heading from "components/Heading";
import Icon from "components/Icon";
import Pargraph from "components/Pargraph";
import Popover from "components/Popover";
import styled, { css } from "styled-components";
import { card } from "utils/mixins";

const FileIcon = styled(Icon).attrs({ width: 60, height: 60 })`
  grid-area: icon;
`;

const FileName = styled(Heading).attrs({ level: 2 })`
  grid-area: name;
  align-self: center;
`;

const FileSize = styled(Pargraph).attrs({ type: "secondary" })`
  grid-area: size;
  align-self: center;
`;

const Options = styled(Popover)`
  grid-area: options;
  align-self: center;
  justify-self: end;
`;

const Time = styled(Pargraph).attrs({ type: "secondary" })`
  grid-area: time;
  align-self: center;
  justify-self: end;
`;

const StyledFileCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "icon name options"
    "icon size time";
  grid-template-columns: 74px 1fr 1fr;
`;

export default StyledFileCard;

export { FileIcon, FileSize, FileName, Options, Time };
