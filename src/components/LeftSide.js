import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const LeftSide = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          {/* eslint-disable-next-line */}
          <a>
            <Photo>
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="MyProfilePhoto" />
              ) : (
                <img src="/images/user.svg" alt="UserPhoto" />
              )}
            </Photo>
            <Link>
              <br />
              <a href="/">{props.user ? props.user.displayName : "Welcome!"}</a>
            </Link>
          </a>
          {/* eslint-disable-next-line */}
          <a>
            <AddBio>Add a Bio</AddBio>
          </a>
        </UserInfo>
        <ViewWidget>
          {/* eslint-disable-next-line */}
          <a>
            <div>
              <span>Who's viewed your profile</span>
              <span>Impressions of your post</span>
            </div>
            <div>
              <span className="profileViews">22</span>
              <span className="profileViews">2298</span>
            </div>
          </a>
        </ViewWidget>
        <Widget>
          {/* eslint-disable-next-line */}
          <a>
            <div>
              <span>Access exclusive tools & insights</span>
              <span>
                <img src="/images/premium.svg" className="premImg" alt="" />
                <span className="premium">Try Premium for free</span>
              </span>
            </div>
          </a>
        </Widget>
        <Widget>
          {/* eslint-disable-next-line */}
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        {/* eslint-disable-next-line */}
        <a>
          <span>Groups</span>
        </a>
        {/* eslint-disable-next-line */}
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        {/* eslint-disable-next-line */}
        <a>
          <span>Follow Hashtags</span>
        </a>
        {/* eslint-disable-next-line */}
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: LeftSide;
`;
const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  border: 2px solid white;
  box-sizing: border-box;
  &:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -35px 0 0 0;
    img {
      width: 72px;
      border-radius: 50%;
    }
  }
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  & > a {
    color: black;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

const AddBio = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const ViewWidget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 12px;
      font-weight: 550;
      line-height: 1.5;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .profileViews {
    color: blue;
    line-height: 1.5;
    display: inline;
    text-align: right;
    font-weight: 400;
  }
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 0 12px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 12px;
      line-height: 1.333;
      display: flex;
      align-items: center;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }

  .premImg {
    width: 15px;
    padding-right: 5px;
  }
  .premium {
    font-size: 12px;
    font-weight: 500;
    text-decoration: underline;
    :hover {
      cursor: pointer;
    }
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(LeftSide);
