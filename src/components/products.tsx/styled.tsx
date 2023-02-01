import styled from "styled-components";
export const StyledProduct = styled.div`
width: 220px;
min-height: 285px;
display: flex;
background-color: var(--primary-white);
border-radius: 8px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
transition-delay: 1s;

.container-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

}
.card-description {
    display: flex;
    justify-content: center;
}

.description {
    width: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

img {
    width: 140px;
    height: 140px;
}

.box-product {
    display: flex;
    justify-content: center;
}


.box-product > p {
    color: var(--primary-grey);
    width: 100px;

}

.box-product > div {
    background-color: var(--secondary-grey);
    color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 26px;
    width: 64px;
    font-size: 15px;
    justify-content: center;
    }

.button-product {
    display: flex;
    align-items: center;
}

    .button-product > div {
    display: flex;
    align-items: center;
}

svg{
    background-color: var(--primary-blue);
    position: relative;
    scale: 0.9;
    top: 2px;
    right: 10px;
}

button {
    width: 220px;
    height: 32px;
    border-radius: 0 0 8px 8px;
    border:none;
    justify-content: center
    display: flex;
    background-color: var(--primary-blue);
    color: var(--primary-white);
}
`
    ;