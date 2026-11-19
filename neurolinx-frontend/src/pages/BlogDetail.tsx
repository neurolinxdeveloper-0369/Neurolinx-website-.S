import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Check, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  CheckCircle2,
  ListOrdered,
  ArrowUp
} from 'lucide-react';
import { getBlogPostBySlug, getRelatedBlogPosts, BlogPost } from '../data/blogData';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    if (!slug) {
      navigate('/blogs');
      return;
    }

    const currentPost = getBlogPostBySlug(slug);
    if (!currentPost) {
      navigate('/blogs');
      return;
    }

    setPost(currentPost);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title and meta description
    document.title = `${currentPost.seoTitle} | Neurolinx Global`;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentPost.seoDescription);

    // Inject JSON-LD Structured Data
    const schemaScriptId = 'blog-jsonld-schema';
    let schemaScript = document.getElementById(schemaScriptId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaScriptId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "headline": currentPost.title,
          "description": currentPost.summary,
          "image": currentPost.featuredImage.startsWith('http') 
            ? currentPost.featuredImage 
            : `https://neurolinx.in${currentPost.featuredImage}`,
          "datePublished": currentPost.publishDate,
          "dateModified": currentPost.publishDate,
          "author": {
            "@type": "Organization",
            "name": currentPost.author.name,
            "url": "https://neurolinx.in"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Neurolinx Global Private Limited",
            "logo": {
              "@type": "ImageObject",
              "url": "https://neurolinx.in/media/neurolinx_logo_full.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://neurolinx.in/blogs/${currentPost.slug}`
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://neurolinx.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blogs & Insights",
              "item": "https://neurolinx.in/blogs"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": currentPost.title,
              "item": `https://neurolinx.in/blogs/${currentPost.slug}`
            }
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById(schemaScriptId);
      if (el) el.remove();
    };
  }, [slug, navigate]);

  // Handle Reading Progress & Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // ScrollSpy for Active Section
      if (post) {
        const sections = post.tableOfContents.map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(post.tableOfContents[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleShareTwitter = () => {
    if (post) {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Insightful read on ${post.title} by @Neurolinx:`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    }
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center pt-24">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand-red border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedBlogPosts(post.relatedArticleSlugs);

  return (
    <div className="w-full bg-[#FAFAFB] min-h-screen text-slate-800 font-body selection:bg-brand-red selection:text-white relative">
      
      {/* ── Floating Back to Top Button ── */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-2xl hover:bg-brand-red hover:scale-105 transition-all duration-300 border border-white/20"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* ── Header Spacer ── */}
      <div className="h-20 sm:h-24 bg-[#0B0F19]" />

      {/* ── Breadcrumb & Article Header Section ── */}
      <header className="w-full bg-white border-b border-gray-200 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumbs" className="flex items-center flex-wrap gap-2 text-xs text-gray-500 mb-6 font-medium">
            <Link to="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link to="/blogs" className="hover:text-black transition-colors">Blogs &amp; Insights</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-brand-red font-semibold">{post.category}</span>
          </nav>

          {/* Category Badge & Metadata */}
          <div className="flex flex-wrap items-center gap-3.5 mb-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-100 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>{post.category}</span>
            </span>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-gray-400" />
                {post.publishDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Article Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-5xl mb-6">
            {post.title}
          </h1>

          {/* Subtitle / Summary */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl leading-relaxed mb-8">
            {post.summary}
          </p>

          {/* Author Byline & Social Share Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center font-display font-bold text-sm shadow-md">
                NL
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{post.author.name}</div>
                <div className="text-xs text-gray-500">{post.author.role}</div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-semibold transition-colors"
                title="Copy link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>

              <button
                onClick={handleShareTwitter}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-700 flex items-center justify-center transition-colors"
                title="Share on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>

              <button
                onClick={handleShareLinkedIn}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-700 flex items-center justify-center transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* ── Main Hero Image Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
        <div className="w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-slate-900 relative">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* ── 2-Column Content Layout (Main Prose + Sticky Sidebar) ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ── LEFT COLUMN: Main Article Prose (8 Cols) ── */}
          <article className="lg:col-span-8 space-y-12">
            
            {/* Executive Introduction Callout */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-brand-red mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Executive Overview</span>
              </div>
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                {post.introduction}
              </p>
            </div>

            {/* Content Sections */}
            {post.sections.map((section, idx) => (
              <section 
                key={section.id} 
                id={section.id}
                className="scroll-mt-28 space-y-6 pt-2"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-brand-red uppercase">
                    <span>SECTION 0{idx + 1}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-snug">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-light">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Section Specific Callout */}
                {section.callout && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 my-6 shadow-md">
                    <div className="text-xs font-mono text-brand-red font-bold uppercase tracking-widest mb-2">
                      KEY ARCHITECTURAL INSIGHT
                    </div>
                    <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
                      {section.callout}
                    </p>
                  </div>
                )}

                {/* Comparison Table if present */}
                {section.comparisonTable && (
                  <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          {section.comparisonTable.headers.map((header, hIdx) => (
                            <th key={hIdx} className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {section.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                            {row.map((cell, cIdx) => (
                              <td 
                                key={cIdx} 
                                className={`py-3.5 px-4 sm:px-6 font-medium ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {/* Practical Applications Section */}
            {post.practicalApplications && post.practicalApplications.length > 0 && (
              <section className="pt-8 border-t border-gray-200 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    Real-World Practical Applications
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.practicalApplications.map((app, appIdx) => (
                    <div 
                      key={appIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Benefits Section */}
            {post.benefits && post.benefits.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-brand-red" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    Strategic Advantages &amp; Benefits
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.benefits.map((benefit, bIdx) => (
                    <div 
                      key={bIdx}
                      className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xs flex items-start gap-3"
                    >
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Frequently Asked Questions Accordion */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faqs" className="scroll-mt-28 pt-8 border-t border-gray-200 space-y-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-brand-red flex items-center justify-center font-bold text-sm">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900">
                    Frequently Asked Questions
                  </h3>
                </div>

                <div className="space-y-3">
                  {post.faqs.map((faq, fIdx) => (
                    <div 
                      key={fIdx}
                      className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xs transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                        className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-brand-red transition-colors"
                      >
                        <span>{faq.question}</span>
                        {openFaqIndex === fIdx ? (
                          <ChevronUp className="w-4 h-4 text-brand-red shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                        )}
                      </button>

                      {openFaqIndex === fIdx && (
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-gray-100 font-light">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Contextual Related Product Banner */}
            {post.relatedProduct && (
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0C101A] to-[#141B2D] text-white shadow-xl relative overflow-hidden border border-white/10">
                <div className="absolute right-0 top-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold uppercase tracking-wider">
                    {post.relatedProduct.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {post.relatedProduct.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
                    {post.relatedProduct.tagline}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={post.relatedProduct.path}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-red hover:bg-[#b00015] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-red-900/30 hover:scale-[1.02]"
                    >
                      <span>{post.relatedProduct.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Back to All Blogs Button */}
            <div className="pt-8 border-t border-gray-200">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-black text-slate-800 text-xs sm:text-sm font-semibold transition-colors bg-white hover:bg-gray-50"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </Link>
            </div>

          </article>

          {/* ── RIGHT COLUMN: Sticky Table of Contents & Tools (4 Cols) ── */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            
            {/* Table of Contents Box */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <ListOrdered className="w-4 h-4 text-brand-red" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Table of Contents
                </h4>
              </div>

              <nav className="space-y-1">
                {post.tableOfContents.map((item, idx) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-3 rounded-lg text-xs sm:text-[13px] transition-all leading-snug font-medium ${
                      activeSection === item.id 
                        ? 'bg-red-50 text-brand-red font-bold translate-x-1' 
                        : 'text-slate-600 hover:text-black hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-gray-400 font-mono mr-2">0{idx + 1}.</span>
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Featured Product Mini Card */}
            {post.relatedProduct && (
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red block">
                  EXPLORE HARDWARE
                </span>
                <h5 className="text-base font-bold text-slate-900 leading-snug">
                  {post.relatedProduct.title}
                </h5>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {post.relatedProduct.tagline}
                </p>
                <Link
                  to={post.relatedProduct.path}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline pt-1"
                >
                  <span>{post.relatedProduct.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Inquiry Prompt Box */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3 shadow-md">
              <h5 className="text-base font-display font-extrabold text-white">
                Have a Technical Project?
              </h5>
              <p className="text-xs text-gray-300 leading-relaxed">
                Speak directly with Neurolinx hardware and IoT systems engineers to review your custom specifications.
              </p>
              <Link
                to="/contact"
                className="inline-block w-full py-2.5 px-4 rounded-xl bg-brand-red hover:bg-[#b00015] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-md"
              >
                Inquire With Engineering
              </Link>
            </div>

          </aside>

        </div>

        {/* ── Related Articles Section (Bottom Grid) ── */}
        {relatedArticles.length > 0 && (
          <section className="mt-20 pt-16 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-red block mb-1">
                  KEEP READING
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                  Related Technical Articles
                </h3>
              </div>
              <Link
                to="/blogs"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-brand-red hover:underline"
              >
                <span>View all articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  onClick={() => navigate(`/blogs/${rel.slug}`)}
                  className="bg-white border border-gray-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
                >
                  <div className="h-48 w-full overflow-hidden relative bg-gray-100">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-brand-red border border-gray-200 shadow-xs">
                        {rel.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2.5">
                        <span>{rel.publishDate}</span>
                        <span>•</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-red transition-colors line-clamp-2 leading-snug mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {rel.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-brand-red group-hover:translate-x-1 transition-transform mt-4">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

      </main>

    </div>
  );
}

export default BlogDetail;
