import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 8px;

    &:hover {
        opacity: 0.82;
    }
`;

export const Button = styled.div`
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1E90FF;
    font-size: 21px;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
`;