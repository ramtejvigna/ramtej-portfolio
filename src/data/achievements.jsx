import { Trophy, Award } from "lucide-react";

export const ACHIEVEMENTS = [
  {
    icon: <Trophy size={24} />,
    rank: "WINNER",
    index: "ACH_01",
    event: "Hackoverflow 2K24",
    scale: "National Level",
    year: "2024",
    stats: [
      { value: "24h",  label: "Build Sprint" },
      { value: "250+", label: "Teams Competed" },
      { value: "#1",   label: "Final Rank" },
    ],
    title: "Winner – Hackoverflow 2K24",
    desc: "National-level hackathon. Competed against top engineering teams across India to build an innovative solution under 24 hours.",
  },
  {
    icon: <Award size={24} />,
    rank: "BEST JUNIOR",
    index: "ACH_02",
    event: "SIH Internal 2023",
    scale: "Internal Selection",
    year: "2023",
    stats: [
      { value: "250+",   label: "Teams" },
      { value: "Junior", label: "Category" },
      { value: "#1",     label: "Junior Rank" },
    ],
    title: "Best Junior Team – SIH Internal 2023",
    desc: "Selected as the best junior team out of 250+ competing teams in the Smart India Hackathon internal selection round.",
  },
];
