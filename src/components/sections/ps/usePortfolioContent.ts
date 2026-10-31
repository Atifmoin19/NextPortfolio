import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { portfolioData } from "../../../data/content";

type Content = typeof portfolioData;

/** Firestore content from Redux, falling back to the seed in data/content.ts per field. */
export function usePortfolioContent(): Content {
  const data = useSelector((state: RootState) => state.portfolio.data) as Partial<Content> | null;
  return {
    ...portfolioData,
    ...(data ?? {}),
    skills: data?.skills?.length ? data.skills : portfolioData.skills,
    experience: data?.experience?.length ? data.experience : portfolioData.experience,
    contact: data?.contact?.email ? data.contact : portfolioData.contact,
  } as Content;
}
