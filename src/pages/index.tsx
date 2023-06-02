import Header from "@/components/Header/Header";
import HomepageSection1 from "@/components/HomepageSection1/HomepageSection1";
import IconCardContainer from "@/components/IconCardContainer/IconCardContainer";

const Home = () => {
  return (
    <div className="bg-[#121212] w-screen pb-12">
      <Header />
      <IconCardContainer />
      <HomepageSection1 />
    </div>
  );
};

export default Home;
