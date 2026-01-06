import background from "../../assets/images/landingpage/landing_background.webp";

export default function LandingPage() {

  return (
    <div
      className="min-h-screen pt-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
    </div>
  );
}
