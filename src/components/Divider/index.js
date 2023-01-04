import styled from "styled-components";

export const Divider = styled.div`
  border-top: 8px dashed var(--font-color);
  margin-top: ${props => props.marginTop || '24px'};
  width: 100%;
`