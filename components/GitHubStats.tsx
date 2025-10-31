'use client';

import { motion } from 'framer-motion';
import { TerminalBranch, TerminalStar, TerminalFork, TerminalCode, TerminalCalendar, TerminalTrending } from './TerminalIcons';
import { Github, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GitHubStats {
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  total_stars: number;
  total_forks: number;
  total_commits: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

interface ContributionData {
  contributions: number;
  date: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user stats
        const userResponse = await fetch('https://api.github.com/users/TusharND12');
        const userData = await userResponse.json();

        // Fetch repositories to calculate stars and forks
        const reposResponse = await fetch('https://api.github.com/users/TusharND12/repos?per_page=100');
        const reposData = await reposResponse.json();

        let totalStars = 0;
        let totalForks = 0;

        reposData.forEach((repo: any) => {
          totalStars += repo.stargazers_count;
          totalForks += repo.forks_count;
        });

        const githubStats: GitHubStats = {
          public_repos: userData.public_repos,
          public_gists: userData.public_gists,
          followers: userData.followers,
          following: userData.following,
          total_stars: totalStars,
          total_forks: totalForks,
          total_commits: 0, // Would need to fetch from each repo
          avatar_url: userData.avatar_url,
          html_url: userData.html_url,
          created_at: userData.created_at,
          updated_at: userData.updated_at,
        };

        setStats(githubStats);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        setError('Failed to fetch GitHub data');
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-400">Loading your coding journey...</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card text-center animate-pulse">
              <div className="w-16 h-16 bg-gray-700 rounded-lg mb-4 mx-auto"></div>
              <div className="w-16 h-8 bg-gray-700 rounded mb-2 mx-auto"></div>
              <div className="w-24 h-4 bg-gray-700 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            GitHub Activity
          </h2>
          <p className="text-gray-400">Unable to load GitHub data</p>
        </div>
      </div>
    );
  }

  const displayStats = [
    { 
      icon: <TerminalBranch size={24} />, 
      label: 'Public Repos', 
      value: stats.public_repos.toString(), 
      color: '#3a86ff' 
    },
    { 
      icon: <TerminalStar size={24} />, 
      label: 'Stars Earned', 
      value: stats.total_stars.toString(), 
      color: '#ffbe0b' 
    },
    { 
      icon: <TerminalFork size={24} />, 
      label: 'Forks', 
      value: stats.total_forks.toString(), 
      color: '#06ffa5' 
    },
    { 
      icon: <TerminalCode size={24} />, 
      label: 'Followers', 
      value: stats.followers.toString(), 
      color: '#ff006e' 
    },
  ];

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
          GitHub Activity
        </h2>
        <p className="text-gray-400">Live data from my GitHub profile</p>
      </motion.div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <a
          href={stats.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-cyber-blue hover:text-cyber-purple transition-colors"
        >
          <Github size={20} />
          <span>@TusharND12</span>
          <ExternalLink size={16} />
        </a>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {displayStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="card text-center"
          >
            <motion.div
              className="inline-flex p-4 rounded-lg mb-4"
              style={{ backgroundColor: `${stat.color}22` }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ color: stat.color }}>{stat.icon}</div>
            </motion.div>
            <motion.h3
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ color: stat.color }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional GitHub Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 max-w-6xl mx-auto px-4"
      >
        <div className="card">
          <h3 className="text-xl font-bold mb-6 text-center gradient-text">GitHub Profile Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <TerminalCalendar className="mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-cyber-green">Account Created</h4>
              <p className="text-gray-400 text-sm">
                {new Date(stats.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="text-center">
              <TerminalTrending className="mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-cyber-green">Following</h4>
              <p className="text-gray-400 text-sm">{stats.following} developers</p>
            </div>
            <div className="text-center">
              <TerminalCode className="mx-auto mb-2" size={24} />
              <h4 className="font-semibold text-cyber-green">Public Gists</h4>
              <p className="text-gray-400 text-sm">{stats.public_gists} code snippets</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <a
              href={stats.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Github size={20} />
              <span>View Full Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

