import MainScreen from "../../layouts/mainScreen";
import { useSearchParams } from "react-router-dom";

export default function HteProfile() {
  const [searchParams] = useSearchParams();
  const hte = searchParams.get("hte");

  return (
    <MainScreen>
      <h1 className="text-3xl font-bold">{hte}</h1>

      {/* Dynamic sections */}
      <p>MOA details for {hte}</p>
      <p>Status, industry, files, etc.</p>
    </MainScreen>
  );
}
