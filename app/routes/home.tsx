import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
// import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resuming - AI Resume Analyzer" },
    { name: "description", content: "Smart Feedback for Your Resume!" },
  ];
}

export default function Home() {
  const { isLoading, auth } = usePuterStore();
    const navigate = useNavigate();
    useEffect(() => {
      if(!auth.isAuthenticated) navigate('/auth?next=/');

    }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your Submissions & Check AI-Powered Feedback</h2>
      </div>
      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume: Resume) => (
            <ResumeCard
              key={resume.id}
              resume={resume}
            />
          ))}
        </div>
      )}
    </section>
  </main>;
}
