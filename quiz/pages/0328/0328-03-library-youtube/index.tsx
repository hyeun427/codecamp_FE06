import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://youtu.be/j9DsLrVkj4E"
      width={800}
      height={600}
      playing={true}
      muted={true}
    />
  );
}
