import { Profile } from "./components/profile";
import { QuickLinks } from "./components/quick-links";
import { linksData } from "./data/linksData";
import { profileData } from "./data/profileData";

export default function HomePage() {
  return (
    <main>
      <div className="flex items-center justify-center flex-col gap-4 w-full h-screen p-4">
        <div className="w-full max-w-screen-xl sm:w-[375px] bg-[#1F1F1F] p-8 rounded-xl">
          <Profile
            name={profileData.name}
            location={profileData.location}
            description={profileData.description}
          />

          {linksData.map((ql) => {
            return <QuickLinks key={ql.href} href={ql.href} name={ql.name} />;
          })}
        </div>
      </div>
    </main>
  );
}
