import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../source/components/CSSReset"
import Menu from "../source/components/Menu"
import { StyledTimeline } from "../source/components/Timeline"

function HomePage() {
  const body = {
    display: "flex",
    flexDirection: 'column',
    flex: 1,
  }

  return (
    <>
      <CSSReset />
      <div style={body}>
        <Menu />
        <Header />
        <TimeLine playlists={config.playList} />
      </div>
    </>
  )
}
export default HomePage

const StyledHeader = styled.div`
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .banner {
    width: 100%;
    height: 350px;
    border-radius: 0;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;
    width: 100%;  
  }
`
function Header() {
  return (
    <StyledHeader>
      <img 
        className="banner"
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
        alt="banner" />
      <section className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="foto-de-perfil"
        />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
function TimeLine(props) {
  const playlistName = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistName.map((val) => {
        const videos = props.playlists[val]
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
