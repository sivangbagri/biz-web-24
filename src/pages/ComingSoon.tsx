import { FC } from 'react';
import '../styles/hero.css';

const ComingSoon: FC=()=> {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4" style={{
      backgroundImage: "linear-gradient(290deg, #7e28d6 5%, #2a225b 64%)",
    }}>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Coming Soon..</h1>
        <p className="text-xl mb-8 text-gray-300">We're working hard to bring you something amazing. Stay tuned!</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-grow p-2 bg-black/15 text-gray-400" required />
          <button type="submit" className="primary-button cursor-pointer bg-[#7e28d6]">
            Notify Me
          </button>
        </form>
      </main>
    </div>
  )
}

export default ComingSoon;