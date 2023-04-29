import styled from "styled-components";

const StyledBtn = styled.button`
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const StyledIconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  .line {
    fill: none;
    stroke: ${(props) =>
      props.isLight ? "var(--clr-light)" : "var(--clr-dark)"};
    stroke-width: 3;
    stroke-linecap: round;
    transition: stroke-dasharray 0.9s cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.8s ease;
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 3;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 3;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 3;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 3;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 3;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 3;
  }
`;

export { StyledBtn, StyledIconWrapper };
