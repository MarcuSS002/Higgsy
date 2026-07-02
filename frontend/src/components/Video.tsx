type VideoProps = {
  videoUrl: string;
  title: string;
};

export function Video({ videoUrl, title }: VideoProps) {
  return (
    <div className="overflow-hidden rounded-xl">
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="aspect-video w-full rounded-xl object-cover"
      />

      <div className="mt-3">
        <h3 className="font-bold text-white">{title}</h3>
    
      </div>
    </div>
  );
}