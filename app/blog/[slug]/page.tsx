// app/blog/[slug]/page.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isValidElement } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getAllPosts,
  getPostBySlug,
  getHeadings,
  slugifyHeading,
} from "@/lib/blog";
import { BlogPostHero } from "@/components/BlogPostHero";
import { ArticleToc } from "@/components/ArticleToc";
import { PostLanguageToggle } from "@/components/PostLanguageToggle";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/CtaBand";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.image ? [post.image] : undefined,
    },
  };
}

/** Flatten a heading's rendered children back to plain text, so its anchor id
 *  matches the one getHeadings derived from the same markdown. */
function nodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    return nodeText((node.props as { children?: ReactNode }).children);
  }
  return "";
}

/** Anchor targets for the TOC. All three levels get ids because getHeadings
 *  falls back to h3/h4 on posts that have no h2. scroll-mt clears the sticky
 *  header. Markdown headings carry no attributes, so nothing else from props
 *  needs forwarding (and `node` must not reach the DOM). */
const headingComponents: Components = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
      {children}
    </h3>
  ),
  h4: ({ children }: { children?: ReactNode }) => (
    <h4 id={slugifyHeading(nodeText(children))} className="scroll-mt-28">
      {children}
    </h4>
  ),
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // A bilingual post (Soovita publishes Estonian and English in one file)
  // renders both bodies and lets the reader switch between them. The hidden
  // one is hidden in CSS, so no JavaScript is needed to read the English.
  const bilingual = Boolean(post.bodyEt);
  const headings = getHeadings(post.body);
  const headingsEt = post.bodyEt ? getHeadings(post.bodyEt) : [];
  const hasToc = headings.length > 1;

  const gridClass = hasToc
    ? "grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14"
    : "";
  const articleClass = `prose-blog max-w-3xl ${hasToc ? "" : "mx-auto"}`;

  return (
    <main className="flex-1">
      <div id="post-languages" data-post-lang="en">
        <BlogPostHero post={post} />

        <Section className="bg-white">
          {bilingual && (
            <div className="mb-8 flex justify-end">
              <PostLanguageToggle />
            </div>
          )}

          <div className={gridClass}>
            {hasToc && (
              <div data-lang="en">
                <ArticleToc headings={headings} />
              </div>
            )}

            <article className={articleClass} data-lang="en" lang="en">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={headingComponents}>
                {post.body}
              </ReactMarkdown>
            </article>

            {bilingual && headingsEt.length > 1 && (
              <div data-lang="et">
                <ArticleToc headings={headingsEt} />
              </div>
            )}

            {bilingual && (
              <article className={articleClass} data-lang="et" lang="et">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={headingComponents}>
                  {post.bodyEt as string}
                </ReactMarkdown>
              </article>
            )}
          </div>
        </Section>
      </div>

      <CtaBand />
    </main>
  );
}
