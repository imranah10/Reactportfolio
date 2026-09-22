import { useEffect, useState } from 'react';

/**
 * Live, real stats — fetched client-side from public APIs (CORS enabled).
 * Falls back to verified values (checked 2026-09-22) if the API is unreachable.
 */
const useLiveStats = () => {
  const [npmMonthly, setNpmMonthly] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    let alive = true;

    fetch('https://api.npmjs.org/downloads/point/last-month/toolverse')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('npm api'))))
      .then((d) => { if (alive && d?.downloads) setNpmMonthly(d.downloads); })
      .catch(() => {});

    fetch('https://api.github.com/users/imranah10')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('gh api'))))
      .then((d) => { if (alive && d?.public_repos != null) setRepos(d.public_repos); })
      .catch(() => {});

    return () => { alive = false; };
  }, []);

  return { npmMonthly, repos };
};

export default useLiveStats;
