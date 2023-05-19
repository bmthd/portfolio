import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import About from "@/components/About";
import Works from "@/components/Works";
import Experience from "@/components/Experience";

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("cover");
  const [backgroundSize, setBackgroundSize] = useState<string>("cover");
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(1);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition <= window.innerHeight) {
        const scale = (1 + scrollPosition / window.innerHeight) * 200;
        console.log("scrollPosition", scrollPosition, "scale", scale);
        setBackgroundSize(`${scale}%`);
        const opacity = Math.max(
          0.3,
          1 - (scrollPosition - window.innerHeight) / 1000
        );
        setBackgroundOpacity(opacity);
      }
    };
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen scroll-smooth max-sm:text-xs">
      {/* 背景画像 */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/img/cover.jpg)`,
          backgroundSize: backgroundSize,
          opacity: backgroundOpacity,
        }}
      />
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow">
        <nav className="flex justify-evenly items-center py-4">
          <Link
            href="#top"
            className={`mx-4 ${
              activeSection === "top"
                ? "text-blue-500 text-base"
                : "text-gray-500"
            }`}
            onClick={() => handleNavClick("")}
          >
            <p>Top</p>
          </Link>
          <Link
            href="#about"
            className={`mx-4 ${
              activeSection === "about"
                ? "text-blue-500 text-base"
                : "text-gray-500"
            }`}
            onClick={() => handleNavClick("about")}
          >
            <p>About</p>
          </Link>
          <Link
            href="#works"
            className={`mx-4 ${
              activeSection === "works"
                ? "text-blue-500 text-base"
                : "text-gray-500"
            }`}
            onClick={() => handleNavClick("works")}
          >
            <p>Works</p>
          </Link>
          <Link
            href="#experience"
            className={`mx-4 ${
              activeSection === "experience"
                ? "text-blue-500 text-base"
                : "text-gray-500"
            }`}
            onClick={() => handleNavClick("experience")}
          >
            <p>Experience</p>
          </Link>
          <Link
            href="#skills"
            className={`mx-4 ${
              activeSection === "skills"
                ? "text-blue-500 text-base"
                : "text-gray-500"
            }`}
            onClick={() => handleNavClick("skills")}
          >
            <p>Skills</p>
          </Link>
        </nav>
      </header>

      <section
        id="top"
        className="flex flex-col items-center justify-center min-h-screen"
        ref={(ref) => (sectionRefs.current["top"] = ref)}
      ></section>

      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen"
        ref={(ref) => (sectionRefs.current["about"] = ref)}
      >
        <About />
      </section>

      <section
        id="works"
        className="flex flex-col items-center justify-center min-h-screen"
        ref={(ref) => (sectionRefs.current["works"] = ref)}
      >
        <Works />
      </section>

      <section
        id="experience"
        className="flex flex-col items-center justify-center min-h-screen"
        ref={(ref) => (sectionRefs.current["experience"] = ref)}
      >
        <Experience />
      </section>

      <section
        id="skills"
        className="flex flex-col items-center justify-center min-h-screen"
        ref={(ref) => (sectionRefs.current["skills"] = ref)}
      >
        {/* <Skills /> */}
      </section>
    </div>
  );
};

export default Portfolio;
