import styled from "styled-components";
export const StyledSkeleton = styled.div`
    height: 285px;
    width: 220px;
    border-radius: 8px;
    background-color: 	#f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border: solid 1px #ecebeb;


.img {
    margin-top: 30px;
    width: 120px;
    height: 80px;
    background-color: #ecebeb;
}

.box-text {
    display: flex;
    gap: 40px;
}

.text1, .text2 {
   height: 30px;
   width: 40px;
    background-color: #ecebeb;
}

.text1 {
    height: 40px;
    width: 80px;
}

.text {
    height: 20px;
    width: 80%;
    background-color: #ecebeb;
}


.button {
    height: 30px;
    width: 100%;
    background-color: #ecebeb;
}


`