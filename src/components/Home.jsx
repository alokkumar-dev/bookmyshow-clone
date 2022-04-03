import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/action";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

export const Home = () => {
  const [recommended, setRecommended] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [premiere, setPremiere] = useState([]);
  const [laughter, setLaughter] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
    dispatch(addMovie(recommended));
  }, []);

  const getMovies = () => {
    axios.get("https://bookmyshow-clone-fw14.herokuapp.com/movies").then((res) => {
      console.log(res.data);
      setRecommended(res.data);
    });
    axios.get("https://bookmyshow-clone-fw14.herokuapp.com/entertainment").then((res) => {
      console.log("Ent", res.data);
      setEntertainment(res.data);
    });
    axios.get("https://bookmyshow-clone-fw14.herokuapp.com/premiere").then((res) => {
      console.log("Ent", res.data);
      setPremiere(res.data);
    });
    axios.get("https://bookmyshow-clone-fw14.herokuapp.com/laughter").then((res) => {
      console.log("Ent", res.data);
      setLaughter(res.data);
    });
  };

  const Home = styled.div`
    width: 100%;
    margin: auto;
  `;

  const Recommended = styled.div`
    display: flex;
    width: 95%;
    height: 500px;
    margin: auto;
  `;

  const Wrapper = styled(Link)`
    width: 250px;
    height: 100%;
    margin-left: 30px;
    color: black;
    text-decoration: none;
  `;

  const Image = styled.img`
    width: 210px;
    height: 350px;
    border-radius: 10px;
  `;

  const AdImg = styled.img`
    width: 93%;
    height: 100px;
    margin-left: 50px;
  `;

  const Entertainment = styled.div`
    width: 97%;
    height: 300px;
    margin: auto;
  `;
  const Img = styled.img`
    width: 210px;
    height: 210px;
    border-radius: 10px;
    margin-left: 30px;
  `;
  const Premieres = styled.div`
    width: 100%;
    height: 700px;
    background-color: #2b3149;
  `;
  const Premiere = styled.div`
    width: 90%;
    height: 85%;
    margin: auto;
  `;

  const PremiereImg = styled.img`
    width: 90%;
    height: 15%;
    margin-left: 50px;
  `;
  const PremDiv = styled.div`
    display: flex;
    width: 100%;
    height: 75%;
  `;

  const Prem = styled.div`
    width: 25%;
    height: 90%;
    margin-right: 30px;
  `;

  const PremImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 10px;
  `;
  const Laughter = styled.div`
    width: 90%;
    height: 600px;
    margin: auto;
  `;
  const LaughDiv = styled.div`
    display: flex;
    width: 100%;
    height: 85%;
  `;
  const Laugh = styled.div`
    width: 25%;
    height: 90%;
    margin-right: 25px;
  `;

  const LaughImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 10px;
  `;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 850, itemsToShow: 4 },
    { width: 1050, itemsToShow: 5 },
  ];

  return (
    <>
      <Home>
        <h2 style={{ marginLeft: "75px" }}>Recommended Movies</h2>
        <Recommended>
          <Carousel breakPoints={breakPoints}>
            {recommended.map((el) => {
              return (
                <Wrapper to={`/movies/${el._id}`} key={el.id}>
                  <Image src={el.imageUrl} />
                  <h4>{el.title}</h4>
                  <p style={{ color: "gray" }}>{el.type}</p>
                </Wrapper>
              );
            })}
          </Carousel>
        </Recommended>

        <AdImg src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png" />

        <Entertainment>
          <h2>The Best Of Entertainment</h2>
          {entertainment.map((el) => {
            return <Img key={el.id} src={el.url} />;
          })}
        </Entertainment>

        <Premieres>
          <PremiereImg src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" />

          <Premiere>
            <h2 style={{ color: "whitesmoke" }}>Premieres</h2>
            <p style={{ color: "whitesmoke" }}>
              Brand new releases every Friday
            </p>
            <PremDiv>
              {premiere.map((el) => {
                return (
                  <Prem key={el.id}>
                    <PremImg src={el.url} />
                    <h3 style={{ color: "whitesmoke" }}>{el.title}</h3>
                    <p style={{ color: "whitesmoke", fontSize: "15px" }}>
                      English
                    </p>
                  </Prem>
                );
              })}
            </PremDiv>
          </Premiere>
        </Premieres>
        <Laughter>
          <h2>Laughter Therapy</h2>
          <LaughDiv>
            {laughter.map((el) => {
              return (
                <Laugh key={el.id}>
                  <LaughImg src={el.url} />
                  <h3>{el.title}</h3>
                  <p style={{ color: "gray", fontSize: "15px" }}>{el.club}</p>
                </Laugh>
              );
            })}
          </LaughDiv>
        </Laughter>
      </Home>
    </>
  );
};
