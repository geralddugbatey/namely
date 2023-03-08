import styled ,{css} from 'styled-components'
import {AiTwotoneHeart} from 'react-icons/ai'
import {BsCartFill} from 'react-icons/bs'


export const InfoContainer=styled.div`
color:whitesmoke;
grid-column: col-start 2/ col-end 9;


margin-top:8rem;


`


export const In =  styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,30rem);
width:100%;
place-content:center;
`

export const Ad= styled.div`
display:grid;
grid-template-columns: repeat(auto-fit,31rem);
width:100%;
place-content:center;

margin-top:4rem;

@media screen and (max-width: 768px) {
        margin-bottom:3rem;
  }

  @media screen and (max-width: 920px) {
        margin-bottom:3rem;
  }
  @media screen and (max-width: 1074px) {
    margin-bottom:3rem;
  }
`


export const One = styled.div`

color:black;
width:100%;
    height:100%;
    display:flex;
    padding:1rem;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h1{
        font-size:2rem;
    }


`

export const Two = styled.div`


img{
    width:100%;
    height:100%;
    object-fit:cover;

}

`




export const Collection = styled.div`

display:grid;
grid-template-columns: repeat(auto-fit,19rem);
width:100%;
grid-gap:3vw;
place-content:center;

`

export const View = styled.div`
margin:1rem;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}


`

export const Price = styled.div`
background:white;
display:flex;
justify-content:space-between;

p{
    font-size:1rem;
    color:black;

}


`


export const Tap = styled.div`

display:grid;
grid-template-columns:repeat(2,1fr);
width:100%;


`

export const Cart = styled(BsCartFill)``
export const Heart = styled(AiTwotoneHeart)``


export const Lay = styled.div`
cursor: pointer;
background:${props=>props.color};
text-align:center;
font-size:0.9rem;
color:${props=>props.font};
border:2px solid black;



`

export const Title=styled.div`

display:grid;
grid-template-columns: 1fr;
width:100%;
text-align:center;
font-size:0.7rem;
color:black;
margin-top:4rem;


`   


export const Title1=styled.div`

display:grid;
grid-template-columns: 22rem;
width:100%;
place-content:center;
margin-top:1rem;
margin-bottom:2rem;
img{
    width:100%;
    height:100%;

}


`   


export const First = styled.div`

color:black;
width:100%;
    height:100%;
    display:flex;
    padding:1rem;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h1{
        font-size:2rem;
    }



  





`

export const Second = styled.div`
color:black;

width:100%;
    height:100%;
  
img{
    width:100%;
    height:100%;
    border-radius:2px;
}



`
export const First1 = styled.div`

color:black;
width:100%;
    height:100%;
    display:flex;
    padding:1rem;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    h1{
        font-size:2rem;
    }

    @media screen and (max-width: 768px) {
    order:1;
  }

  @media screen and (max-width: 920px) {
    order:1;
  }
  @media screen and (max-width: 1074px) {
    order:1;
  }






`

export const Second1 = styled.div`
color:black;

width:100%;
    height:100%;
  
img{
    width:100%;
    height:100%;
    border-radius:2px;
}

@media screen and (max-width: 768px) {
    order:2;
  }
@media screen and (max-width: 920px) {
    order:2;
  }
@media screen and (max-width: 1074px) {
    order:2;
  }


`