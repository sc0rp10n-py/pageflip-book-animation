import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { bookData } from "@/data/book";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page-cover" ref={ref} data-density="hard">
      <h2 className="text-center font-bold text-xl">{props.children}</h2>
    </div>
  );
});
PageCover.displayName = "PageCover";

const Page = React.forwardRef(({ page }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="flex flex-col h-full p-4">
        {page.image ? (
          <div className="flex justify-center items-center flex-1">
            <Image
              src={page.image}
              alt={`Page ${page.id}`}
              width={200}
              height={300}
              className="rounded shadow"
            />
          </div>
        ) : (
          <div className="flex flex-col flex-1">
            <h2 className="text-xl font-semibold mb-4">{page.title}</h2>
            <p className="text-gray-700">{page.content}</p>
          </div>
        )}
      </div>
    </div>
  );
});
Page.displayName = "Page";

const BookPage = () => {
    const flipBookRef = useRef(null);

    const nextPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipNext();
        }
    };

    const prevPage = () => {
        if (flipBookRef.current) {
            flipBookRef.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-center text-2xl font-bold mb-6">Flip Book Example</h1>
            <HTMLFlipBook
                width={300}
                height={400}
                size="stretch"
                minWidth={300}
                maxWidth={600}
                minHeight={400}
                maxHeight={800}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                ref={flipBookRef} // Attach the ref here
            >
                <PageCover>Book Cover</PageCover>
                {bookData.map((page) => (
                      <Page key={page.id} page={page} />
                ))}
                <PageCover>Back Cover</PageCover>
            </HTMLFlipBook>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevPage}
                    className="px-4 py-2 bg-blue-500 text-white rounded shadow"
                >
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    className="px-4 py-2 bg-green-500 text-white rounded shadow"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BookPage;
