import React from "react";

export default function ContactGrid() {
  const contactCards = [
    {
      title: "Email",
      value: "youremail@gmail.com",
      subtext: "Let's get in touch",
      link: "mailto:youremail@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "/in/your-linkedin-handle",
      subtext: "Professional network",
      link: "https://linkedin.com",
    },
    {
      title: "GitHub",
      value: "@yourgithub",
      subtext: "Check out my code",
      link: "https://github.com",
    },
    {
      title: "Twitter",
      value: "@yourtwitter",
      subtext: "Behind the scenes",
      link: "https://twitter.com",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left pt-4">
      {contactCards.map((card) => (
        <a
          key={card.title}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 bg-[#1c1f28] border border-slate-800/80 rounded-xl hover:border-slate-700 transition-all duration-300 group block"
        >
          <span className="text-xs font-mono text-slate-400 block mb-1">
            {card.title}
          </span>
          <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors block">
            {card.value}
          </span>
          <span className="text-[11px] font-sans text-slate-500 mt-2 block">
            {card.subtext}
          </span>
        </a>
      ))}
    </div>
  );
}