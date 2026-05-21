export default function ImageCard({ src, alt, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-3xl shadow-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}
