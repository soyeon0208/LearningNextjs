import { useState, useEffect } from 'react';
import Seo from '@/components/Seo';
import Navbar from '@/components/NavBar';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  // results 인자 -> 아래 함수 확인!

  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}}`);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => onClick(movie.id, movie.original_title)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  //이름 바꿀 수 없음.
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
