import { FC } from 'react';
import '../styles/hero.css';

const Blogs: FC=()=> {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Coming Soon..</h1>
      </main>
    </div>
  )
}

export default Blogs;