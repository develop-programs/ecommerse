export default function Rating({ value }: { value: string }) {
  const stars = Math.floor(parseFloat(value));
  return (
    <div className="flex gap-2">
      {Array(5)
        .fill(0)
        .map((_, index) => {
          const color = index < stars / 2 ? "orange" : "gray";
          return (
            <svg
              key={index}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
            >
              <path
                d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                fill={color}
              />
            </svg>
          );
        })}
    </div>
  );
}
