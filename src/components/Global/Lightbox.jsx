import { useState, useEffect } from "react";

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  useEffect(() => {
    // Listen for clicks on elements with data-lightbox
    const handleClick = (e) => {
      const link = e.target.closest("[data-lightbox]");
      if (link) {
        e.preventDefault();
        const src = link.getAttribute("href") || link.getAttribute("data-full") || link.src;
        const alt = link.getAttribute("alt") || "";
        setImgSrc(src);
        setImgAlt(alt);
        setIsOpen(true);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div
        className="fixed inset-0 z-[9999] bg-black/150 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
        onClick={closeLightbox}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="max-h-[75vh] max-w-[75vw] object-contain rounded-xl shadow-2xl transition-transform duration-300 scale-100 hover:scale-[1.03] lightbox-fade"
        />
        <button
          className="absolute top-5 right-5 text-white text-3xl font-light hover:opacity-80"
          onClick={closeLightbox}
        >
          ×
        </button>
      </div>
    )
  );
}
