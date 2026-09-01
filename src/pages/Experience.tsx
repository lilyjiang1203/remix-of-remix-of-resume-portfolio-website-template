import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/sections/WorkSection";

export default function Experience() {
  useEffect(() => {
    document.title = "Experience — Li Jiang";
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Navigation />
      <div className="pt-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="text-tiny text-muted-foreground hover:text-primary transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
      <WorkSection full />
    </Layout>
  );
}
