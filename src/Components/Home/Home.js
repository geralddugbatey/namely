import React from "react";
import {
  InfoContainer,
  In,
  First,
  Second,
  Title,
  Title1,
  Collection,
  View,
  Price,
  Tap,
  Heart,
  Cart,
  Lay,
  Ad,
  One,Two,
  First1,Second1
} from "./homelement";
import "../Header/header.css";

const Home = ({ data }) => {
  let i = true;
  return (
    <InfoContainer>
      <In>
        <First>
          <h1 className="h1">EMBRACE</h1>
          <h1 className="h1">COLLECTION</h1>
          <p className="it">Shop Suit Collection</p>
        </First>
        <Second>
          <img src={data[0].pic1}></img>
        </Second>
      </In>

      <Title>
        <h1 className="h1">FASHION.ART.STYLE</h1>
      </Title>

      <Title1>
        <img src={data[0].pic2}></img>
      </Title1>

      <Title>
        <h1 className="h1">SHIRTS</h1>
      </Title>

      <Collection>
        <View className="view">
          <img src={data[0].pic4}></img>
          <Price>
            <p>Ultra Gold</p>
            <p>$3.40</p>
          </Price>
          <Tap>
          <Lay color="black" font="#fff">
              <Heart></Heart>
              </Lay>
              <Lay color="#fff" font="black">
              <Cart/>
              </Lay>
          </Tap>
           
        </View>
        <View className="view">
          <img src={data[0].pic3}></img>
          <Price>
            <p>Ultra Black</p>
            <p>$3.40</p>
          </Price>
          <Tap>
          <Lay color="black" font="#fff">
              <Heart></Heart>
              </Lay>
              <Lay color="#fff" font="black">
              <Cart/>
              </Lay>
          </Tap>
           
          
     
        </View>
        <View className="view">
          <img src={data[0].pic5}></img>
          <Price>
            <p>Ultra True</p>
            <p>$2.40</p>
          </Price>
          <Tap>
          <Lay color="black" font="#fff">
              <Heart></Heart>
              </Lay>
              <Lay color="#fff" font="black">
              <Cart/>
              </Lay>
          </Tap>
           
        </View>
      </Collection>
      <Title>
        <h1 className="h1"></h1>
      </Title>     
      <Ad>
          <One>

          <h1 className="h1">TIP OF</h1>
          <h1 className="h1">THE</h1>
          <h1 className="h1">HAT</h1>
          <p className="it">Shop Hat Collection</p>

          </One>
          <Two>
              <img src={data[0].pic6}/>
          </Two>
      </Ad>
      <In>
      <Second1>
          <img src={data[0].pic7}></img>
        </Second1>
        <First1>
          <h1 className="h1">EMBRACE</h1>
          <h1 className="h1">COLLECTION</h1>
          <p className="it">Shop T-Shirt Collection</p>
        </First1>
      
      </In>
      <Title>
        <h1 className="h1"></h1>
      </Title>  
   
    </InfoContainer>
  );
};

export default Home;
