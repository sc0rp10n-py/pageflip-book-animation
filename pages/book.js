import styles from "@/styles/book.module.css";
import HTMLFlipBook from "react-pageflip";
import { bookData } from "@/data/book";
import Image from "next/image";

const BookPage = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-center text-2xl font-bold mb-6">Flip Book Example</h1>
            <HTMLFlipBook
                width={400}
                height={600}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={(e) => console.log("flipped", e)}
            >
                {bookData.map((page) => {
                    if (page.image) {
                        return (
                            <div key={page.id} className={styles.page}>
                                <Image src={page.image} alt={`Page ${page.id}`} width={300} height={400} />
                            </div>
                        );
                    } else {
                        return (
                            <div key={page.id} className={styles.page}>
                                <h2>{page.title}</h2>
                                <p>{page.content}</p>
                            </div>
                        );
                    }
                })}
            </HTMLFlipBook>
        </div>
    );
};

export default BookPage;
