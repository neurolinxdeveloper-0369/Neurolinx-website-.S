import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search, 
  X, 
  BookOpen, 
  Filter, 
  ChevronRight, 
  ChevronLeft,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { 
  BLOG_POSTS, 
  BLOG_CATEGORIES, 
  getFeaturedBlogPosts, 
  BlogPost 
} from '../data/blogData';

export function Blogs() {
  const [activeCategory, setActiveCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 9;
  const articlesGridRef = useRef<HTMLDivElement>(null);

  // Set document SEO title & meta description
  useEffect(() => {
    document.title = "Insights & Innovations | Technology & Engineering Blogs | Neurolinx Global";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Explore deep-dive technical articles, guides, and engineering innovations in Smart Home Automation, IoT, Railway Technologies, RMS, Robotics, and Semiconductors by Neurolinx.'
    );
  }, []);

  // Featured articles
  const { large: featuredLarge, small: featuredSmall } = useMemo(() => {
    return getFeaturedBlogPosts();
  }, []);

  // Filtered articles list
  const filteredArticles = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      // Category filter
      const matchesCategory = 
        activeCategory === 'All Articles' || 
        post.category.toLowerCase() === activeCategory.toLowerCase();

      // Search query filter (title, summary, category, keywords)
      if (!searchQuery.trim()) {
        return matchesCategory;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesTitle = post.title.toLowerCase().includes(q);
      const matchesSummary = post.summary.toLowerCase().includes(q);
      const matchesCat = post.category.toLowerCase().includes(q);
      const matchesKeywords = post.keywords.some(k => k.toLowerCase().includes(q));

      return matchesCategory && (matchesTitle || matchesSummary || matchesCat || matchesKeywords);
    });
  }, [activeCategory, searchQuery]);

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * articlesPerPage;
    return filteredArticles.slice(start, start + articlesPerPage);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (articlesGridRef.current) {
      const topOffset = articlesGridRef.current.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const clearFilters = () => {
    setActiveCategory('All Articles');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All Articles': BLOG_POSTS.length };
    BLOG_POSTS.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Determine whether to show the Featured section (only on All Articles and when no search query is typed)
  const showFeatured = activeCategory === 'All Articles' && searchQuery.trim() === '';

  return (
    <div className="w-full bg-white min-h-screen text-slate-800 font-body selection:bg-brand-red selection:text-white">
      
      {/* ── 1. PREMIUM HERO SECTION ── */}
      <section className="relative w-full pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-white border-b border-gray-200 text-slate-900 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/[0.05] blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider mb-6 border border-red-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>Neurolinx Research &amp; Insights</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.1] max-w-4xl mx-auto">
            Insights &amp; <span className="text-[#E0001B] inline-block">Innovations</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Explore ideas, technologies, and innovations shaping the future of intelligent automation and connected living.
          </p>

          {/* Quick Breadcrumb / Meta Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-red" />
              <strong className="text-slate-900 font-bold">{BLOG_POSTS.length}</strong> Peer-Reviewed Articles
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-red" />
              <strong className="text-slate-900 font-bold">{BLOG_CATEGORIES.length - 1}</strong> Core Engineering Domains
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-red" />
              Hardware &amp; Software Integration
            </span>
          </div>

        </div>
      </section>

      {/* ── 2. SEARCH & CATEGORY FILTER BAR ── */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-gray-200/80 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full lg:w-96 shrink-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, keyword, or topic..."
                className="w-full pl-10 pr-10 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E0001B]/30 focus:border-[#E0001B] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills (Horizontal Scroll on Mobile/Tablet) */}
            <div className="w-full overflow-x-auto no-scrollbar py-1">
              <div className="flex items-center gap-2 min-w-max">
                {BLOG_CATEGORIES.map((category) => {
                  const isActive = activeCategory.toLowerCase() === category.toLowerCase();
                  const count = categoryCounts[category] ?? 0;

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#E0001B] text-white shadow-md shadow-red-500/25 scale-[1.02]'
                          : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700 hover:text-gray-900 border border-transparent'
                      }`}
                    >
                      <span>{category}</span>
                      {count > 0 && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. FEATURED ARTICLES SECTION (1 Large + 2 Small Cards) ── */}
      {showFeatured && (
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200/70">
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E0001B]" />
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 tracking-tight">
                Featured Insights
              </h2>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Curated by the Neurolinx Engineering Desk
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: One Large Featured Card (lg:col-span-7) */}
            {featuredLarge && (
              <article className="lg:col-span-7 bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-red-200 transition-all duration-500 overflow-hidden flex flex-col group">
                <Link to={`/blogs/${featuredLarge.slug}`} className="block relative h-72 sm:h-96 w-full overflow-hidden bg-gray-900">
                  <img
                    src={featuredLarge.featuredImage}
                    alt={featuredLarge.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Category Badge & Read Time Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E0001B] text-white shadow-sm uppercase tracking-wider">
                      {featuredLarge.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                      Featured Guide
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-300">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-400" />
                      {featuredLarge.publishDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-red-400" />
                      {featuredLarge.readTime}
                    </span>
                  </div>
                </Link>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/blogs/${featuredLarge.slug}`} className="block">
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 group-hover:text-[#E0001B] transition-colors leading-tight mb-3">
                        {featuredLarge.title}
                      </h3>
                    </Link>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3 mb-6">
                      {featuredLarge.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <div className="w-8 h-8 rounded-full bg-red-100 text-[#E0001B] font-bold flex items-center justify-center text-xs">
                        {featuredLarge.author.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{featuredLarge.author.name}</p>
                        <p className="text-[11px] text-gray-500">{featuredLarge.author.role}</p>
                      </div>
                    </div>

                    <Link
                      to={`/blogs/${featuredLarge.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E0001B] group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Right: Two Smaller Featured Cards Stacked (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {featuredSmall.map((smallPost) => (
                <article
                  key={smallPost.id}
                  className="bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl hover:border-red-200 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group"
                >
                  <Link
                    to={`/blogs/${smallPost.slug}`}
                    className="sm:w-5/12 h-48 sm:h-auto overflow-hidden relative bg-gray-900 shrink-0"
                  >
                    <img
                      src={smallPost.featuredImage}
                      alt={smallPost.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0001B] text-white shadow-xs">
                        {smallPost.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-5 sm:p-6 sm:w-7/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-red-500" />
                          {smallPost.publishDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-red-500" />
                          {smallPost.readTime}
                        </span>
                      </div>

                      <Link to={`/blogs/${smallPost.slug}`} className="block">
                        <h4 className="text-base sm:text-lg font-display font-bold text-gray-900 group-hover:text-[#E0001B] transition-colors leading-snug mb-2 line-clamp-2">
                          {smallPost.title}
                        </h4>
                      </Link>

                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-4">
                        {smallPost.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[11px] text-gray-500 font-medium">
                        {smallPost.author.name}
                      </span>
                      <Link
                        to={`/blogs/${smallPost.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#E0001B] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </section>
      )}

      {/* ── 4. ARTICLES GRID & PAGINATION ── */}
      <section ref={articlesGridRef} className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-gray-900 tracking-tight">
              {activeCategory === 'All Articles' ? 'All Articles & Engineering Guides' : activeCategory}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} 
              {searchQuery && <span> matching <span className="font-semibold text-gray-800">"{searchQuery}"</span></span>}
            </p>
          </div>

          {(activeCategory !== 'All Articles' || searchQuery) && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-50 hover:bg-red-100 text-[#E0001B] transition-colors border border-red-200 self-start sm:self-auto"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-xl mx-auto my-12">
            <div className="w-16 h-16 rounded-full bg-red-50 text-[#E0001B] flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">No matching articles found</h3>
            <p className="text-sm text-gray-600 mb-6">
              We couldn't find any articles matching your search query. Try searching with different keywords or browse our full collection.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 rounded-full bg-[#E0001B] hover:bg-[#c00017] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-red-500/20"
            >
              Browse All Articles
            </button>
          </div>
        ) : (
          <>
            {/* 3-Column Responsive Grid (Desktop 3, Tablet 2, Mobile 1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-red-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Article Thumbnail */}
                  <Link
                    to={`/blogs/${article.slug}`}
                    className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100 block shrink-0"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#E0001B] border border-gray-200/80 shadow-xs">
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  {/* Article Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          {article.publishDate}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-red-500" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link to={`/blogs/${article.slug}`} className="block">
                        <h3 className="text-lg font-display font-bold text-gray-900 mb-2.5 group-hover:text-[#E0001B] transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                        {article.summary}
                      </p>
                    </div>

                    {/* Bottom Author & CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-medium truncate max-w-[150px]">
                        {article.author.name}
                      </span>
                      <Link
                        to={`/blogs/${article.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-[#E0001B] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
                <p className="text-xs text-gray-500 order-2 sm:order-1">
                  Page <span className="font-semibold text-gray-800">{currentPage}</span> of <span className="font-semibold text-gray-800">{totalPages}</span> • Showing {(currentPage - 1) * articlesPerPage + 1} to {Math.min(currentPage * articlesPerPage, filteredArticles.length)} of {filteredArticles.length} articles
                </p>

                <div className="flex items-center gap-2 order-1 sm:order-2">
                  {/* Prev Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                        currentPage === pageNum
                          ? 'bg-[#E0001B] text-white shadow-md shadow-red-500/20'
                          : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 transition-colors flex items-center gap-1"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </section>

    </div>
  );
}
