import styled from "styled-components";
export const StyledList = styled.div`
display: flex;
justify-content: center;
margin-top: 18px;
min-height: 100vh;

.container-cards {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    max-height: 300px;
    gap: 16px;
}

@media(min-width: 440px){
    .container-cards{
        width: 460px;
        margin-top: 80px;
    }
}

@media(min-width: 660px){
    .container-cards{
        width: 700px;
    }
}

@media(min-width: 900px){
    .container-cards{
        width: 940px;
    }
}
`
export const StyledFilter = styled.div`
position: relative;
top: 60px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

button {
    border: none;
    background-color: white;
    height: 40px;
    padding: 5px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-bottom: solid 2px var(--primary-blue);
}

button:hover {
    color: var(--primary-blue);
}

@media(max-width: 660px){
    margin-bottom: 80px;
}

`

