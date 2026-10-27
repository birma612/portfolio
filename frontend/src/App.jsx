
import { useEffect, useState } from 'react';

import {
  getProfile,
  getSkills,
  getExperience,
  getEducation,
  getFeaturedProjects,
} from './services/api';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
// import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadPortfolio() {
      try {
        // Load the profile first because it is required for the hero.
        const profileData = await getProfile();

        if (!isMounted) return;

        setProfile(profileData);

        // Load the remaining sections independently.
        const results = await Promise.allSettled([
          getSkills(),
          getExperience(),
          getEducation(),
          getFeaturedProjects(),
        ]);

        if (!isMounted) return;

        const [
          skillsResult,
          experienceResult,
          educationResult,
          projectsResult,
        ] = results;

        if (skillsResult.status === 'fulfilled') {
          setSkills(skillsResult.value);
        } else {
          console.error('Could not load skills:', skillsResult.reason);
        }

        if (experienceResult.status === 'fulfilled') {
          setExperience(experienceResult.value);
        } else {
          console.error('Could not load experience:', experienceResult.reason);
        }

        if (educationResult.status === 'fulfilled') {
          setEducation(educationResult.value);
        } else {
          console.error('Could not load education:', educationResult.reason);
        }

        if (projectsResult.status === 'fulfilled') {
          setFeaturedProjects(projectsResult.value);
        } else {
          console.error('Could not load featured projects:', projectsResult.reason);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.response?.data?.detail ||
              err.message ||
              'Something went wrong while loading your portfolio.'
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPortfolio();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080612] px-6 text-white">
        <p className="animate-pulse text-lg font-medium text-purple-300">
          Loading portfolio...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#080612] px-6 text-center text-white">
        <h1 className="text-2xl font-bold">Unable to load portfolio</h1>

        <p className="max-w-xl text-gray-400">{error}</p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-medium transition hover:opacity-90"
        >
          Try Again
        </button>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080612] px-6 text-white">
        <p className="text-gray-300">No profile data available.</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#080612] text-white">
      <Navbar profile={profile} />

      <main>
        <Hero profile={profile} />

        <About profile={profile} />

        <Skills skills={skills} />

        {/* <Experience experience={experience} /> */}

        <Education education={education} />

        <Projects projects={featuredProjects} />

        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />

    </div>
  );
}

export default App;

//  today i have to add original dada of mine and make it more responsive and modern ui... 
//  I know I can do it ...

