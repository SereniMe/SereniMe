import { ObjectId } from "mongodb";
import { getAudios, getAudiosByTags } from "@/db/models/audio";
import AudioCard from "./AudioCard";

type audio = {
  _id?: ObjectId | string;
  name: string;
  audioUrl: string;
  tags: string;
  imageUrl: string;
};
const MainAudios = async ({ query }: { query: string }) => {
  let renderAud;

  if (query == "Home") {
    const audios = (await getAudios()) as audio[];
    renderAud = audios.slice(0, 4);
  }
  if (query == "Stress ") {
    const audios = (await getAudiosByTags({
      tags: "Stress and Anxiety",
    })) as audio[];
    renderAud = audios;
  }
  if (query == "Inner Peace") {
    const audios = (await getAudiosByTags({ tags: "Inner Peace" })) as audio[];
    renderAud = audios;
  }
  if (query == "Focus") {
    const audios = (await getAudiosByTags({ tags: "Focus" })) as audio[];
    renderAud = audios;
  }
  return (
    <div className="flex justify-start w-full gap-10 flex-wrap">
      {renderAud &&
        renderAud.map((audio, i) => {
          audio._id = audio._id?.toString();
          return (
            <div key={i}>
              <AudioCard audio={audio} />
            </div>
          );
        })}
    </div>
  );
};

export default MainAudios;
