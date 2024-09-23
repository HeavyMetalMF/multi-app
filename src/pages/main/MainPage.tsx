import './MainPage.scss'
import WeatherPage from "../weather/ui/WeatherPage.tsx";
import VideoPage from "../video/VideoPage.tsx";
import AudioPage from "../audio/AudioPage.tsx";
import FilesPage from "../files/FilesPage.tsx";
import MessengerPage from "../messenger/MessengerPage.tsx";

function MainPage() {
  return (
    <div className="main">
        <div className="main__header-row">123</div>
        <div className="main__first-column">
          <WeatherPage />
          <MessengerPage />
        </div>
        <div className="main__second-column">
          <VideoPage />
          <AudioPage />
        </div>
        <div className="main__third-column">
          <FilesPage />
          <div className="main__block">В разработке</div>
        </div>
    </div>
  )
}

export default MainPage
