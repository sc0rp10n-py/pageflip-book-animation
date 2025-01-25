import Link from "next/link"

const Home = () => {
  return (
    <>
      <div className="container mx-auto py-10">
        <Link href="/book">
          Go To Book Animation
        </Link>
      </div>
    </>
  )
}

export default Home