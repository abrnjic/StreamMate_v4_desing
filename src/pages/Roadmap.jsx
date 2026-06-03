import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Github, Calendar, User, MessageSquare, ExternalLink, Filter, CheckCircle, Circle, AlertCircle } from "lucide-react";
import BrandLogo from "@/components/streammate/BrandLogo";

function IssueCard({ issue }) {
  const [expanded, setExpanded] = useState(false);

  const stateColors = {
    open: "text-green-400 bg-green-400/10 border-green-400/30",
    closed: "text-red-400 bg-red-400/10 border-red-400/30"
  };

  const stateIcons = {
    open: <CheckCircle size={16} />,
    closed: <Circle size={16} />
  };

  return (
    <div className="bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg border ${stateColors[issue.state]}`}>
            {stateIcons[issue.state]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-slate-500">#{issue.number}</span>
              {issue.labels.slice(0, 3).map((label, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${label.color}20`,
                    color: label.color,
                    border: `1px solid ${label.color}40`
                  }}
                >
                  {label.name}
                </span>
              ))}
            </div>
            <h3 className="text-white font-semibold text-base mb-2 truncate">{issue.title}</h3>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(issue.created_at).toLocaleDateString('hr-HR')}
              </div>
              {issue.assignees.length > 0 && (
                <div className="flex items-center gap-1">
                  <User size={12} />
                  {issue.assignees.join(', ')}
                </div>
              )}
              <div className="flex items-center gap-1">
                <MessageSquare size={12} />
                {issue.comments}
              </div>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
          </button>
        </div>

        {expanded && issue.body && (
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-sm text-slate-300 whitespace-pre-wrap">{issue.body}</p>
            <a
              href={issue.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-xs text-blue-400 hover:text-blue-300"
            >
              View on GitHub <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterBar({ filter, onFilterChange }) {
  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto">
      <div className="flex items-center gap-2 text-slate-400 text-sm">
        <Filter size={16} />
        <span>Filter:</span>
      </div>
      {['all', 'open', 'closed'].map((status) => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
            filter === status
              ? 'bg-blue-600 text-white'
              : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'
          }`}
        >
          {status === 'all' ? 'Svi' : status === 'open' ? 'Otvoreni' : 'Zatvoreni'}
        </button>
      ))}
    </div>
  );
}

export default function Roadmap() {
  const [filter, setFilter] = useState('all');

  const { data, isLoading, error } = useQuery({
    queryKey: ['github-issues'],
    queryFn: () => base44.functions.invoke('getGitHubIssues', {}),
    refetchInterval: 60000 // Refresh every minute
  });

  const filteredIssues = data?.issues?.filter(issue => {
    if (filter === 'all') return true;
    return issue.state === filter;
  }) || [];

  const stats = {
    total: data?.issues?.length || 0,
    open: data?.issues?.filter(i => i.state === 'open').length || 0,
    closed: data?.issues?.filter(i => i.state === 'closed').length || 0
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BrandLogo variant="full" height={40} />
              <div>
                <h1 className="text-white font-bold text-xl">Development Roadmap</h1>
                <p className="text-slate-400 text-sm">StreamMate_v4_desing · GitHub Issues</p>
              </div>
            </div>
            <a
              href="https://github.com/abrnjic/StreamMate_v4_desing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              <Github size={18} />
              Open Repository
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4">
            <div className="text-slate-400 text-xs mb-1">Total Issues</div>
            <div className="text-white font-bold text-2xl">{stats.total}</div>
          </div>
          <div className="bg-slate-900/50 rounded-xl border border-green-400/20 p-4">
            <div className="text-green-400 text-xs mb-1">Open</div>
            <div className="text-white font-bold text-2xl">{stats.open}</div>
          </div>
          <div className="bg-slate-900/50 rounded-xl border border-red-400/20 p-4">
            <div className="text-red-400 text-xs mb-1">Closed</div>
            <div className="text-white font-bold text-2xl">{stats.closed}</div>
          </div>
        </div>

        {/* Filter */}
        <FilterBar filter={filter} onFilterChange={setFilter} />

        {/* Issues List */}
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="bg-red-400/10 border border-red-400/30 rounded-xl p-6 text-center">
            <AlertCircle size={48} className="mx-auto mb-4 text-red-400" />
            <h3 className="text-red-400 font-semibold mb-2">Error Loading Issues</h3>
            <p className="text-slate-400 text-sm">{error.message}</p>
          </div>
        ) : filteredIssues.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-12 text-center">
            <Github size={48} className="mx-auto mb-4 text-slate-600" />
            <h3 className="text-white font-semibold mb-2">No Issues Found</h3>
            <p className="text-slate-400 text-sm">
              {filter === 'all' ? 'Repository has no issues yet.' : `No ${filter} issues.`}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredIssues.map((issue) => (
              <IssueCard key={issue.id} issue={issue} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}