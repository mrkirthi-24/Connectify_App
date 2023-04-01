import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import styled from "styled-components";
import { getArticlesAPI } from "../actions";
import PostModal from "./PostModal";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <>
      {props.articles.length === 0 ? (
        <>
          <Container>
            <ShareBox>
              <div>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <button
                  onClick={handleClick}
                  disabled={props.loading ? true : false}
                >
                  Start a post
                </button>
              </div>
              <div>
                <button>
                  <img src="/images/photo-icon.svg" alt="" />
                  <span>Photo</span>
                </button>

                <button>
                  <img src="/images/video-icon.svg" alt="" />
                  <span>Video</span>
                </button>

                <button>
                  <img src="/images/event-icon.svg" alt="" />
                  <span>Event</span>
                </button>

                <button>
                  <img src="/images/article-icon.svg" alt="" />
                  <span>Write article</span>
                </button>
              </div>
            </ShareBox>
            <Content>
              {props.loading && <img src="./images/spin-loader.svg" alt="" />}
              {props.articles.length > 0 &&
                props.articles.map((article, key) => (
                  <Article key={key}>
                    <SharedActor>
                      {/* eslint-disable-next-line */}
                      <a>
                        <img src={article.actor.image} alt="" />
                        <div>
                          <span>{article.actor.title}</span>
                          <span>{article.actor.description}</span>
                          <span>
                            {article.actor.date.toDate().toLocaleDateString()}
                          </span>
                        </div>
                      </a>
                      <button>
                        <img src="/images/ellipsis.svg" alt="" />
                      </button>
                    </SharedActor>
                    <Description>{article.description}</Description>
                    <SharedImg>
                      {/* eslint-disable-next-line */}
                      <a>
                        {!article.sharedImg && article.video ? (
                          <ReactPlayer width="100%" url={article.video} />
                        ) : (
                          article.sharedImage && (
                            <img src={article.sharedImage} alt="" />
                          )
                        )}
                      </a>
                    </SharedImg>
                    <SocialCounts>
                      <li>
                        <button>
                          <img
                            src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                            alt="likes"
                          />
                          <img
                            src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                            alt="smiles"
                          />
                          <img
                            src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                            alt="love"
                          />
                          <span>&nbsp;80</span>
                        </button>
                      </li>
                      <li>
                        {/* eslint-disable-next-line */}
                        <a>{article.comments} comments</a>
                      </li>
                    </SocialCounts>
                    <SocialActions>
                      <button>
                        <img
                          src="/images/like-icon.png"
                          alt=""
                          className="flip"
                        />
                        <span>Like</span>
                      </button>
                      <button>
                        <img src="/images/comment-icon.svg" alt="" />
                        <span>Comment</span>
                      </button>
                      <button>
                        <img src="/images/repost-icon.png" alt="" />
                        <span>Repost</span>
                      </button>
                      <button>
                        <img src="/images/send-icon.svg" alt="" />
                        <span>Send</span>
                      </button>
                    </SocialActions>
                  </Article>
                ))}
            </Content>
            <PostModal showModal={showModal} handleClick={handleClick} />
            <p>There are no articles to show</p>
          </Container>
        </>
      ) : (
        <Container>
          <ShareBox>
            <div>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
              <button
                onClick={handleClick}
                disabled={props.loading ? true : false}
              >
                Start a post
              </button>
            </div>
            <div>
              <button>
                <img src="/images/photo-icon.svg" alt="" />
                <span>Photo</span>
              </button>

              <button>
                <img src="/images/video-icon.svg" alt="" />
                <span>Video</span>
              </button>

              <button>
                <img src="/images/event-icon.svg" alt="" />
                <span>Event</span>
              </button>

              <button>
                <img src="/images/article-icon.svg" alt="" />
                <span>Write article</span>
              </button>
            </div>
          </ShareBox>
          <Content>
            {props.loading && <img src="./images/spin-loader.svg" alt="" />}
            {props.articles.length > 0 &&
              props.articles.map((article, key) => (
                <Article key={key}>
                  <SharedActor>
                    {/* eslint-disable-next-line */}
                    <a>
                      <img src={article.actor.image} alt="" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </a>
                    <button>
                      <img src="/images/ellipsis.svg" alt="" />
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <SharedImg>
                    {/* eslint-disable-next-line */}
                    <a>
                      {!article.sharedImg && article.video ? (
                        <ReactPlayer width="100%" url={article.video} />
                      ) : (
                        article.sharedImage && (
                          <img src={article.sharedImage} alt="" />
                        )
                      )}
                    </a>
                  </SharedImg>
                  <SocialCounts>
                    <li>
                      <button>
                        <img
                          src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                          alt=""
                        />
                        <img
                          src="https://static.licdn.com/sc/h/lhxmwiwoag9qepsh4nc28zus"
                          alt=""
                        />
                        <img
                          src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                          alt=""
                        />
                        <span>&nbsp;80</span>
                      </button>
                    </li>
                    <li>
                      {/* eslint-disable-next-line */}
                      <a>{article.comments} comments</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                    <button>
                      <img
                        src="/images/like-icon.png"
                        alt=""
                        className="flip"
                      />
                      <span>Like</span>
                    </button>
                    <button>
                      <img src="/images/comment-icon.svg" alt="" />
                      <span>Comment</span>
                    </button>
                    <button>
                      <img src="/images/repost-icon.png" alt="" />
                      <span>Repost</span>
                    </button>
                    <button>
                      <img src="/images/send-icon.svg" alt="" />
                      <span>Send</span>
                    </button>
                  </SocialActions>
                </Article>
              ))}
          </Content>
          <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  grid-area: Main;
  & > p {
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    margin-top: 10px;
    font-size: 12px;
  }
`;
const CommonCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  &:first-child {
    button {
      letter-spacing: 0.5px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.5s;
      }
    }
  }
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #595959;
        }
      }
    }
  }
`;
const Article = styled(CommonCard)`
  margin: 0 0 8px;
  padding: 0;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    flex-grow: 1;
    margin-right: 12px;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      overflow: hidden;
      margin-left: 8px;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    top: 0;
    right: 10px;
    background: transparent;
    border: none;
    outline: none;
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
  color: rgba(0, 0, 0, 0.9);
`;

const SharedImg = styled.div`
  display: block;
  margin-top: 8px;
  width: 100%;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  overflow: auto;
  align-items: start;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  justify-content: space-between;
  li {
    margin-right: 5px;
    font-size: 12px;
    color: grey;
    button {
      display: flex;
      border: none;
      background-color: #fff;
      justify-content: center;
      align-items: center;
      & > span {
        font-size: 12px;
        color: grey;
      }
    }
  }
`;
const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  justify-content: space-around;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: rgba(102, 102, 102, 1);
    border: none;
    background-color: #fff;
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
