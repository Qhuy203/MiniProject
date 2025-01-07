import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation } from 'swiper/modules';
import { Play } from 'lucide-react';

interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
  }
  

interface MovieListProps {
    title: string;
    data: Movie[];
}

export const MovieList: React.FC<MovieListProps> = ({ title, data }) => {
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    const handleTrailer = async (id: number) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            });
            const data = await response.json();
            const trailer = data.results[0]?.key;
            if (trailer) {
                setTrailerKey(trailer);
            } else {
                console.error('No trailer found');
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    };

    const closeModal = () => {
        setTrailerKey(null);
    };

    return (
        <>
            <div className="text-white mt-8 bg-[#2d2e37] p-3 mb-4 relative w-[1060px] mr-auto ml-auto">
                <h2 className="text-2xl">{title}</h2>
            </div>

            <Swiper
                className="relative w-[1060px] mx-auto"  // Cài đặt chiều rộng Swiper là 1060px và căn giữa
                spaceBetween={20}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    400: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {data.length > 0 && data.map((item) => (
                    <SwiperSlide key={item.id}>
                    <div className="w-[250px] h-[380px] relative group flex flex-col justify-between" onClick={() => handleTrailer(item.id)}>
                      <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40 group-hover:bg-black/70 transition-all duration-500 ease-in-out" />
                        <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                             alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute bottom-3 right-3 p-2 bg-[#ffb43a] text-white rounded-full hover:bg-[#ff9800] transition">
                          <Play className="w-4 h-4 cursor-pointer" />
                        </div>
                      </div>
                  
                      {/* Title and description section */}
                      <div className="flex flex-col justify-between p-2 absolute bottom-2 left-2 right-2  max-w-[120px] ">
                        <h2 className="text-xl font-bold text-white text-ellipsis overflow-hidden whitespace-nowrap max-h-[50px]">
                          {item.title || item.title}
                        </h2>
                        <p className="uppercase text-xs text-white font-semibold pt-3">Action</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                ))}
            </Swiper>



            {trailerKey && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl">
                        <button className="absolute top-2 right-2 text-white text-2xl" onClick={closeModal}>&times;</button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
