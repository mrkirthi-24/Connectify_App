import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RightSide = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=business&pageSize=5&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res);
      setArticles(res.data.articles);
    };
    getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NewsCard>
        <NewsTitle>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon1.svg" alt="feedicon" />
        </NewsTitle>
        <NewsFeedList>
          {articles.map((news) => {
            return (
              <div>
                <a key={news.source.id} href={news.url}>
                  <li>{news.title.slice(0, 35)}...</li>
                  <span>{news.publishedAt}</span>
                </a>
              </div>
            );
          })}
        </NewsFeedList>
        <ShowMore>
          <div>
            <span>Show more &nbsp;</span>
            <img src="/images/news-down-icon.svg" alt="" />
          </div>
        </ShowMore>
      </NewsCard>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="feedicon" />
        </Title>
        <FeedList>
          <li>
            {/* eslint-disable-next-line */}
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            {/* eslint-disable-next-line */}
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations &nbsp;
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: RightSide;
`;
const NewsCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const NewsTitle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;
const NewsFeedList = styled.div`
  margin-top: 16px;
  div {
    & > a {
      text-decoration: none;
      color: rgba(0, 0, 0, 1);
      font-size: 13px;
      font-weight: 600;
      li {
        display: flex;
        margin: 12px 0;
        position: relative;
      }
      button {
        background-color: transparent;
        color: rgba(0, 0, 0, 0.6);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
        padding: 16px;
        align-items: center;
        border-radius: 15px;
        box-sizing: border-box;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height: 32px;
        max-width: 480px;
        text-align: center;
        outline: none;
      }
    }
  }
`;

const FeedList = styled.div`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const ShowMore = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px 10px 0px;
  div {
    display: flex;
    align-items: center;
    padding: 5px;
    :hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
  }
`;

const Recommendation = styled.div`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;

export default RightSide;
