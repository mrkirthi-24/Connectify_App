import React, { useState } from "react";
import styled from "styled-components";

const PostModal = (props) => {
  const [editText, setEditText] = useState("");

  const reset = (e) => {
    setEditText("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Name</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton>
                  <img src="/images/shared-image.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shared-video.svg" alt="" />
                </AssetButton>
                <AssetButton>
                  <img src="/images/shared-doc.svg" alt="" />
                </AssetButton>
              </AttachAssets>
              <SharedComment>
                <AssetButton>
                  <img src="/images/shared-comment.svg" alt="" />
                  <span>&nbsp;Anyone</span>
                </AssetButton>
              </SharedComment>
              <PostButton>Post</PostButton>
            </SharedCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: initial;
  top: 32px;
  margin: 0 auto;
  border-radius: 5px;
`;
const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    background: transparent;
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }
    svg,
    img {
      pointer-events: none;
    }
  }
`;
const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  padding: 8px 12px;
  background: transparent;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border-radius: 50%;
    border: 2px solid transparent;
  }
  span {
    line-height: 1.5;
    font-weight: 600;
    font-size: 16px;
    margin-left: 5px;
  }
`;
const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  background: transparent;
`;
const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`;
const SharedComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  bprder-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    svg {
      margin-right: 5px;
    }
    span {
      font-size: 14px;
      font-weight: bold;
    }
  }
`;
const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding: 0px 16px;
  background: #0a66c2;
  color: #fff;
  border: none;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  &:hover {
    background: #004182;
    cursor: pointer;
  }
`;
const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    border: none;
  }
  input {
    width: 100%;
    height: 35px;
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

export default PostModal;
