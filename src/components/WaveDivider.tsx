interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

const WaveDivider = ({ className = "", flip = false }: WaveDividerProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-16 md:h-24 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
          className="fill-background"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
