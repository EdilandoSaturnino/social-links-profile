interface IProfileProps {
  name: string;
  location: string
  description: string
}

export function   Profile({ name, location, description }: IProfileProps) {
  return (
    <div className="flex items-center flex-col justify-center">
      <img
        src="/avatar-jessica.jpeg"
        alt="foto de perfil"
        className="rounded-full w-24 h-24"
      />
      <div className="py-4 items-center flex flex-col">

      <h1 className="font-semibold text-2xl">{name}</h1>
      <p className="text-[#8DF244] font-semibold">{location}</p>
      </div>
      <p>"{description}"</p>
    </div>
  );
}
