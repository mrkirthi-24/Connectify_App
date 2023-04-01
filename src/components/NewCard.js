import React from "react";
import styled from "styled-components";

const NewCard = (props) => {
  return (
    <NewsCard>
      <NewsTitle>
        <h2>LinkedIn News</h2>
        <img src="/images/feed-icon1.svg" alt="feedicon" />
      </NewsTitle>
      <NewsFeedList>
        {props.articles.map((news, id = 0) => {
          return (
            <div key={id}>
              <a href={news.url}>
                <li>{news.title.slice(0, 35)}...</li>
                <span>Date: {news.publishedAt.slice(0, 10)}</span>
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
  );
};

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

const NewsFeedList = styled.div`
  margin-top: 16px;
  div {
    & > a {
      text-decoration: none;
      color: rgba(0, 0, 0, 1);
      font-size: 13px;
      font-weight: 600;
      display: flex;
      flex-direction: column;
      text-align: left;
      li {
        margin: 12px 0;
        position: relative;
      }
      span {
        font-size: 12px;
        font-weight: 400;
        margin-top: -10px;
        margin-left: 18px;
      }
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
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

export default NewCard;
