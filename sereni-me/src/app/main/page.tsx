import MainActivities from "@/components/MainActivities";
import MainAudios from "@/components/MainAudios";
import MainVideos from "@/components/MainVideos";

type props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

const Main = async (props: props) => {
  const searchParams = props.searchParams as { find: string };
  console.log(searchParams);

  if (searchParams.find == "Home" || Object.keys(searchParams).length == 0) {
    return (
      <main className="flex flex-col w-full justify-center mx-[10rem] gap-10 pt-20">
        <div className="w-full flex flex-col justify-center gap-7">
          <h1 className="text-4xl text-white">Today's Daily Activities</h1>
          <hr className="border-white border-solid dark:border-white" />
          <MainActivities query="Home" />
          <h1 className="text-3xl text-white">Videos</h1>
          <hr className="border-white border-solid dark:border-white" />

          <h1 className="text-xl text-white">For Stress & Anxiety</h1>
          <MainVideos query="Stress " />
          <h1 className="text-xl text-white">For Inner peace</h1>
          <MainVideos query="Inner Peace" />
          <h1 className="text-xl text-white">For Focus</h1>
          <MainVideos query="Focus" />
        </div>

        <div className="w-full flex flex-col justify-center gap-5">
          <h1 className="text-3xl text-white">Audios</h1>
          <hr className="border-white border-solid dark:border-white" />

          <h1 className="text-xl text-white">For Stress & Anxiety</h1>
          <MainAudios query="Stress " />
          <h1 className="text-x text-white">For Inner Peace</h1>
          <MainAudios query="Inner Peace" />
          <h1 className="text-xl text-white">For Focus</h1>
          <MainAudios query="Focus" />
        </div>
      </main>
    );
  } else {
    return (
      <main className="flex flex-col w-full justify-center mx-[10rem] gap-10 pt-20">
        <div className="w-full flex flex-col justify-center gap-7">
          <h1 className="text-3xl text-white">Videos</h1>
          <hr className="border-white border-solid dark:border-white" />
          {searchParams.find == "Stress " && (
            <>
              <h1 className="text-xl text-white">For Stress & Anxiety</h1>
              <MainVideos query="Stress " />
            </>
          )}
          {searchParams.find == "Inner Peace" && (
            <>
              <h1 className="text-xl text-white">For Inner peace</h1>
              <MainVideos query="Inner Peace" />
            </>
          )}
          {searchParams.find == "Focus" && (
            <>
              <h1 className="text-xl text-white">For Focus</h1>
              <MainVideos query="Focus" />
            </>
          )}
        </div>

        <div className="w-full flex flex-col justify-center gap-5">
          <h1 className="text-3xl text-white">Audios</h1>
          <hr className="border-white border-solid dark:border-white" />
          {searchParams.find == "Stress " && (
            <>
              <h1 className="text-xl text-white">For Stress & Anxiety</h1>
              <MainAudios query="Stress " />
            </>
          )}
          {searchParams.find == "Inner Peace" && (
            <>
              <h1 className="text-xl text-white">For Inner Peace</h1>
              <MainAudios query="Inner Peace" />
            </>
          )}
          {searchParams.find == "Focus" && (
            <>
              <h1 className="text-xl text-white">For Focus</h1>
              <MainAudios query="Focus" />
            </>
          )}
        </div>
      </main>
    );
  }
};

export default Main;
