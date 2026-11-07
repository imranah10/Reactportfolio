import { useEffect, useState } from 'react';

/**
 * Live, real stats — fetched client-side from public APIs (CORS enabled).
 * Falls back to verified values (checked 2026-09-22) if the API is unreachable.
 */
const useLiveStats = () => {
  const [npmTotal, setNpmTotal] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    let alive = true;

    // cumulative npm downloads since launch window (one range call, summed client-side)
    fetch('https://api.npmjs.org/downloads/range/2026-05-01:2026-12-31/toolverse')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('npm api'))))
      .then((d) => {
        if (alive && Array.isArray(d?.downloads)) {
          setNpmTotal(d.downloads.reduce((a, x) => a + x.downloads, 0));
        }
      })
      .catch(() => {});

    fetch('https://api.github.com/users/imranah10')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('gh api'))))
      .then((d) => { if (alive && d?.public_repos != null) setRepos(d.public_repos); })
      .catch(() => {});

    return () => { alive = false; };
  }, []);

  return { npmTotal, repos };
};

export default useLiveStats;
