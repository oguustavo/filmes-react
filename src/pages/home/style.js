import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;

    h1 {
        text-align: center;
        margin: 1rem 0;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 180px;
        border-radius: 8px;
        margin-bottom: 2rem;
    }
    span {
        font-weight: bold;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    a {
        transition: all 0.5s;
    }
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 8px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 15px;
    cursor: pointer;
    transition: all 250ms ;
`;

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
`;

export const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

export const CategoryItem = styled.li`
    cursor: pointer;
    font-size: 1rem;
    color: ${(props) => (props.selected ? "#339" : "#666")};
    font-weight: ${(props) => (props.selected ? "bold" : "normal")};
    transition: color 0.3s;

    &:hover {
        color: #333;
    }
`;