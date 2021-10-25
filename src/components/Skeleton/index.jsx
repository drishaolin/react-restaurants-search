import styled, { keyframes } from "styled-components";

const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingSkeleton = styled.div`
    background-color: #808080;
    border-radius: 6px;
    margin-bottom: 10px;
    min-width: ${(props) => props.width};
    height: ${(props) => props.height};
    animation: ${KeyFrameLoading} 500ms infinite alternate;
`;

export default function Skeleton({ width, height }) {
    return <LoadingSkeleton width={width} height={height} />;
}
