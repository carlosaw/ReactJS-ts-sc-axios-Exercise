import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 50px;
    margin: 10px;
    border: 2px solid #141414;
    border-radius: 15px;
    background-color: #efefef;
    transition: all ease .5s;
    cursor: pointer;
    color: #000;

    &:hover {
        width: 810px;
        font-size: 18px;
        border: 2px solid #1E90FF;
        color: #1E90FF;
    }
`;