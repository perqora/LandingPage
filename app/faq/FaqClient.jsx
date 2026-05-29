"use client";

import { useMemo, useState } from 'react';
import { faqCategories } from '../faqData';

export default function FaqClient() {
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState('engagement-basics-0');

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return faqCategories;
    }

    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter((item) => {
          const searchable = `${category.title} ${item.question} ${item.answer}`.toLowerCase();
          return searchable.includes(normalizedQuery);
        }),
      }))
      .filter((category) => category.questions.length > 0);
  }, [query]);

  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <section className="border-b border-[#ded7c8] bg-[#f8f5ee]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold text-[#1f7568]">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-6xl">
            Questions CTOs ask before working with Perqora.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605c]">
            Search across engagement basics, fit, process, pricing, technical scope, and what
            happens after the first project.
          </p>
          <label className="mt-8 block">
            <span className="sr-only">Search FAQ</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Kubernetes, pricing, Terraform, cloud cost..."
              className="w-full rounded-2xl border border-[#d8d2c4] bg-white px-5 py-4 text-base text-[#18201d] outline-none transition placeholder:text-[#8b948f] focus:border-[#1f7568]"
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:py-16">
        {filteredCategories.length === 0 ? (
          <div className="rounded-2xl border border-[#ded7c8] bg-white p-6 text-[#53605c]">
            No FAQ matches that search.
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredCategories.map((category) => (
              <section key={category.title}>
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold text-[#111827]">{category.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#53605c]">{category.description}</p>
                </div>
                <div className="grid gap-3">
                  {category.questions.map((item, index) => {
                    const id = `${category.title.toLowerCase().replaceAll(' ', '-')}-${index}`;
                    const isOpen = openId === id;

                    return (
                      <article key={item.question} className="rounded-2xl border border-[#ded7c8] bg-white">
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? '' : id)}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-base font-semibold text-[#111827]">{item.question}</span>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8d2c4] text-lg text-[#1f7568]">
                            {isOpen ? '-' : '+'}
                          </span>
                        </button>
                        {isOpen ? (
                          <div className="border-t border-[#eee8dc] px-5 py-4">
                            <p className="text-sm leading-7 text-[#53605c]">{item.answer}</p>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
