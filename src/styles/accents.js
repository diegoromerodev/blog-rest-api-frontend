import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkBorder = styled(Link)`
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.4s ease-out;
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

const StyledABorder = styled.a`
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.4s ease-out;
  &:hover {
    border-bottom: 1px solid #333;
  }
`;

export { StyledLinkBorder, StyledABorder };
