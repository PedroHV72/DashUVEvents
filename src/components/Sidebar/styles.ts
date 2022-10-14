import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: #6e61c6;

  .top {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
  }

  hr {
    height: 0;
    border: 0.5px solid lightgray;
  }

  .center {
    padding-left: 10px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      margin-top: 20px;

      li {
        display: flex;
        align-items: center;
        padding: 20px;
        cursor: pointer;

        &:hover {
          background-color: #6D1D20;
          
          span {
            color: white;
          }
        }

        .icon {
          height: 20px;
          width: 20px;
        }

        span {
          font-size: 13px;
          font-weight: bold;
          color: #888;
          margin-left: 10px;
        }
      }
    }
  }
`;