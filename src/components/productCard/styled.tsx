import styled from "styled-components";
export const StyledProductCard = styled.div`

.scrollbar{
    height: 470px;
    overflow-y:auto;
    overflow-x: hidden;
}

.scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;   
}

.scrollbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0,0,0,0.3)
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.4);
}

.wrapper {
    margin-top: 35px;
    display: flex;
    justify-content: center;
}

.close-button {
    position: relative;
    left: 80px;
    bottom: 170px;
    height: 0px;
    scale: 2;
    border: none;
}

img {
    height: 90px;
    width: 90px;
}

p {
    font-size: 20px;
    min-width: 80px;
    color: var(--primary-grey);
}

.menu {
    border: 1px solid var(--border-grey);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}

.menu-buttons {
    width: 26px;
    height: 26px;
    border: none;
    background-color: var(--primary-white);
    font-size: 20px;
}


.plus:active, .minum:active{
transition-duration: 0.1s;
font-size: 22px;
}

.dividers {
    border-right: 1px solid var(--border-grey);
    border-left: 1px solid var(--border-grey);
    text-align: center;
    margin-top: 2px;
    margin-bottom: 2px;
    line-height: 26px;
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

.container-product-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    background-color: var(--primary-white);
    border-radius: 4px;
    height: 180px;
    justify-content: space-evenly;
}

.container-elements-cart {
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}




@media(min-width: 1200px){
    img {
        height: 50px;
        width: 60px;
    }

    p {
        padding-left: 5px;
        width: 150px;
    }

    .qtd {
    position: relative;
    height: 0px;
    width: 0px;
    left: 176px;
    top: 55px;
}

    .container-product-cart{
        flex-direction: row;
        width: 350px;
    }

    .close-button {
        position: relative;
        left: 5px;
        bottom: 85px;
        height: 0px;
        border: none;
        scale: 1.2;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        color: var(--primary-white);
        background-color: black;
    }

    .box-product > div {
        background-color: white;
    }

    .box-product > div > span {
        color: black;
        font-size: 14px;
        font-weight: 700;
    }
  

}
`