import config from "../config.json"
import styled from "styled-components"

function HomePage() {
    const colorHead = { backgroundColor: "red", color: "#fff", fontWeight: "bold" }

    console.log(config.playList)
    
    return (
        
        <div style={ colorHead }>
            <Menu />
            <Header />
            <TimeLine playlists={config.playList} />
        </div>
    )
}
export default HomePage

function Menu() {
    return (
        <div>Menu</div>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        padding: 16px 32px;
        gap: 16px;
        width: 100%;
    }
`
function Header() {
    const perfil = { width: "150px", borderRadius: "50%"}
    return (
        <StyledHeader>
            {/* <img src="" alt="banner" /> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="foto-de-perfil"/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>

        </StyledHeader>
    )
}
function TimeLine(props) {
    console.log('o props', props.playlists)
    const playlistName = Object.keys(props.playlists)
    return (
        <div>
            {playlistName.map(val => {
                const videos = props.playlists[val]
               console.log(val)
               console.log(videos)
               return (
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.map((video) => {
                            return (
                                <a href={video.url}>
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
               )
            })}
        </div>
    )
}
