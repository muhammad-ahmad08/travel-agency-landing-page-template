import Image from "next/image";
import { FaStar, FaClock } from "react-icons/fa";

interface PackageCardProps {
  image: string;
  title: string;
  duration: string;
  rating: number;
  price: string;
  badge?: string; // Optional badge like "Best Seller"
}

export default function PackageCard({ image, title, duration, rating, price, badge }: PackageCardProps) {
  return (
    <div className="bg-surface rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: 'cover' }} 
          className="group-hover:scale-110 transition-transform duration-500" 
        />
        {/* Optional Badge */}
        {badge && (
          <span className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        {/* Rating & Duration */}
        <div className="flex justify-between items-center mb-3 text-sm text-text-muted">
          <span className="flex items-center gap-1 text-gold font-semibold">
            <FaStar /> {rating} Reviews
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> {duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-primary mb-4">
          {title}
        </h3>

        {/* Price & Button (mt-auto pushes this to the bottom) */}
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            <span className="text-xs text-text-muted block">Starting from</span>
            <span className="text-2xl font-heading font-extrabold text-text-main">{price}</span>
          </div>
          <button className="text-primary font-heading font-semibold hover:text-gold transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}