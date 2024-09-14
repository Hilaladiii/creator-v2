import HomeSearch from "./_components/HomeSearch";
import LevelUp from "./_components/LevelUp";
import RecommendedSpeakers from "./_components/RecommendedSpeakers";
import RecommendedSponsors from "./_components/RecommendedSponsors";
import SearchSpeakerOrSponsor from "./_components/SearchSpeakerOrSponsor";
import SpeakersCategories from "./_components/SpeakersCategories";
import SpeakersSchedule from "./_components/SpeakersSchedule";

const HomePage = () => {
  return (
    <div>
      <HomeSearch />
      <div className="px-44">
        <SpeakersCategories />
        <RecommendedSpeakers />
        <SpeakersSchedule />
        <RecommendedSponsors />
        <LevelUp />
        <SearchSpeakerOrSponsor />
      </div>
    </div>
  );
};

export default HomePage;
