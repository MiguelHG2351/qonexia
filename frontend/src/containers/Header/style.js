import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    background: rgba(0, 0, 0, .8);
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 8vh 1fr;
    justify-content: center;
    grid-template-areas: "menu menu" "title list";

    .background {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        box-sizing: content-box;
    }

    .background video {
        width: 100vw;
        height: 100vh;
        background: #0b0b2a;
    }

    .header-menu {
        display: flex;
        justify-content: center;
        & img {
            width: 120px;
            height: 20vh;
            grid-area: menu;
        }

        & .list-nav {
            display: flex;
            justify-content: center;
        }

        & .list-nav li {
            list-style: none;
        }
    }

    .header-title {
        color: #fff;
        margin: 0 auto;
        grid-area: title;
        & h1 {
            font-family: "Be Vietnam";
        }
    }

    .header-list {
        grid-area: list;
    }

`