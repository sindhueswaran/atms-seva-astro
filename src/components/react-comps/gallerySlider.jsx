import { useEffect, useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";
import SwiperComp from "./swiper.jsx"; 

export default function GallerySlider({ galleryImages }) {
  let [isOpen, setIsOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  const ref = useRef();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") { 
      slideNumber + 1 === galleryImages.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    }
    if (event.key === " ") { 
      slideNumber + 1 === galleryImages.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    }
    if (event.key === "ArrowRight") {
      slideNumber + 1 === galleryImages.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    }
    if (event.key === "ArrowLeft") {
      slideNumber === 0
        ? setSlideNumber(galleryImages.length - 1)
        : setSlideNumber(slideNumber - 1);
    }
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setSlideNumber, handleKeyPress]);

  return (
    <div className="mx-1 md:mx-4" ref={ref}>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <Dialog.Panel>
            <div className="fixed top-0 bottom-0 w-full h-full flex items-center justify-center">
              <div
                className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-black/[.9] flex items-center justify-center w-full h-full"
                onClick={(e) => e.stopPropagation() & setIsOpen(false)}
              ></div>

              <Icon
                icon="fa6-regular:circle-xmark"
                className="fixed w-6 h-6 md:w-10 md:h-10 cursor-pointer opacity-60 text-slate-200 z-50 hover:opacity-100 top-10 right-10"
                onClick={handleCloseModal}
              />
              <Icon
                icon="fa6-solid:circle-chevron-left"
                className="fixed w-6 h-6 md:w-10 md:h-10 cursor-pointer opacity-60 text-slate-200 z-50 hover:opacity-100 top-1/2 left-5 md:left-10"
                onClick={prevSlide}
              />
              <Icon
                icon="fa6-solid:circle-chevron-right"
                className="fixed w-6 h-6 md:w-10 md:h-10 cursor-pointer opacity-60 text-slate-200 z-50 hover:opacity-100 top-1/2 right-5 md:right-10"
                onClick={nextSlide}
              />

              <img
                className="p-2 md:py-14 z-20 object-contain pointer-events-none select-none "
                src={galleryImages[slideNumber]}
                alt="Atma seva gallery" 
              />
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
      <div className="sm:columns-2 md:columns-3 lg:columns-4 ">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer overflow-hidden mb-4"
                onClick={() => handleOpenModal(index)}
              >
                <img
                  className="w-auto h-auto transition delay-150 duration-300 ease-in-out hover:scale-105 overflow-hidden"
                  src={slide}
                  alt="Atma seva gallery"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
