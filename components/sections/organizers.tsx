import NextImage from "next/image";

export default function Organizers() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 min-h-screen bg-black">
      <h1 className="text-white text-6xl font-space-age mb-8">ORGANIZERS</h1>
      <div className="flex items-center justify-center gap-8">
        <NextImage
          alt="SMC"
          src="/assets/SMC_datanyx.png"
          height={350}
          width={500}
        />
        <NextImage
          alt="AWS"
          src="/assets/AWS_club_datanyx.png"
          height={300}
          width={500}
        />
      </div>
    </div>
  );
}
